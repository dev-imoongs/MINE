import { useMemo } from 'react';

const useFormattedPrice = (price) => {
    return useMemo(() => {
        if (typeof price !== 'number') return '';
        return new Intl.NumberFormat('ko-KR').format(price);
    }, [price]);
};

export default useFormattedPrice;
