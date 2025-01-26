import { selector } from 'recoil';
import { mainProductList } from '../atoms/productListAtom';
import { getTimeAgo, getTimeRemaining } from "../../services/commonService.js";

export const mainFilteredProdSelector = selector({
    key: 'filteredProductList',
    get: ({ get }) => {
        const data = get(mainProductList);

        if (!data || data.length === 0) {
            return [];
        }

        const productList = [];

        // `data` 배열 순회
        data.forEach((item) => {
            const itemArray = {
                type: item.type,
                data: [],
            };

            // `item.data` 배열 순회
            item.data.forEach((v) => {
                const commonData = {
                    itemId: item.type === "recommend" ? v.auctionItemId : v.usedItemId,
                    link:
                        item.type === "recommend"
                            ? `/auction/${v.auctionItemId}`
                            : `/product/${v.usedItemId}`,
                    itemName: item.type === "recommend" ? v.auctionItemName : v.usedItemName,
                    filePath: v.filePath ? `/api/files/display?filePath=${v.filePath}` : 'src/assets/temp_product.png',
                    itemPrice:
                        item.type === "recommend"
                            ? v.auctionItemHighestPrice.toLocaleString()
                            : v.usedItemPrice.toLocaleString(),
                    subInfo:
                        item.type === "recommend"
                            ? `입찰 ${v.bidCount || 0}회`
                            : v.usedItemPlace,
                    endTime:
                        item.type === "recommend"
                            ? getTimeRemaining(v.auctionItemEndTime)
                            : getTimeAgo(v.updatedAt),
                };

                itemArray.data.push(commonData);
            });

            productList.push(itemArray);
        });

        return productList;
    },
});