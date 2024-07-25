import React from 'react';
import SwipeImgComponent from '../../components/Auction/SwipeImgComponent';
import ProductInfoContainer from './ProductInfoContainer';

const AuctionSectionContainer = () => {
    const StImg = {
        position: 'absolute',
        height: '100%',
        width: '100%',
        inset: '0px',
        color: 'transparent',
    };

    return (
        <main className="relative flex-grow border-b-2 default-height">
            <div className="mx-auto md:px-8 2xl:px-16 box-content max-w-[1024px] min-[1600px]:max-w-[1280px] lg:min-h-[950px] px-5 default-height">
                <div className="items-start block grid-cols-2 lg:grid gap-x-[72px] lg:pt-[72px] lg:pb-[52px] pb-9 pt-0">
                    <SwipeImgComponent StImg={StImg} />
                    <ProductInfoContainer StImg={StImg} />
                </div>
                // 다음내용이 이 위치부터 들어가야함
            </div>
        </main>
    );
};

export default AuctionSectionContainer;
