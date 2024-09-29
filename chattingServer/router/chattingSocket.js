const socketIo = require('socket.io');
const redisClient = require('../service/redisClient');

const chattingSocket = (server) => {
    const io = socketIo(server, {
        cors: {
            origin: "http://localhost:5173",
            methods: ["GET", "POST"],
            credentials: true
        }
    });

    const chatNamespace = io.of('/chat');

    // 새로운 연결이 들어올 때
    chatNamespace.on('connection', async (chatSocket) => {
        const userId = chatSocket.handshake.headers['userid']; // 헤더에서 유저 ID 가져옴
        console.log('userId:', userId);
        console.log('연결 유저: ' + chatSocket.id);

        try {
            const messages = await redisClient.lRange(`chat_${userId}`, 0, -1);
            console.log('이전 메시지:', messages);
            
            chatSocket.emit('previousMessages', messages);
        } catch (err) {
            console.error('Redis에서 메시지 가져오기 실패:', err);
        }

        chatSocket.on('message', async (message) => {
            console.log('메세지 받음: ', message);

            try {
                await redisClient.rPush(`chat_${userId}`, message);
                console.log('메시지 Redis에 저장 성공');
            } catch (err) {
                console.error('Redis에 메시지 저장 실패:', err);
            }

            chatNamespace.emit('message', message);
        });

        // 연결 해제 시 처리
        chatSocket.on('disconnect', (err) => {
            console.error('클라이언트로 부터 에러:', err);
            console.log('Client disconnected:', chatSocket.id);
        });

        chatSocket.on('error', (err) => {
            console.log('소켓 에러 발생:', err);
        });
    });
};

module.exports = chattingSocket;