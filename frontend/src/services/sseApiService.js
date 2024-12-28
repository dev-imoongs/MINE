export const connectUnreadMessageStream = (onMessage, onError) => {
    const eventSource = new EventSource('/chat/unread-messages');

    // SSE 메시지를 받을 때 호출되는 핸들러
    eventSource.onmessage = (event) => {
        const data = JSON.parse(event.data); // 데이터는 JSON으로 받아서 파싱
        console.log('Unread message count update:', data);
        if (onMessage) {
            onMessage(data);
        }
    };

    // 에러 처리
    eventSource.onerror = (error) => {
        console.error('SSE connection error:', error);
        if (onError) {
            onError(error);
        }
        eventSource.close(); // 에러 발생 시 연결 종료
    };

    // EventSource를 반환하여 연결 관리
    return eventSource;
};