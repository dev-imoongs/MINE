import { atom } from 'recoil';

export const myAuctionListAtom = atom({
    key: 'myAuctionListAtom',
    default: [],
});

export const auctionListFiltersAtom = atom({
    key: 'auctionFiltersAtom',
    default: {
        category: '전체',
        priceRange: { minPrice: undefined, maxPrice: undefined },
        searchQuery: '',
        sort: '',
    },
});
