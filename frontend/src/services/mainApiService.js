import axios from 'axios';

export const mainProducts = async () => {
    const response = await axios.get('http://localhost:5173/data/mainPageData.json')
    return response.data;
}