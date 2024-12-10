const { Pool } = require('pg');
require('dotenv').config();
const pool = new Pool({
    user : process.env.PG_USER,
    host : process.env.PG_HOST,
    database : process.env.PG_DB,
    password : process.env.PG_PW,
    port : process.env.PG_PORT
})

const insertChatting = async (message, roomId) => {
    const query = `
        insert into tbl_chatting (
            chatting_sending_user_id,
            chatting_receive_user_id,
            auction_item_id,
            chatting_content,
            created_at,
            updated_at,
            room_id,
            user_id
        ) values ($1, $2, $3, $4, $5, $6, $7, $8)
         RETURNING chatting_id;
    `
    console.log("room ", message)
    const values = [
        message.sender,
        message.receiver,
        message.itemId,
        message.text,
        new Date(),
        new Date(),
        roomId,
        message.userId
    ]
    try {
        const result = await pool.query(query, values);
        console.log('채팅 저장 성공, ID:', result.rows[0].chatting_id);
        return result.rows[0].chatting_id; // 삽입된 채팅 ID 반환
    } catch (err) {
        console.error('PostgreSQL에 채팅 저장 실패:', err);
        throw err; // 에러 발생 시 상위 호출로 전달
    }
}

const selectMessage = async (roomId) => {
    console.log(":::::::::::::::::::::::::::::::::::::::         ",roomId)
    const query = `
        SELECT * FROM tbl_chatting
        WHERE room_id = ${roomId}
        ORDER BY created_at ASC;
    `;
    try {
        const result = await pool.query(query);
        console.log('로드 성공:', result.rows);
        return result.rows;
    } catch (err) {
        console.error('PostgreSQL에서 로드 실패:', err);
        throw err; // 에러 발생 시 상위 호출로 전��
    }
}
module.exports = {
    insertChatting : insertChatting,
    selectMessage : selectMessage
}
