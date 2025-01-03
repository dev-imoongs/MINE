const session = require('express-session');
const connectRedis = require('connect-redis');
const RedisStore = connectRedis(session); // express-session과 연결
const redisClient = require('./redisClient'); // Redis 클라이언트 설정

// Express 세션 설정
const sessionMiddleware = session({
    store: new RedisStore({ client: redisClient }), // RedisStore를 생성
    secret: 'test-secret-key', // 테스트용 시크릿
    resave: false, // 세션 변경이 없으면 저장하지 않음
    saveUninitialized: false, // 초기화되지 않은 세션 저장하지 않음
    cookie: {
        secure: false, // HTTPS가 아니므로 false
        httpOnly: true,
        sameSite: 'none', // 테스트용 설정
    },
});

module.exports = sessionMiddleware;