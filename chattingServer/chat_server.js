const express = require('express');
const http = require('http');
const app = express();
const chattingSocket = require('./router/chattingSocket');
const helmet = require('helmet'); 
const cors = require('cors');
const port = 3080;
app.use(cors())
app.use(helmet({
    contentSecurityPolicy: false,  // CSP 비활성화
    frameguard: { action: 'deny' },  // X-Frame-Options을 'deny'로 설정
}));
// app.use(cors({
//     origin: 'http://localhost:5173'  
// }));
const webApp = http.createServer(app);
chattingSocket(webApp)

webApp.listen((port), () => {
    console.log(`Server is running on port ${port}`);
})