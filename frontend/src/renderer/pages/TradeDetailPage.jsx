import React, {useEffect} from 'react';
import SwipeImgComponent from '../components/Auction/SwipeImgComponent';
import ProductInfoContainer from '../containers/Auction/ProductInfoContainer';
import ProductDetailContainer from '../containers/Auction/ProductDetailContainer';
import KakaoMap from '../components/KakaoMap'
import temp from '../../assets/banner2.png';

const TradeDetailPage = () => {
    const StImg = {
        position: 'absolute',
        height: '100%',
        width: '100%',
        inset: '0px',
        color: 'transparent',
    };

    return (
        <div className="flex flex-col min-hscreen default-height">
            <main className="relative flex-grow border-b-2 default-height">
                <div className="mx-auto md:px-8 2xl:px-16 box-content max-w-[1024px] min-[1600px]:max-w-[1280px] lg:min-h-[950px] px-5 default-height">
                    <div className="items-start block grid-cols-2 lg:grid gap-x-[72px] lg:pt-[72px] lg:pb-[52px] pb-9 pt-0">
                        <SwipeImgComponent StImg={StImg} />
                        <ProductInfoContainer StImg={StImg} />
                    </div>
                    <ProductDetailContainer />
                    <KakaoMap/>
                </div>
            </main>
        </div>
    );
};
export default TradeDetailPage;
