import axios from 'axios';

export const getMessage = async (params) => {
    console.log("params ::::: ")
    console.log(params)
    const response = await axios.post('/chat/getChattingMessage', params);
    console.log(response.data);
    return response.data;
};

export const getChattingList = async (userId) => {
    const response = await axios.get('/chat/list', {
        params : {
            userId : userId
        }
    })

    console.log(response.data)

    return response.data;
}
