import { useEffect, useState } from 'react';

const useRemainTime = (endTime) => {
    const [timeRemaining, setTimeRemaining] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const end = new Date(endTime);
            const timeDiff = end - now;

            if (timeDiff <= 0) {
                setTimeRemaining('경매 종료');
                clearInterval(interval);
                return;
            }

            const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

            setTimeRemaining(`${days}일 ${hours}시간 ${minutes}분 ${seconds}초`);
        }, 1000);

        return () => clearInterval(interval);
    }, [endTime]);

    return timeRemaining;
};

export default useRemainTime;
