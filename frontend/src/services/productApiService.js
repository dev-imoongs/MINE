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