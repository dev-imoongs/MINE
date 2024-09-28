const socketIo = require('socket.io');

const chattingSocket = (server) => {
    const io = socketIo(server, {
        cors: {
            origin: "http://localhost:5173", // 클라이언트의 정확한 URL
            methods: ["GET", "POST"],
            credentials: true
        }
    });
    const chatNamespace = io.of('/chat');
    chatNamespace.on('connection', (chatSocket) => {
        const userId = chatSocket.handshake.headers['userid'];
        console.log('userId:', userId);
        console.log('연결 유저: ' + chatSocket.id);

        chatSocket.on('message', (message) => {
            console.log('메세지 받음: ', message);
        });

        chatSocket.on('disconnect', (err) => {
            console.error('클라이언트로 부터 에러:', err);
            console.log('Client disconnected:', chatSocket.id);
        });

        chatSocket.on('error', (err) => {
            console.log(err);
        });
    });
}

module.exports = chattingSocket;