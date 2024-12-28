const express = require('express');
const SSE = require('express-sse');
const compression = require('compression'); // compression 추가
const dbService = require('../service/postgresService');

const sse = new SSE();
const app = express();

app.use(compression()); // compression 미들웨어 적용

const userUnreadMsg = {}; // 사용자별 SSE 연결 관리 객체

app.get('/unread-messages', (req, res) => {
    const userId = req.query.userId;
    if (!userId) {
        return res.status(400).send('userId is required');
    }

    // 기존 연결이 있으면 기존 연결 종료
    if (userUnreadMsg[userId]) {
        userUnreadMsg[userId].res.end();
        delete userUnreadMsg[userId];
    }

    // SSE 초기화
    sse.init(req, res);
    userUnreadMsg[userId] = sse;

    // 연결 종료 시 userUnreadMsg에서 삭제
    req.on('close', () => {
        console.log(`Connection closed for user: ${userId}`);
        delete userUnreadMsg[userId];
    });
});

setInterval(async () => {
    for (const userId in userUnreadMsg) {
        try {
            // 데이터베이스에서 읽지 않은 메시지 수 가져오기
            const unread = await dbService.unReadMsgCount(userId);

            // SSE로 데이터 전송
            userUnreadMsg[userId].send({ unread });
        } catch (error) {
            console.error(`Failed to fetch unread messages for user ${userId}:`, error);
        }
    }
}, 5000);

module.exports = app;