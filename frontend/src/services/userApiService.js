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