import React, { useEffect, useState } from 'react';
import {useRecoilValue, useSetRecoilState} from "recoil";
import SearchHeaderContainer from '../containers/Search/SearchHeaderContainer';
import SearchListItemContainer from '../containers/Search/SearchListItemContainer';
import { searchItemList } from '../../recoil/atoms/productListAtom.js';
import { searchItems } from "../../services/mainApiService.js"
import { useLocation } from 'react-router-dom';
import {useQuery} from "react-query";
import LoadingSpinner from "../components/Common/LoadingSpinner.jsx";
import { modifyData } from '../../recoil/selectors/searchPageSelector';
const SearchListPage = () => {
    const setProductList = useSetRecoilState(searchItemList)
    const { auction, used } = useRecoilValue(modifyData); // Selector 데이터 가져오기
    const location = useLocation();
    const [search, setSearch] = useState();
    const param = new URLSearchParams(location.search)
    const categoryParam = param.get('category');
    const productParam = param.get('product');
    const condition = {category : categoryParam, searchKeyword : productParam}
    const { data, error, isLoading, isError } = useQuery(
        ['searchItemList', condition], // 캐싱, 식별 고유값
        () => searchItems(condition),
        {
            staleTime: 1000 * 60 * 5, // 5분 동안 캐싱 데이터 유지
            cacheTime: 1000 * 60 * 10, // 캐시가 메모리에 10분간 유지 (아무도 조회하지 않을 경우 삭제)
            refetchOnWindowFocus : false
        }// 서버에서 데이터 가져오는 함수
        ,
    );

    let categoryList = ['디지털 기기', '생활 가전', '가구/인테리어', '생활/주방', '도서', '의류', '뷰티/미용', '스포츠/레저', '식물', '취미/게임/음반', '상품권/모바일티켓', '식품'];
    useEffect(() => {
        if(categoryParam){
            let toInt = parseInt(categoryParam)
            setSearch(categoryList[toInt-101])
        }else{
            setSearch(productParam)
        }
    },[location])

    // Recoil 상태 업데이트
    useEffect(() => {
        if (data) {
            console.log("데이터 로드 완료:", data);
            setProductList(data); // Recoil 상태에 데이터 설정
        }
    }, [data]);

    if(isError){
        return <LoadingSpinner />
    }


    return (
        <main
            className="relative flex-grow border-b-2"
            style={{ minHeight: '0px !important; height: auto !important' }}
        >
            <div
                className="mx-auto px-4 md:px-8 2xl:px-16 box-content pt-8 pb-16 bg-white lg:pt-[72px] lg:pb-20 max-w-[1024px] min-[1600px]:max-w-[1280px]"
                style={{ height: 'auto !important' }}
            >
                <div className="w-full 2xl:-ms-9" style={{ height: 'auto !important' }}>
                    <SearchHeaderContainer link={`/product?search=${productParam? productParam : ''}&category=${categoryParam ? categoryParam : ''}`} type={'중고'} title={search} itemInfo={used.summary}/>
                    <SearchListItemContainer itemInfo={used.itemList} />
                </div>
                <div className="w-full 2xl:-ms-9" style={{ height: 'auto !important', marginTop:'70px' }}>
                    <SearchHeaderContainer link={`/auction?search=${productParam? productParam : ''}&category=${categoryParam ? categoryParam : ''}`} type={'경매'} title={search} itemInfo={auction.summary}/>
                    <SearchListItemContainer itemInfo={auction.itemList} />
                </div>

            </div>
            <div className="Toastify"></div>
        </main>
    );
};

export default SearchListPage;
