import axios from 'axios';
// import api from './api';

//baseURL api.js에서 설정 -> vite config로 변경
//baseURL: 'http://localhost:8070'

export const myAuctionProduct = async () => {
    const res = await axios.post('/api/auction-items/getMyAuctionItemList');
    return res.data;
};

export const getAuctionItems = async (filters) => {
    const { category, priceRange, searchQuery, sort } = filters;
    const { minPrice, maxPrice } = priceRange;

    const config = filters
        ? {
              params: {
                  category,
                  minPrice,
                  maxPrice,
                  searchQuery,
                  sort,
              },
          }
        : {};
    console.log('config', config);
    const res = await axios.get('/api/auction-items/', config);
    return res.data;
};

export const getAuctionDetail = async () => {
    const res = await axios.get('/data/auctionDetail.json');
    return res.data;
};
