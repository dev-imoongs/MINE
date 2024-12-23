import dayjs from 'dayjs';

/**
 * selector 구성으로 변경할 예정
 * @param messages
 * @param userId
 * @returns {*}
 */
export const processMessages = (messages, userId) => {
    let lastDate = null; // 마지막 메시지의 날짜를 추적
    return messages.map((message, index) => {
        const messageDate = dayjs(message.created_at).format('YYYY-MM-DD'); // 메시지 날짜만 추출
        const isFirstDate = messageDate !== lastDate; // 날짜가 바뀌었는지 확인
        if (isFirstDate) lastDate = messageDate; // 마지막 날짜 업데이트

        return {
            message: 'text', // 고정값
            type: message.chatting_sending_user_id === parseInt(userId, 10) ? 'send' : 'receive', // userId 비교
            text: message.chatting_content,
            time: message.created_at,
            userId: message.chatting_sending_user_id,
            messageForFirstDate: isFirstDate,
        };
    });
};