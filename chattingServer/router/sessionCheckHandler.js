const express = require('express');
const {getSessionData} = require('../service/sessionService')
const app = express();

app.post('/', async (req, res) => {
    const rawSessionId = req.cookies['SESSIONID'];
    const sessionId = Buffer.from(rawSessionId, 'base64').toString('utf-8');
    const session = await getSessionData(sessionId);
    if(!session){
        return res.status(401).json({status : false, message : 'session fail'})
    }
    res.status(200).json({ status: true, message: 'Session is valid.' });
});

module.exports = app