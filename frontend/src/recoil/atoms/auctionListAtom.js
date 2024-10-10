import { atom } from 'recoil';

export const myAuctionListAtom = atom({
    key: 'myAuctionListAtom',
    default: [],
});

export const acutionListfiltersAtom = atom({
    key: 'filtersAtom',
    default: {
        category: '전체',
        priceRange: { minPrice: '', maxPrice: '' },
        searchQuery: '',
        sort: '',
    },
});
