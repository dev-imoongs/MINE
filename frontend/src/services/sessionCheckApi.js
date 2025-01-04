import axios from 'axios';
export const sessionCheck = async () => {
    try {
        const response = await axios.post('/check');
        console.log('Response:', response); // 성공 응답 출력
        return response; // 성공 데이터 반환
    } catch (error) {

        if (error.response) {
            // 서버로부터의 응답이 있는 경우
            console.log('Error Response:', error.response); // 에러 응답 출력
            return error.response; // 에러 응답 반환
        } else if (error.request) {
            // 요청이 전송되었으나 응답을 받지 못한 경우
            console.error('Error Request:', error.request);
        } else {
            // 요청 설정 중에 에러가 발생한 경우
            console.error('Error Message:', error.message);
        }
        throw error; // 필요에 따라 에러 다시 던지기
    }
};
