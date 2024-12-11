import { useState, useEffect } from 'react';
import io from 'socket.io-client';

export const useSocket = (url, options) => {
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        const newSocket = io(url, options);
        setSocket(newSocket);

        // 소켓 연결 시
        newSocket.on('connect', () => {
            console.log(`연결: ${newSocket.id}`);
        });

        // 소켓 연결 해제 시
        newSocket.on('disconnect', (err) => {
            console.error(`Disconnected 에러: ${err}`);
        });

        return () => {
            newSocket.disconnect(); // 컴포넌트 언마운트 시 소켓 연결 해제
        };
    }, [url, options]);

    return [socket];  // 소켓과 소켓 설정함수를 반환
};