import axios from 'axios';

export const recommendProduct = async () => {
    const response = await axios.get('/data/productData.json')
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