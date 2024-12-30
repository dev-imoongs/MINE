const express = require('express');
const http = require('http');
const app = express();
const chattingSocket = require('./router/chattingSocket');
const chattingHandler = require('./router/chattingHandler');
const sseHandler = require('./router/sseHandler');
const helmet = require('helmet');
const cors = require('cors');
const port = 3080;
app.use(cors())
app.use(helmet({
    contentSecurityPolicy: false,  // CSP 비활성화
    frameguard: { action: 'deny' },  // X-Frame-Options을 'deny'로 설정
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const webApp = http.createServer(app);
app.use('/chat', chattingHandler,sseHandler);
chattingSocket(webApp)

webApp.listen((port), () => {
    console.log(`Server is running on port ${port}`);
})