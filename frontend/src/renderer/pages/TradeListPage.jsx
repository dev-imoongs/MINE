import React, {useEffect, useState} from 'react';
import TradeListPriceInfoContainer from '../containers/Trade/TradeListPriceInfoContainer';
import TradeListFilterContainer from '../containers/Trade/TradeListFilterContainer';
import { tradeListFiltersAtom } from '../../recoil/atoms/tradeAtom';
import TradeListSortContainer from '../containers/Trade/TradeListSortContainer';
import { useRecoilState } from 'recoil';
import { useQuery } from 'react-query';
import TradeListItemContainer from '../containers/Trade/TradeListItemContainer';
import TradeListPaginationContainer from '../containers/Trade/TradeListPaginationContainer';
import { getUsedItems } from '../../services/productApiService';
import { getCategory } from '../../services/commonService';
import useApiMutation from '../../hooks/mutation';
import {useLocation} from "react-router-dom";

const TradeListPage = () => {
    const [filters, setFilters] = useRecoilState(tradeListFiltersAtom);
    const [priceState, setPriceState] = useState({avgPrice : 0, lowPrice : 0, highPrice : 0})
    const location = useLocation();

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);

        const searchValue = queryParams.get('search') || ''; // search 쿼리 파라미터
        const categoryValue = queryParams.get('category') || ''; // category 쿼리 파라미터
        const decodedSearchValue = decodeURIComponent(searchValue);
        const decodedCategoryValue = decodeURIComponent(categoryValue);

        setFilters((prev) => {
            if (decodedCategoryValue) {
                return {
                    ...prev,
                    category: decodedCategoryValue,
                };
            } else if (decodedSearchValue) {
                return {
                    ...prev,
                    searchKeyword: decodedSearchValue,
                };
            }else{
                return{
                    ...prev,
                    category: null,
                    searchKeyword: null,
                }
            }
            return prev; // 아무 값도 없을 경우 이전 상태 유지
        });

        console.log("Search Value (Decoded):", decodedSearchValue);
        console.log("Category Value (Decoded):", decodedCategoryValue);
    }, [location.search, setFilters]); // location.search 변경 시 실행




    const destinationType = '1';

    // 카테고리 목록 요청
    const categoryList = useQuery({
        queryKey: ['getCategory'],
        queryFn: getCategory,
        refetchOnWindowFocus: false,
    });

    // 게시물 목록 요청
    const {
        data: items,
        isLoading,
        isError,
    } = useQuery(
        {
            queryKey: ['getUsedItemsData', filters],
            queryFn: () => getUsedItems(filters),
            refetchOnWindowFocus: false,
        },
        [filters]
    );
    useEffect(() => {
        if (items && items.items) {
            const prices = items.items.map((price) => price.usedItemPrice);
            const avgPrice = prices.reduce((sum, price) => sum + price, 0) / prices.length;
            const highPrice = Math.max(...prices);
            const lowPrice = Math.min(...prices);

            setPriceState({
                avgPrice: avgPrice,
                highPrice: highPrice,
                lowPrice: lowPrice,
            });
        }
    }, [items]); // items가 변경될 때만 실행

    const { mutate } = useApiMutation(
        '/api/likes', // API endpoint
        'post' // HTTP method
        // { headers: { Authorization: `Bearer your-token-here` } } // 필요한 헤더나 config 추가
    );

    const handleLikeClick = (usedItemId) => {
        mutate({
            usedItemId: usedItemId,
        });
    };

    const handleSortChange = async (criteria) => {
        setFilters((prev) => ({
            ...prev,
            sort: criteria,
        }));
    };

    // 로딩 중일 때
    if (isLoading) {
        return <div>Loading...</div>;
    }

    // 에러 발생 시
    if (isError) {
        console.log('isError', isError);
        return <div>Error occurred while fetching the item!</div>;
    }



    // items가 있을때만 렌더링
    return (
        <main
            className="relative flex-grow border-b-2"
            style={{ minHeight: '0px !important; height: auto !important' }}
        >
            {items && (
                <div
                    className="mx-auto px-4 md:px-8 2xl:px-16 box-content pt-8 pb-16 bg-white lg:pt-[72px] lg:pb-20 max-w-[1024px] min-[1600px]:max-w-[1280px]"
                    style={{ height: 'auto !important' }}
                >
                    <div className="w-full 2xl:-ms-9" style={{ height: 'auto !important' }}>
                        <TradeListFilterContainer
                            itemsCount={items.items.length}
                            filters={filters}
                            setFilters={setFilters}
                            destinationType={destinationType}
                            categoryList={categoryList}
                        />
                        <TradeListPriceInfoContainer priceState={priceState}/>
                        <TradeListSortContainer onSortChange={handleSortChange} />
                        <TradeListItemContainer
                            items={items}
                            destinationType={destinationType}
                            handleLikeClick={handleLikeClick}
                        />
                        <TradeListPaginationContainer />
                    </div>
                </div>
            )}
            <div className="Toastify"></div>
        </main>
    );
};

export default TradeListPage;
