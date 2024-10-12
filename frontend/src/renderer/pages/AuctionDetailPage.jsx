import React, { useEffect, useState } from 'react';
import SwipeImgComponent from '../components/Common/SwipeImgComponent';
import ProductInfoContainer from '../containers/Auction/ProductInfoContainer';
import ProductDetailContainer from '../containers/Auction/ProductDetailContainer';
import { useQuery } from 'react-query';
import { auctionDetail } from '../../services/auctionApiService';
import PayModal from './modal/PayModal';

const AuctionDetailPage = () => {
    const StImg = {
        position: 'absolute',
        height: '100%',
        width: '100%',
        inset: '0px',
        color: 'transparent',
    };
    const [detailInfo, setDetailInfo] = useState(null);
    const [payIsOpen, setPayIsOpen] = useState(false);

    const detail = useQuery({
        queryKey: 'auctionDetailData',
        queryFn: auctionDetail,
    });

    useEffect(() => {
        if (detail.data) {
            setDetailInfo(detail.data);
        }
    }, [detail.data]);

    return (
        <div className="flex flex-col min-hscreen default-height">
            {detailInfo && (
                <main className="relative flex-grow border-b-2 default-height">
                    <div className="mx-auto md:px-8 2xl:px-16 box-content max-w-[1024px] min-[1600px]:max-w-[1280px] lg:min-h-[950px] px-5 default-height">
                        <div className="items-start block grid-cols-2 lg:grid gap-x-[72px] lg:pt-[72px] lg:pb-[52px] pb-9 pt-0">
                            <SwipeImgComponent StImg={StImg} />
                            <ProductInfoContainer StImg={StImg} detailInfo={detailInfo} setPayIsOpen={setPayIsOpen} />
                        </div>
                        <ProductDetailContainer detailInfo={detailInfo} />
                    </div>
                </main>
            )}
            {payIsOpen && <PayModal detailInfo={detailInfo} setPayIsOpen={setPayIsOpen} />}
        </div>
    );
};

export default AuctionDetailPage;
