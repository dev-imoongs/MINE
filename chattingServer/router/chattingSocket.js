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
        console.log('A user connected: ' + chatSocket.id);

        chatSocket.on('message', (message) => {
            console.log('Received message from client: ', message);
        });

        chatSocket.on('disconnect', (err) => {
            console.error('Client disconnected due to error:', err);
            console.log('Client disconnected:', chatSocket.id);
        });

        chatSocket.on('error', (err) => {
            console.log(err);
        });
    });
}

module.exports = chattingSocket;