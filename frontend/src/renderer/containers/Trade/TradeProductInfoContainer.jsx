import React, { useCallback, useEffect, useState, useRef, memo } from 'react';
import { useToggle } from '../../../hooks/useToggle';
import { tradeDetailProductAtom } from "../../../recoil/atoms/tradeAtom";
import {
    textMessageArray,
    chatDrawerState,
    chatListAndRoomState,
    chattingRoomSeller
} from '../../../recoil/atoms/chatStateAtom'
import { authState } from '../../../recoil/atoms/loginUserAtom'
import { ToastContainer, toast } from 'react-toastify';
import { useRecoilValue,useRecoilState } from 'recoil';
import { getTimeAgo } from '../../../services/commonService';
import {useNavigate} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import {tradeItemDetail} from "../../../recoil/selectors/tradeItemSelector.js";
import { getMessage } from '../../../services/chatService';
import { processMessages } from '../../../recoil/selectors/chatSelector';
import {sessionCheck} from "../../../services/sessionCheckApi.js";


const TradeProductInfoContainer = ({ StImg }) => {
    const countRef = useRef(0);
    const nav = useNavigate();
    const tradeProductInfo = useRecoilValue(tradeDetailProductAtom);
    const [,setChatContainerState] = useRecoilState(chatListAndRoomState);
    const {productInfo,sellerInfo } = useRecoilValue(tradeItemDetail);
    const [, setDrawerVisible] = useRecoilState(chatDrawerState);
    const [auth, setAuth] = useRecoilState(authState);
    const [,setRoomData] = useRecoilState(chattingRoomSeller);
    const [, setMessage] = useRecoilState(textMessageArray);

    const fetchMessage = async () => {
        console.log({
            sellerId : sellerInfo.userId,
            itemId : productInfo.usedItemId,
            itemType : 'Used',
            receive : sellerInfo.userId
        })
        try {
            // 1. 서버에서 메시지 요청
            const message = await getMessage({
                sellerId : sellerInfo.userId,
                itemId : productInfo.usedItemId,
                itemType : 'Used',
                receive : sellerInfo.userId,
                auth : auth.userEmail
            });
            // // 2. 메시지 가공
            const processedMessage = processMessages(message.chat, message.roomData.sender);
            // 3. Recoil 상태 업데이트
            await setRoomData({
                roomId : message.roomId,
                itemId : productInfo.usedItemId,
                nickName : message.roomData.receiveNickName,
                itemName : message.roomData.itemName,
                itemPrice : message.roomData.itemPrice,
                sender : message.roomData.sender,
                receive : message.roomData.receive,
                trust : message.roomData.receiveTrustScore
            })
            setMessage(processedMessage);
        } catch (error) {
            console.error('ERROR : ', error);
        }
    };

    return (
        <>
            <div>
                <ProductInfo stImg={StImg} productInfo={productInfo}/>
                <SellerInfo sellerInfo={sellerInfo}/>
                <div className="flex items-center space-s-4 pt-9 max-[479px]:fixed max-[479px]:bottom-0 max-[479px]:left-0 max-[479px]:z-20 max-[479px]:w-full max-[479px]:px-4 max-[479px]:pb-4 max-[479px]:bg-white">
                    <LikeButton countRef={countRef}/>
                    {(auth.userEmail !== sellerInfo.userEmail) && (
                        <button
                            data-variant="slim"
                            className="text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center placeholder-white focus-visible:outline-none focus:outline-none rounded-md h-11 md:h-12 px-5 py-2 transform-none normal-case hover:shadow-cart ga4_product_detail_bottom w-full bg-white hover:bg-white/90 text-jnblack hover:text-jnblack border-[1px] border-jnblack"
                            onClick={async () => {
                                    const res = await sessionCheck()
                                    if(res.data.status) {
                                        await fetchMessage()
                                        setDrawerVisible(true)
                                        setChatContainerState("roomContainer")
                                    } else {
                                        setAuth({isLoggedIn: false, userEmail: ''})
                                        setDrawerVisible(false)
                                        nav('/login')
                                    }
                                }
                            }
                        >
                            채팅하기
                        </button>
                    ) }

                </div>
            </div>
        </>
    );
};
const LikeButton = React.memo(({countRef}) => {
    const [isLike, toggleLike] = useToggle();
    const notify = (() => {
        // if (!toast.isActive(countRef.current)) {
        //     countRef.current = toast("찜 상품에 추가 되었습니다.");
        // }else{
        //     console.log("토스트가 이미 활성화 상태입니다.");
        // }
        if(!isLike){
            toast("찜 상품에 추가 되었습니다.");
        }else{
            toast("찜 상품에 해제 되었습니다.");
        }
    });

    return (
      <div className="w-8 h-8">
        <label htmlFor=":r0:" className="relative cursor-pointer"
        onClick={(e) => {
            e.preventDefault();
            notify()
            toggleLike();
          }}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="pointer-events-none w-8 h-8"
            
          >
            <path
              d="M5.94197 17.9925L15.2564 26.334C15.3282 26.3983 15.3641 26.4305 15.3975 26.4557C15.7541 26.7249 16.2459 26.7249 16.6025 26.4557C16.6359 26.4305 16.6718 26.3983 16.7436 26.3341L26.058 17.9925C28.8244 15.5151 29.1565 11.3015 26.8124 8.42125L26.5675 8.12029C23.8495 4.78056 18.5906 5.35863 16.663 9.20902C16.3896 9.75505 15.6104 9.75505 15.337 9.20902C13.4094 5.35863 8.1505 4.78056 5.43249 8.12028L5.18755 8.42125C2.84352 11.3015 3.17564 15.5151 5.94197 17.9925Z"
              strokeWidth="1.5"
              stroke={isLike ? '#dc2626' : '#9CA3AF'}
              fill={isLike ? '#dc2626' : 'transparent'}
            />
          </svg>
        </label>
        <input id=":r0:" type="checkbox" className="a11yHidden" />
      </div>
    );
  });

