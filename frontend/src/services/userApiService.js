import axios from 'axios';

export const getMyInfo = async () => {
    const response = await axios.get('/data/myInfoData.json')
    console.log(response.data)
    return response.data;
}