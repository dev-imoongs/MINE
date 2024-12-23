import tempImgFile from '../../assets/temp_product.png';
import { selector } from 'recoil';
import { tradeDetailProductAtom } from '../atoms/tradeAtom.js'
export const tradeItemDetail = selector({
    key: 'tradeItemSelector',
    get: ({ get }) => {
        const data = get(tradeDetailProductAtom);
        console.log("원본 데이터:", data);

        if (!data || data.length === 0) {
            console.log("데이터가 없습니다.");
            return { productInfo: {}, sellerInfo: {} };
        }

        const productInfo = {
                category: data.category,
                price: data.used_item_price,
                productPicture: [tempImgFile, tempImgFile, tempImgFile],
                title: data.used_item_name,
                state: data.used_item_status,
                productMethod: '직거래',
                productExplain: data.used_item_explain,
                tradePlace: {
                preferredPlace: [data.used_item_place],
                    mapLat: 37.47657573458364,
                    mapLon: 126.98147605060717,
                    place: '서울 동작구 남부순환로 2089',
            },
            createAt: data.created_at,
            } || {};

        const sellerInfo = {
            userEmail: data.user_email,
            userProfile: 'https://img2.joongna.com/common/Profile/Default/profile_f.png',
            trustScore: data.user_trust_score,
        }|| {};

        console.log("productInfo 데이터:", productInfo);
        console.log("sellerInfo 데이터:", sellerInfo);

        return { productInfo, sellerInfo };
    }
})