import axios from 'axios';

// GET 요청 공통 함수
export const fetchData = async (url, params = {}) => {
    try {
        const response = await axios.get(url, { params });
        if (response.status >= 200 && response.status < 300) {
            return response.data;
        } else {
            console.error(`API Error: ${response.status} - ${response.statusText}`);
            throw new Error(`API Error: ${response.status}`);
        }
    } catch (error) {
        console.error(`Request failed ${url}`, error);
        throw error;
    }
};

// POST 요청 공통 함수
export const postData = async (url, data, config = {}) => {
    try {
        const response = await axios.post(url, data, config);
        if (response.status >= 200 && response.status < 300) {
            return response.data;
        } else {
            console.error(`API Error: ${response.status} - ${response.statusText}`);
            throw new Error(`API Error: ${response.status}`);
        }
    } catch (error) {
        console.error(`Request failed ${url}`, error);
        throw error;
    }
};