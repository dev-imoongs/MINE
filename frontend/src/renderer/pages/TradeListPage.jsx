import React, { useEffect, useState } from 'react';
import TradeListFilterContainer from '../containers/Trade/TradeListFilterContainer';
import TradeListSortContainer from '../containers/Trade/TradeListSortContainer';
import TradeListItemContainer from '../containers/Trade/TradeListItemContainer';
import TradeListPaginationContainer from '../containers/Trade/TradeListPaginationContainer';
import AuctionListPriceInfoContainer from '../containers/Auction/AuctionListPriceInfoContainer';
import AuctionListFilterContainer from '../containers/Auction/AuctionListFilterContainer';
import { tradeListFiltersAtom } from '../../recoil/atoms/tradeAtom';
import AuctionListSortContainer from '../containers/Auction/AuctionListSortContainer';
import { useRecoilState } from 'recoil';
import { useQuery } from 'react-query';
import { getAuctionItems } from '../../services/auctionApiService';
import AuctionListItemContainer from '../containers/Auction/AuctionListItemContainer';
import AuctionListPaginationContainer from '../containers/Auction/AuctionListPaginationContainer';
import axios from 'axios';

const TradeListPage = () => {
    const destinationType = "1";
    const [itemsInfo, setItemsInfo] = useState(null);
    const [filters, setFilters] = useRecoilState(tradeListFiltersAtom);

    // 중고거래 데이터에 맞게 가져와야함
    const items = useQuery({
        queryKey: 'getAuctionItemsData',
        queryFn: getAuctionItems,
    });
    //

    useEffect(() => {
        if (items.data) {
            setItemsInfo(items.data);
        }
    }, [items.data]);

    const buildQueryParams = (filters) => {
        const params = {};

        const { category, priceRange, searchQuery, sort, isSold } = filters;

        // 각 필터가 유효한 경우에만 params에 추가
        if (category && category !== '전체') params.category = category;
        if (priceRange.minPrice) params.minPrice = priceRange.minPrice;
        if (priceRange.maxPrice) params.maxPrice = priceRange.maxPrice;
        if (searchQuery) params.search = searchQuery;
        if (sort) params.sort = sort;
        if (isSold) params.isSold = isSold;

        return params;
    };

    // sort 정렬 기준 0: 좋아요순, 1: 최신순, 2: 낮은 가격순, 3: 높은 가격순

    // 데이터 불러오는 예시
    const fetchTrades = async (filters) => {
        const queryParams = buildQueryParams(filters);
        const response = await axios.get('/auction/', { params: queryParams });
        console.log('queryParams', queryParams);
        return response.data;
    };

    // 비동기 업데이트가 완료되면 fetchAuctions를 수행하도록 수정
    useEffect(() => {
        const fetchFilteredTrades = async () => {
            const data = await fetchTrades(filters);
        };
        fetchFilteredTrades();
    }, [filters]);

    const handleSortChange = async (criteria) => {
        setFilters((prev) => ({
            ...prev,
            sort: criteria,
        }));
    };

    return (
        <main
            className="relative flex-grow border-b-2"
            style={{ minHeight: '0px !important; height: auto !important' }}
        >
            {itemsInfo && (
                <div
                    className="mx-auto px-4 md:px-8 2xl:px-16 box-content pt-8 pb-16 bg-white lg:pt-[72px] lg:pb-20 max-w-[1024px] min-[1600px]:max-w-[1280px]"
                    style={{ height: 'auto !important' }}
                >
                    <div className="w-full 2xl:-ms-9" style={{ height: 'auto !important' }}>
                        <AuctionListFilterContainer
                            itemsCount={itemsInfo.length}
                            filters={filters}
                            setFilters={setFilters}
                            destinationType={destinationType}
                        />
                        <AuctionListPriceInfoContainer />
                        <AuctionListSortContainer onSortChange={handleSortChange} />
                        <AuctionListItemContainer itemsInfo={itemsInfo} destinationType={destinationType} />
                        <AuctionListPaginationContainer />
                    </div>
                </div>
            )}
            <div className="Toastify"></div>
        </main>
    );
};

export default TradeListPage;
