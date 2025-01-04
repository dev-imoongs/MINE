const express = require('express');
const SSE = require('express-sse');
const compression = require('compression'); // compression 추가
const dbService = require('../service/postgresService');
const sessionValidator = require('../middleware/sessionValidator');
const {getSessionData} = require("../service/sessionService"); // 세션 유효성 검사 미들웨어

const sse = new SSE();
const app = express();

app.use(compression()); // compression 미들웨어 적용

const userUnreadMsg = {}; // 사용자별 SSE 연결 관리 객체

// 읽지 않은 메시지 알림 SSE 엔드포인트
app.get('/unread-messages', sessionValidator, async (req, res) => {
    const rawSessionId = req.cookies['SESSIONID'];
    const sessionId = Buffer.from(rawSessionId, 'base64').toString('utf-8');
    const session = await getSessionData(sessionId);
    const userId = session.userInfo.userId; // 세션에서 userId 가져오기

    if (!userId) {
        return res.status(401).send('Unauthorized');
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

// 읽지 않은 메시지 주기적으로 알림
setInterval(async () => {
    for (const userId in userUnreadMsg) {
        try {
            // 데이터베이스에서 읽지 않은 메시지 수 가져오기
            const unread = await dbService.unReadMsgCount(userId);
            console.log(unread)
            // SSE로 데이터 전송
            userUnreadMsg[userId].send({ unread });
        } catch (error) {
            console.error(`Failed to fetch unread messages for user ${userId}:`, error);
        }
    }
}, 5000);

module.exports = app;