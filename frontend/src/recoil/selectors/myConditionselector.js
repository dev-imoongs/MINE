import {selector, selectorFamily} from 'recoil';
import { myProductListAtom } from '../atoms/productListAtom';

export const myUsedItemSelector = selectorFamily({
    key: 'myUsedItemSelector',
    get: (type) => ({ get }) => {
        const data = get(myProductListAtom) || [];
        const result = data.filter(item => item.type === type);
        
        return result[0]?.data;
    }
});