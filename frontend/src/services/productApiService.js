import axios from 'axios';

export const recommendProduct = async (type, page) => {
    const response = await axios.get('/api/main/getFilterItem', {
        params: {
            type: type,
            page: page, // 여기에 값이 설정되어야 함
            amount: 10
        }
    });
    console.log(response.data)
    return response.data;
}

export const myProduct = async () => {
    const response = await axios.post('/api/used-item/getMyUsedItemList')
    return response.data;
}

export const getProductDetail = async (productId) => {
    const response = await axios.get('/api/used-item/getItem', {
        params : {
            usedItemId : productId
        }
    })
    return response.data;
}