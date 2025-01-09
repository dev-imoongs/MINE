import axios from 'axios';

export const getMyInfo = async () => {
    const response = await axios.post('/api/user/getMyInfo')
    console.log(response.data)
    return response.data;
}

export const login = async (input) => {
    const response = await axios.post('/api/user/login', {
        userEmail : input.email,
        userPassword : input.password
    },
    {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        withCredentials: true
    });
    console.log("세션 ID", response.data)
    return response.data;
}

export const join = async (input) => {
    const response = await axios.post('/api/user/join', {
        userEmail : input.email,
        userPassword : input.password,
        userNickname : input.nickname,
        userAddress : input.address,
        userAddressDetail : input.addressDetail,
        userCategory1 : input.category1,
        userCategory2 : input.category2,
        userCategory3 : input.category3
    },
    {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });
    
    return response.data;
}

export const checkDuplicateEmail = async (input) => {
    const response = await axios.post('/api/user/check-email', {
        userEmail : input.email
    },
    {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });
    
    return response.data;
}

export const logout = async () => {
    try {
        const response = await axios.get('/api/user/logout');
        return response.status; // 성공 시 상태 코드 반환
    } catch (e) {
        if (e.response) {
            return e.response.status;
        } else if (e.request) {
            console.error(e.request);
            return 500; // 서버 오류로 가정
        } else {
            // 기타 에러 (예: 요청 설정 문제)
            console.error(e.message);
            return 400; // 클라이언트 오류로 가정
        }
    }
};