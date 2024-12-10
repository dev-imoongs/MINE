import axios from 'axios';
import api from './api';

//baseURL api.js에서 설정
//baseURL: 'http://localhost:8070'

export const myAuctionProduct = async () => {
    const res = await axios.get('/data/myAuctionData.json');
    return res.data;
};

export const getAuctionItems = async (filters) => {
    const config = filters ? { params: filters } : {};
    const res = await api.get('/auction-items', config);
    return res.data;
};

export const auctionDetail = async () => {
    const res = await axios.get('/data/auctionDetail.json');
    return res.data;
};
