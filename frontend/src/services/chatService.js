import axios from 'axios';

export const getMessage = async (roomId) => {
    const response = await axios.get('http://localhost:3080/getChattingMessage', {
        params: { roomId }
    });
    console.log(response.data);
    return response.data;
};
