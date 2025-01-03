const redisClient = require('./redisClient');

/**
 * Redis에서 세션 데이터를 가져와 유저 정보를 반환하는 함수
 * @param {string} sessionId - Redis의 세션 ID
 * @returns {Promise<object>} - 유저 정보와 세션 관련 데이터를 반환
 */
const getSessionData = async (sessionId) => {
    try {
        // Redis에서 해시 데이터 가져오기
        const sessionData = await redisClient.hGetAll(`spring:session:sessions:${sessionId}`);

        if (!Object.keys(sessionData).length) {
            console.error('세션 데이터 없음.');
            return false;
        }

        // console.log('Redis에서 가져온 세션 데이터:', sessionData);

        // sessionAttr:userInfo 필드에서 유저 정보 추출
        const userInfoRaw = sessionData['sessionAttr:userInfo'];
        if (!userInfoRaw) {
            console.error('sessionAttr:userInfo 필드가 Redis 데이터에 없습니다.');
            return false;
        }

        const userInfo = JSON.parse(userInfoRaw)[1]; // JSON 문자열을 파싱
        // console.log('Redis에서 가져온 유저 정보:', userInfo);
        //
        // 반환 데이터 구성
        return {
            userInfo, // 유저 정보
            maxInactiveInterval: sessionData['maxInactiveInterval'],
            lastAccessedTime: sessionData['lastAccessedTime'],
            creationTime: sessionData['creationTime'],
        };
    } catch (err) {
        console.error('Redis 에러 또는 JSON 파싱 실패:', err);
        return null;
    }
};

module.exports = { getSessionData };