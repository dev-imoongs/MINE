import axios from 'axios';

export const mainProducts = async () => {
    const response = await axios.get('/data/mainPageData.json')
    console.log(response.data)
    return response.data;
}