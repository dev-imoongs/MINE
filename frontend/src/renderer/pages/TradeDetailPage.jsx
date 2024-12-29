import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {useSetRecoilState, useRecoilValue, useRecoilState} from "recoil";
import { tradeDetailProductAtom } from "../../recoil/atoms/tradeAtom";
import {tradeItemDetail} from '../../recoil/selectors/tradeItemSelector'
import { useQuery } from 'react-query';
import { getProductDetail } from '../../services/productApiService';
import SwipeImgComponent from '../components/Common/SwipeImgComponent';
import TradeProductInfoContainer from '../containers/Trade/TradeProductInfoContainer';
import TradeProductDetailContainer from '../containers/Trade/TradeProductDetailContainer';
import KakaoMap from '../components/Trade/KakaoMap';
import LoadingSpinner from '../components/Common/LoadingSpinner';

const TradeDetailPage = () => {
    const  { productId }  = useParams();
    const setTradeDetailProduct = useSetRecoilState(tradeDetailProductAtom);
    const {productInfo,sellerInfo } = useRecoilValue(tradeItemDetail);
    const { data : productDetail, error, isLoading, isError } = useQuery(['productDetail', productId], // query key(productDetail) :  동일한 키로 요청을 보내면 React Query는 기존에 캐시된 데이터를 반환하고, 새로운 API 요청을 하지 않는다
        () => getProductDetail(productId),
        {
            enabled : !!productId, // productId 있을 때만 호출
            onSuccess : (data) => {
                setTradeDetailProduct(data) // 성공 시, Recoil 상태에 데이터 저장
            },
            onError : (error) => {
                console.error("데이터를 가져오는 중 오류 발생:", error);
            },
        }
    )

    if (!productDetail || (!productInfo && !sellerInfo)) {
        return <LoadingSpinner/>
    }; // 로딩 중일 때 표시할 컴포넌트
    if (error) return <div>Error loading product details</div>; // 에러 발생 시 표시할 컴포넌트
    
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
                        <TradeProductInfoContainer StImg={StImg} />
                    </div>
                    <TradeProductDetailContainer />
                    <KakaoMap/>
                </div>
            </main>
        </div>
    );
};
export default TradeDetailPage;