import dayjs from 'dayjs';

/**
 * 메시지를 처리하여 UI에 사용할 데이터로 변환
 * @param {Array} messages 서버에서 받은 메시지 배열
 * @param {number} userId 현재 로그인한 사용자의 ID
 * @returns {Array} UI에 사용할 메시지 배열
 */
export const processMessages = (messages, userId) => {
    let lastDate = null; // 마지막 메시지의 날짜를 추적
    return messages.map((message) => {
        const messageDate = dayjs(message.created_at).format('YYYY-MM-DD'); // 메시지 날짜만 추출
        const isFirstDate = messageDate !== lastDate; // 날짜가 바뀌었는지 확인
        if (isFirstDate) lastDate = messageDate; // 마지막 날짜 업데이트
        console.log(message)
        return {
            chatting_id : message.chatting_id,
            message: message.message, // 고정값 (텍스트 메시지)
            type: message.chatting_sending_user_id === userId ? 'send' : 'receive', // 보낸 사람과 받은 사람 구분
            text: message.chatting_content, // 메시지 내용
            time: message.created_at, // 생성 시간
            userId: message.chatting_sending_user_id, // 메시지를 보낸 사람의 ID
            read : message.chatting_read_status,
            images : message.images,
            messageForFirstDate: isFirstDate, // 날짜 표시 여부
        };
    });
};