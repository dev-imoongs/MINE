const socketIo = require('socket.io');
const redisClient = require('../service/redisClient');
const dbService = require('../service/postgresService');

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
        const headers = chatSocket.handshake.headers;
        console.log('headers ::::: ', headers)
        const chattingRoom = headers.chattingroom;
        const sender = headers.sender;
        const receiver = headers.receiver;
        // console.log('userId:', userId);
        console.log('연결 유저: ' + chatSocket.id);

        try {
            const messages = await redisClient.lRange(`chat_${chattingRoom}`, 0, -1);
            console.log('이전 메시지:', messages);
            
            chatSocket.emit('previousMessages', messages);
        } catch (err) {
            console.error('Redis에서 메시지 가져오기 실패:', err);
        }

        chatSocket.on('message', async (message) => {
            console.log('메세지 받음: ', message);
            try {
                dbService.insertChatting(message, chattingRoom)
                const key = `chat_${chattingRoom}`;
                await redisClient.rPush(key, JSON.stringify(message));

                await redisClient.expire(key, 700);
                console.log('메시지 Redis에 저장 성공');
            } catch (err) {
                console.error('Redis에 메시지 저장 실패:', err);
            }

            chatNamespace.emit('message', message.text);
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