import {fetchData} from "./commonApi.js";
// 메인 페이지 상품 목록 요청
export const mainProducts = async () => {
    try {
        return await fetchData('/api/main/getItems');
    } catch (error) {
        return await fetchData('/data/mainPageData.json');
    }
};

// 조건 검색 상품 목록 요청
export const searchItems = async (conditions) => {
    try {
        return await fetchData('/api/main/searchItem', conditions);
    } catch (error) {
        return await fetchData('/data/mainPageData.json');
    }
};