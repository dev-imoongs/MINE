import axios from 'axios';

export const recommendProduct = async () => {
    const response = await axios.get('/data/productData.json')
    console.log(response.data)
    return response.data;
}