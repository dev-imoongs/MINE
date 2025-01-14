import { selector } from 'recoil';
import { searchItemList } from '../atoms/productListAtom.js';

/**
 * searchPage 데이터 가공 selector
 * @type {RecoilValueReadOnly<{auction: {itemList: [], summary: {}}, used: {itemList: [], summary: {}}}|{auction: {itemList: *, summary: *}, used: {itemList: *, summary: *}}>}
 */
export const modifyData = selector({
    key: 'dataSelector',
    get: ({ get }) => {
        const data = get(searchItemList);
        console.log("원본 데이터:", data);

        if (!data || data.length === 0) {
            console.log("데이터가 없습니다.");
            return { auction: { itemList: [], summary: {} }, used: { itemList: [], summary: {} } };
        }

        const auctionItem = data.auction.itemList?.map(item => ({
            id: item.auctionItemId,
            image: item.filePath,
            title: item.auctionItemName,
            price: item.auctionItemHighestPrice,
            elapsedTime: item.updatedAt,
            likes: item.likeCount,
            chat: '1',
            bidcount: item.bidCount,
            myFavoriteAuction : item.myFavoriteAuction,
            endTime : item.auctionItemEndTime,
            destinationType: 2
        })) || [];

        const usedItem = data.usedItem.itemList?.map(item => ({
            id: item.usedItemId,
            image: item.filePath,
            title: item.usedItemName,
            price: item.usedItemPrice,
            elapsedTime: item.updatedAt,
            likes: item.likeCount,
            chat: '1',
            destinationType: 1
        })) || [];

        console.log("Auction 데이터:", auctionItem);
        console.log("Used 데이터:", usedItem);

        const auction = { itemList: auctionItem, summary: data.auction.summary };
        const used = { itemList: usedItem, summary: data.usedItem.summary };

        return { auction, used };
    }
});