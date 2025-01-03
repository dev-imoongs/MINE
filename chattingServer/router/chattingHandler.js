const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const {getSessionData} = require('../service/sessionService')
const { selectRoomData, selectChattingList, selectChatting, selectItemById,selectUserByBuyerId, selectOrInsertChattingRoom,selectRoomId } = require('../service/postgresService')
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const year = new Date().getFullYear();
        const month = new Date().getMonth() + 1; // 1월부터 시작하도록 변경
        const uploadPath = path.join(__dirname, "chatImg", `${year}`, `${month}`);

        // 경로가 존재하지 않으면 생성
        if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath, { recursive: true });
        }
        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        let decodedName;
        try {
            // 파일 이름을 UTF-8로 변환
            decodedName = Buffer.from(file.originalname, 'latin1').toString('utf8');
        } catch (err) {
            console.error('파일 이름 변환 실패:', err);
            decodedName = file.originalname; // 변환 실패 시 원래 이름 사용
        }

        // 고유한 파일 이름 생성
        const uniqueSuffix = `${Date.now()}-${decodedName}`;
        cb(null, uniqueSuffix);
    },
});

// Multer 미들웨어
const upload = multer({ storage });

// 파일 업로드 엔드포인트
app.post('/upload', upload.array('files', 10), async (req, res) => {
    const sessionId = req.headers.sessionid;
    const session = await getSessionData(sessionId)
    if (!req.files || req.files.length === 0) {
        return res.status(400).json({ success: false, message: '파일 업로드 실패' });
    }

    // 각 파일의 URL 생성
    const fileUrls = req.files.map(file => {
        const year = new Date().getFullYear();
        const month = new Date().getMonth() + 1;
        return `/chat/chatImg/${year}/${month}/${file.filename}`;
    });

    res.status(200).json({ success: true, urls: fileUrls });
});
app.use('/chatImg', express.static(path.join(__dirname, 'chatImg')));

app.post('/getChattingMessage',async (req, res) => {
    const data = req.body
    const sessionId = req.headers.sessionid;
    console.log(data)
    console.log("headers ::::: " + JSON.stringify(req.headers))
    const session = await getSessionData(sessionId);
    data.sender = session.userInfo.userEmail === data.userEmail ? session.userInfo.userId : null;
    let chattingData = {}
    try {
        let selectChat = await selectChatting(data)
        chattingData.chat = selectChat.length !== 0 ? selectChat : await selectOrInsertChattingRoom(data)
        chattingData.itemSeller = await selectItemById(data);
        chattingData.itemBuyer = await selectUserByBuyerId(data);
        chattingData.roomId = await selectRoomId(data);
        chattingData.roomData = await selectRoomData(data);
        // console.log(chattingData)
        res.status(200).json(chattingData)
    }catch (err){
        res.status(500).json(err)
    }
})

app.get('/list', async (req, res) => {
    const {userId} = req.query;
    console.log(userId)
    console.log("headers ::::: " + JSON.stringify(req.headers))
    const sessionId = req.headers.sessionid;
    const session = await getSessionData(sessionId);
    console.log("session.userId::::::::::::::::::::::"+session.userInfo.userId)
    console.log(session)

    try {
        const chatList = await selectChattingList(session.userInfo.userId); // selectChattingList가 데이터를 반환
        // console.log("채팅 리스트 데이터:", chatList);
        res.status(200).json(chatList); // 클라이언트에 데이터 반환
    } catch (err) {
        console.error("채팅 리스트 조회 실패:", err);
        res.status(500).json({ message: '채팅 리스트 조회 실패', error: err.message });
    }
})
module.exports = app