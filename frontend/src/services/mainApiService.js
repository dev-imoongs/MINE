import axios from 'axios';

export const mainProducts = async () => {
    try {
        const res = await axios.get('/api/main/getItem')
        console.log(res.data)
        return res.data;
        
    } catch (error) {
        const response = await axios.get('/data/mainPageData.json')
        return response.data;
    }
}

export const searchItems = async (conditions) => {
    try {
        const res = await axios.get('/api/main/searchItem', {
            params : conditions
        })
        console.log(res.data)
        return res.data;
    }catch (err){
        const response = await axios.get('/data/mainPageData.json')
        return response.data;
    }
}