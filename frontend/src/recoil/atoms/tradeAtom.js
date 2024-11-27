import { atom } from 'recoil';
import tempImgFile from '../../assets/temp_product.png';
export const tradeDetailProductAtom = atom({
    key: 'tradeDetailProductAtom',
    default: {
        productInfo: {
            category: '남성의류',
            price: 80000,
            productPicture: [tempImgFile, tempImgFile, tempImgFile],
            title: '새상품 입니다 아이다스 입니다. 테스트 입니다.',
            state: '새상품',
            productMethod: '직거래',
            productExplain: '새제품 입니다. 새제품 입니다. 제발 사가세요 제발................................',
            tradePlace: {
                preferredPlace: ['사당 1동', '사당 2동', '사당 3동'],
                mapLat: 37.47657573458364,
                mapLon: 126.98147605060717,
                place: '서울 동작구 남부순환로 2089',
            },
            createAt: '2024-09-22 05:35:00',
        },
        sellerInfo: {
            userEmail: 'giggoon@abc.com',
            userProfile: 'https://img2.joongna.com/common/Profile/Default/profile_f.png',
            trustScore: 879,
        },
    },
});

export const tradeListFiltersAtom = atom({
    key: 'tradeFiltersAtom',
    default: {
        category: '전체',
        priceRange: { minPrice: undefined, maxPrice: undefined },
        searchQuery: '',
        sort: '',
        isSold: false, // 판매 완료 상태 추가
    },
});
