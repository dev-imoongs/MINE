const redisClient = require('../service/redisClient');
const {getSessionData} = require('../service/sessionService');

const sessionValidator = async (req, res, next) => {
    let jsonData = {status : false, message : ''}
    try {
        if (req.path === '/chat/upload' || req.path.startsWith('/chat/chatImg')) {
            return next();
        }
        const sessionId = req.headers.sessionid;
        if(!sessionId){
            jsonData.message = 'Session ID 없음'
            return res.status(401).json(jsonData)
        }

        const session = await getSessionData(sessionId);
        if(!session){
            jsonData.message = '만료된 세션'
            return res.status(401).json(jsonData)
        }
        next();
    }catch (error){
        jsonData.message = 'internal server error'
        console.error('session validation error : ', error)
        return res.status(500).json(jsonData)
    }
}

module.exports = sessionValidator;