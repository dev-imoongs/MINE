const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const { selectMessage, selectChattingList, selectChatting, selectItemById,selectUserByBuyerId, selectOrInsertChattingRoom,selectRoomId } = require('../service/postgresService')
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadPath = path.join(__dirname, 'chatImg');
        if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath, { recursive: true });
        }
        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        let decodedName;
        try {
            // 파일 이름 디코딩
            decodedName = decodeURIComponent(file.originalname);
        } catch (err) {
            console.error('파일 이름 디코딩 실패:', err);
            decodedName = file.originalname; // 디코딩 실패 시 원래 이름 사용
        }

        const uniqueSuffix = `${Date.now()}-${decodedName}`;
        cb(null, uniqueSuffix);
    },
});


const upload = multer({ storage });
// 이미지 업로드 라우트
app.post('/upload', upload.array('files', 10), (req, res) => {
    if (!req.files || req.files.length === 0) {
        return res.status(400).json({ success: false, message: '파일 업로드 실패' });
    }
    
    // 각 파일의 URL 생성
    const fileUrls = req.files.map(file => {
        return `http://localhost:3080/chatImg/${file.filename}`;
    });
    
    res.status(200).json({ success: true, urls: fileUrls });
});
app.use('/chatImg', express.static(path.join(__dirname, 'chatImg')));

app.post('/getChattingMessage',async (req, res) => {
    const data = req.body
    // console.log("::::::::::::::::::::::::::: "+JSON.stringify(data))
    let chattingData = {}
    try {
        // chattingData.chat = await selectChatting(data)
        let selectChat = await selectChatting(data)
        chattingData.chat = selectChat.length !== 0 ? selectChat : await selectOrInsertChattingRoom(data)
        chattingData.itemSeller = await selectItemById(data);
        chattingData.itemBuyer = await selectUserByBuyerId(data);
        chattingData.roomId = await selectRoomId(data);
        // console.log(chattingData)
        res.status(200).json(chattingData)
    }catch (err){
        res.status(500).json(err)
    }
})

app.get('/list', async (req, res) => {
    const {userId} = req.query;
    console.log(userId)
    try {
        const chatList = await selectChattingList(userId); // selectChattingList가 데이터를 반환
        // console.log("채팅 리스트 데이터:", chatList);
        res.status(200).json(chatList); // 클라이언트에 데이터 반환
    } catch (err) {
        console.error("채팅 리스트 조회 실패:", err);
        res.status(500).json({ message: '채팅 리스트 조회 실패', error: err.message });
    }
})
module.exports = app