import axios from 'axios';

export const getMessage = async (params, sessionId) => {
    console.log("params ::::: ")
    console.log(params)
    const response = await axios.post('/chat/getChattingMessage', params, {
        headers : {
            sessionid : sessionId
        }
    });
    console.log(response.data);
    return response.data;
};

export const getChattingList = async (sessionId) => {
    console.log("sessionId :::::::: " + sessionId)
    const response = await axios.get('/chat/list', {
        headers : {
            sessionid: sessionId
        }
    })

    console.log(response.data)

    return response.data;
}
