import React, { useEffect, useState } from 'react';
import AuctionListFilterContainer from '../containers/Auction/AuctionListFilterContainer';
import AuctionListSortContainer from '../containers/Auction/AuctionListSortContainer';
import AuctionListItemContainer from '../containers/Auction/AuctionListItemContainer';
import AuctionListPaginationContainer from '../containers/Auction/AuctionListPaginationContainer';
import AuctionListPriceInfoContainer from '../containers/Auction/AuctionListPriceInfoContainer';
import { getAuctionItems } from '../../services/auctionApiService';
import { useQuery } from 'react-query';
import { useRecoilState } from 'recoil';
import { auctionListFiltersAtom } from '../../recoil/atoms/auctionListAtom';
import useApiMutation from '../../hooks/mutation';

const AuctionListPage = () => {
    const destinationType = '2';
    const [itemsInfo, setItemsInfo] = useState(null);
    const [filters, setFilters] = useRecoilState(auctionListFiltersAtom);

    const items = useQuery(
        {
            queryKey: ['getAuctionItemsData', filters],
            queryFn: () => getAuctionItems(filters),
            refetchOnWindowFocus: false,
        },
        [filters]
    );

    const { mutate } = useApiMutation(
        '/api/likes', // API endpoint
        'post' // HTTP method
        // { headers: { Authorization: `Bearer your-token-here` } } // 필요한 헤더나 config 추가
    );

    const handleLikeClick = (auctionItemId, userId) => {
        mutate({
            auctionItemId: auctionItemId,
            userId: userId,
        });
    };

    useEffect(() => {
        if (items.data) {
            setItemsInfo(items.data);
        }
    }, [items.data]);

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
                        <AuctionListItemContainer
                            itemsInfo={itemsInfo}
                            destinationType={destinationType}
                            handleLikeClick={handleLikeClick}
                        />
                        <AuctionListPaginationContainer />
                    </div>
                </div>
            )}
            <div className="Toastify"></div>
        </main>
    );
};

export default AuctionListPage;
