import axios from 'axios';

export const myAuctionProduct = async () => {
    const response = await axios.get('/data/myAuctionData.json')
    console.log(response.data)
    return response.data;
}