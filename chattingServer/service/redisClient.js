const redis = require('redis');
require('dotenv').config();

// Redis 클라이언트 설정
const redisClient = redis.createClient({
    socket: {
        host: process.env.REDIS_HOST || 'localhost',
        port: process.env.REDIS_PORT || 6379
    },
    username: process.env.REDIS_USER || '',
    password: process.env.REDIS_PASSWORD || ''
});
(async () => {
    try {
        await redisClient.connect(); // 비동기 연결 시도
        console.log('Connected to Redis');
    } catch (err) {
        console.error('Redis connection error:', err);
    }
})();

// 에러 핸들러
redisClient.on('error', (err) => {
    console.error('Redis error:', err);
});

module.exports = redisClient;