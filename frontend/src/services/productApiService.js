import axios from 'axios';

export const recommendProduct = async (type, page) => {
    const response = await axios.get('/api/main/getFilterItem', {
        params: {
            type: type,
            page: page, // 여기에 값이 설정되어야 함

        }
    });
    console.log(response.data)
    return response.data;
}

export const myProduct = async () => {
    const response = await axios.get('/data/myProductData.json')
    return response.data;
}

export const getProductDetail = async (productId) => {
    const response = await axios.post('/data/productDetail.json', productId)
    return response.data;
}