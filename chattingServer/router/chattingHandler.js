const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const { selectMessage } = require('../service/postgresService')
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadPath = path.join(__dirname, 'chatImg');

        // 경로가 없으면 생성
        if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath, { recursive: true });
        }

        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = `${Date.now()}-${uuidv4()}`;
        cb(null, uniqueSuffix);
    },
})


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
app.get('/getChattingMessage',async (req, res) => {
    const data = req.query
    console.log(req.query)
    const test = await selectMessage(data.roomId)

    console.log(test)
    res.json(test)
})
module.exports = app