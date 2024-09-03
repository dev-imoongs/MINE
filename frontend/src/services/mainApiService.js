import axios from 'axios';

export const mainProducts = async () => {
    const response = await axios.get('/data/mainPageData.json')
    return response.data;
}