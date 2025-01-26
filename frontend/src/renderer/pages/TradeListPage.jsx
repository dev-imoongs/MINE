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
    const [isActive, setIsActive] = useState(0);
    const location = useLocation();

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const searchValue = queryParams.get('search') || '';
        const categoryValue = queryParams.get('category') || '';

        const decodedSearchValue = decodeURIComponent(searchValue);
        const decodedCategoryValue = decodeURIComponent(categoryValue);

        setFilters((prev) => {
            if (prev.category === decodedCategoryValue && prev.searchKeyword === decodedSearchValue) {
                return prev; // 상태가 변경되지 않으면 업데이트하지 않음
            }
            return {
                ...prev,
                category: decodedCategoryValue || null,
                searchKeyword: decodedSearchValue || null,
            };
        });
    }, [location.search]);




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
        if (items && items.items && items.items.length > 0) {
            const prices = items.items.map((price) => price.usedItemPrice);
            const avgPrice = Math.round(prices.reduce((sum, price) => sum + price, 0) / prices.length).toLocaleString();
            const highPrice = Math.max(...prices).toLocaleString();
            const lowPrice = Math.min(...prices).toLocaleString();

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

    const handleSortChange = async (criteria, index) => {
        setFilters((prev) => ({
            ...prev,
            sort: criteria,
        }));
        setIsActive(index)
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
                            itemsCount={items.pageNation.totalCount}
                            filters={filters}
                            setFilters={setFilters}
                            destinationType={destinationType}
                            categoryList={categoryList}
                        />
                        <TradeListPriceInfoContainer priceState={priceState}/>
                        <TradeListSortContainer
                            isActive={isActive}
                            onSortChange={handleSortChange}
                        />
                        <TradeListItemContainer
                            items={items}
                            destinationType={destinationType}
                            handleLikeClick={handleLikeClick}
                        />
                        <TradeListPaginationContainer pageNation={items.pageNation} />
                    </div>
                </div>
            )}
            <div className="Toastify"></div>
        </main>
    );
};

export default TradeListPage;
