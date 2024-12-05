import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8070', // 로컬환경 baseURL
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;