const ProductInfo = React.memo(({StImg, productInfo}) => {
    return (
        <>
            <div className="flex items-center w-full chawkbazarBreadcrumb pt-5 lg:py-2 pb-[10px]">
                <ol className="flex flex-wrap items-center w-full mt-0 lg:mt-0">
                    <li className="flex-shrink-0 px-0 mt-0 text-sm break-all transition duration-200 ease-in text-body first:ps-0 last:pe-0 hover:text-heading">
                        <a className="text-jnGray-500" href="/">
                            홈
                        </a>
                    </li>
                    <li className="pl-0 mx-2 mt-0 text-sm leading-5 text-jnGray-500 lg:mt-0">
                        <svg
                            width="17"
                            height="17"
                            viewBox="0 0 17 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="rotate-[0deg]"
                        >
                            <path
                                d="M5.6665 14.1667L10.9796 8.85363C11.1749 8.65837 11.1749 8.34179 10.9796 8.14653L5.6665 2.83341"
                                stroke="#9CA3AF"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                        </svg>
                    </li>
                    <li className="flex-shrink-0 px-0 mt-0 text-sm break-all transition duration-200 ease-in text-body first:ps-0 last:pe-0 hover:text-heading">
                        <a className="capitalize text-jnblack" href="/search?category=112">
                            {productInfo.category}
                        </a>
                    </li>
                </ol>
            </div>
            <div>
                <div className="flex items-center justify-between mb-1">
                    <h1 className="text-lg font-semibold leading-6 md:text-2xl md:leading-[28.64px] text-jnblack mr-2">
                        {productInfo.title}
                    </h1>
                    <button type="button" aria-label="공유하기">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className=""
                        >
                            <path
                                d="M19.5556 12.9408V18.9852C19.5556 19.5196 19.33 20.0321 18.9285 20.4099C18.5271 20.7878 17.9826 21 17.4148 21H5.64074C5.07298 21 4.52848 20.7878 4.12701 20.4099C3.72554 20.0321 3.5 19.5196 3.5 18.9852V7.90373C3.5 7.36937 3.72554 6.85689 4.12701 6.47904C4.52848 6.10119 5.07298 5.88892 5.64074 5.88892H12.063"
                                stroke="#141313"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                            <path
                                d="M14.8334 4H20C20.2762 4 20.5 4.22386 20.5 4.5V9.66667"
                                stroke="#141313"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                            <path
                                d="M11.0554 13.4444L20.0276 4.47217"
                                stroke="#141313"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                        </svg>
                    </button>
                </div>
                <div className="flex items-center mb-2 lg:mb-3">
                    <div className="font-bold md:text-[32px] mr-2 text-[26px] leading-9 md:leading-[38.19px] text-heading">
                        {productInfo.price}원
                    </div>
                </div>
                <div className="flex items-center justify-between mb-4 text-xs font-normal">
                    <span className="text-jnGray-500 leading-[15px]">{getTimeAgo(productInfo.createAt)} · 조회 19 · 채팅 0 · 찜 0</span>
                </div>
            </div>
            <div className="fixed left-0 z-20 w-full bg-white px-4 py-3 shadow-[0_35px_60px_-20px_rgba(0,0,0,0.3)] justify-between lg:hidden hidden top-[var(--header-height)] sm:top-[var(--sm-header-height)] lg:top-[var(--lg-header-height)] xl:top-[var(--xl-header-height)] top-[136px]">
                <div className="flex flex-col mr-2 w-[calc(100%-56px)]">
                    <span className="block overflow-hidden text-ellipsis whitespace-nowrap font-bold text-heading w-full">
                        {productInfo.title}
                    </span>
                    <span>
                        {productInfo.price}<span className="text-base">원</span>
                    </span>
                </div>
                <div className="relative inline-block w-12 h-12 overflow-hidden rounded">
                    <img
                        alt="아디다스 아디오스 아디제로--0"
                        referrerPolicy="no-referrer"
                        src="https://img2.joongna.com/cafe-article-data/live/2024/06/22/1062585033/1719019322789_000_pdAUa_main.jpg?impolicy=resizeWatermark3&amp;isSecret=false"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover"
                        loading="lazy"
                        style={StImg}
                    />
                </div>
            </div>
            <ul className="box-border flex text-center border border-gray-300 rounded items-center py-4 mb-6">
                <li className="flex flex-col flex-1 basis-[25%] px-3 sm:px-4 relative after:absolute [&amp;:not(:first-child)]:after:content-[''] after:bg-gray-300 after:h-[20px] [&amp;:not(:first-child)]:after:w-[1px] after:left-0 justify-center items-center">
                    <span className="text-xs font-normal text-jnGray-600 break-keep">제품상태</span>
                    <button disabled="" className="block text-sm font-semibold text-jnblack mt-1">
                        {productInfo.state}
                    </button>
                </li>
                <li className="flex flex-col flex-1 basis-[25%] px-3 sm:px-4 relative after:absolute [&amp;:not(:first-child)]:after:content-[''] after:bg-gray-300 after:h-[20px] [&amp;:not(:first-child)]:after:w-[1px] after:left-0 justify-center items-center">
                    <span className="text-xs font-normal text-jnGray-600 break-keep">거래방식</span>
                    <button disabled="" className="block text-sm font-semibold text-jnblack mt-1">
                        {productInfo.productMethod}
                    </button>
                </li>
            </ul>
        </>
    )
})

const SellerInfo = React.memo(({sellerInfo}) => {
    const StProfileImg = {
        color: 'transparent',
    };

    const StWidth = {
        width: sellerInfo.trustScore/10 + '%',
    };

    return (
        <div className="w-full flex py-2">
            <div name="product-store" className="w-full ">
                <div className="flex flex-col">
                    <div>
                        <div className="flex">
                            <a
                                className="flex items-center justify-between w-full pt-5 lg:pb-5"
                                href="#"
                            >
                                <p className="text-[22px] font-semibold text-jnGray-900">{sellerInfo.userEmail}</p>
                                <div className="flex items-center translate-x-4">
                                    <img
                                        src={sellerInfo.userProfile}
                                        width="60"
                                        height="60"
                                        className="rounded-full max-w-none h-[60px] box-content border-4 border-white -translate-x-4"
                                        loading="lazy"
                                        style={StProfileImg}
                                    />
                                </div>
                            </a>
                        </div>
                        <div>
                            <div className="flex justify-between mt-2 text-[#0CB650]">
                                <p className="text-base font-medium">
                                    신뢰지수<span className="ml-1 text-lg font-semibold">{sellerInfo.trustScore}</span>
                                </p>
                                <span className="text-sm text-jnGray-500">1,000</span>
                            </div>
                            <div className="w-full h-2 bg-[#F1F4F6] rounded overflow-hidden">
                                <div className="h-full" style={StWidth}>
                                    <div className="rounded bg-gradient-to-r from-[#0DCC5A] from-0% to-[#019FB1] to-107.5% w-full h-full animate-width"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});
export default TradeProductInfoContainer;
