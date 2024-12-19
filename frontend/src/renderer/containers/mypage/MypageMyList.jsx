import React, {useState} from "react";
import { activeIndexAtom } from "../../../recoil/atoms/userAtom.js";
import TrustRatingModal from '../../pages/modal/TrustRatingModal.jsx';
import {Link, useNavigate, useNavigation} from 'react-router-dom';
import tempProductImage from '../../../assets/temp_product.png'

import styled from "styled-components";
import {useRecoilState} from "recoil";
import PayModal from "../../pages/modal/PayModal.jsx";
const MypageMyList = ({data,isProduct}) => {
    const productCondition = ["판매내역", "판매완료", "구매내역", "찜한 상품"];
    const auctionCondition = ["경매내역", "경매완료", "구매내역", "찜한 상품"];
    const filter = ["최신순", "낮은가격순", "높은가격순"];
    const [openMenuIndex, setOpenMenuIndex] = useState(null); // 현재 열린 메뉴의 인덱스를 저장
    const [activeIndex, setActiveIndex] = useRecoilState(activeIndexAtom);
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const handleClick = (index) => {
        setActiveIndex(index);
        //case문으로 각각의 데이터 불러오는 로직
        //...
    };

    const productMenuClick = (index) => {
        setOpenMenuIndex(prevIndex => (prevIndex === index ? null : index)); // 같은 인덱스 클릭 시 닫기
    };

    const updateClick = (id) => {
        console.log("상품수정")
        console.log("id>>", id);
        isProduct ? navigate('/productRegister', { state: { id } }) : navigate('/auctionRegister', { state: { id } });
        // register 페이지에서 아래와 같이 useLocation 임포트하여 id 받을 수 있음
        // import { useLocation } from 'react-router-dom';
        // const location = useLocation();
        // const { id } = location.state || {};
    }

    const updateDelivery = (id) => {
        console.log("배송완료 버튼")
        // console.log("id>>", id);
        // isProduct ? navigate('/productRegister', { state: { id } }) : navigate('/auctionRegister', { state: { id } });
        // register 페이지에서 아래와 같이 useLocation 임포트하여 id 받을 수 있음
        // import { useLocation } from 'react-router-dom';
        // const location = useLocation();
        // const { id } = location.state || {};
    }

    const evaluateTrust = () => {
        setOpen(true);
        // console.log("평가하기")
    }

  return (
      <MyListCon>
          <MyListTitleWrap>
              <MyListTitle>
                  {isProduct ? "거래상품" : "경매상품"}
              </MyListTitle>
              <MyListSubTitle>
                  <ul className="colors flex flex-nowrap justify-between lg:justify-start -me-3 border-b border-[#DADEE5]">
                      {(isProduct ? productCondition : auctionCondition).map((item, index) => (
                          <li
                              key={index}
                              className={`shrink grow lg:grow-0 cursor-pointer py-4 basis-[84px] lg:basis-[160px] flex justify-center items-center font-medium transition duration-200 ease-in-out ${
                                  activeIndex === index ? 'text-black border-b-[2px] border-black' : 'text-[#9CA3AF]'
                              }`}
                              onClick={() => handleClick(index)}
                          >
                              {item}
                          </li>
                      ))}
                  </ul>
              </MyListSubTitle>
              <MyListFilter>
                  <div className="flex-shrink-0 mb-1 text-sm text-body md:text-base pe-4 md:me-6 lg:block">
                      총 0 개
                  </div>
                  <ul className="flex space-x-3">
                      <li>
                          <button className="text-sm font-medium text-[#141313]">
                              최신순
                          </button>
                      </li>
                      <li>
                          <span className="inline-block mb-0 w-[1px] h-[10px] border border-[#DADEE5]"/>
                      </li>
                      <li>
                          <button className="text-sm font-medium text-[#787E89]">
                              낮은가격순
                          </button>
                      </li>
                      <li>
                          <span className="inline-block mb-0 w-[1px] h-[10px] border border-[#DADEE5]" />
                      </li>
                      <li>
                          <button className="text-sm font-medium text-[#787E89]">
                              높은가격순
                          </button>
                      </li>
                  </ul>
              </MyListFilter>
          </MyListTitleWrap>
          {data ? (
              <MyListItemWrap>
                  {data.map((item, index) => (
                  isProduct ? (
                      <div className="my-item-con relative" key={index}>
                          <div className="my-content-con relative">
                              {/*<a*/}
                              {/*    className="my-content-link group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"*/}
                              {/*    title={item.USED_ITEM_NAME}*/}
                              {/*>*/}
                                  <div className="my-img-con relative w-full rounded-md overflow-hidden pt-[100%] mb-3 md:mb-3.5">
                                      <img
                                          alt={item.usedItemName}
                                          // referrerPolicy="no-referrer"
                                          src={tempProductImage}
                                          decoding="async"
                                          data-nimg="fill"
                                          className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                                          loading="lazy"
                                          style={{
                                              position: "absolute",
                                              height: "100%",
                                              width: "100%",
                                              inset: 0,
                                              color: "transparent"
                                          }}
                                      />
                                      {activeIndex === 2 && (
                                          <div
                                              className="absolute top-0 left-0 flex items-end w-full h-full bg-black bg-opacity-50">
                                              <button
                                                  onClick={() => evaluateTrust()}
                                                  className="w-full p-2 text-center text-white bg-jngreen bg-opacity-80">신뢰평가하기
                                              </button>
                                          </div>
                                      )}
                                  </div>
                                  <div className="my-text-con w-full overflow-hidden p-0 md:p-0 lg:p-0 xl:p-0 2xl:p-0">
                                      <h2 className="line-clamp-2 min-h-[10h] text-sm md:text-base text-heading">
                                          {item.usedItemName}
                                      </h2>
                                      <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                                          {item.usedItemPrice}원
                                      </div>
                                      <div className="my-1">
                                          <span className="text-sm text-gray-400">{item.usedItemPlace}</span>
                                          <span className="text-sm text-gray-400 mx-1">|</span>
                                          <span className="text-sm text-gray-400">{item.createdAt}</span>
                                      </div>
                                  </div>
                              {/*</a>*/}
                          </div>
                          <div
                              className="function-con flex flex-col space-y-2 items-end absolute cursor-pointer right-0 top-3 w-full h-auto">
                              <div>
                                  <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={32}
                                      height={32}
                                      fill="none"
                                      className="text-white mr-2 w-8 h-8"
                                  >
                                      <path
                                          fill="#fff"
                                          d="M16.003 17.803a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6M16.003 9.4a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6M16.003 26.202a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6"
                                      />
                                  </svg>
                              </div>
                          </div>
                          <div
                              className="flex flex-col space-y-2 items-end absolute cursor-pointer right-0 top-3 w-full h-auto">
                              <div onClick={() => productMenuClick(index)}>
                                  <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={32}
                                      height={32}
                                      fill="none"
                                      className="text-white mr-2 w-8 h-8"
                                  >
                                      {/*<g*/}
                                      {/*    stroke="#fff"*/}
                                      {/*    strokeLinecap="round"*/}
                                      {/*    strokeLinejoin="round"*/}
                                      {/*    strokeWidth="1.5"*/}
                                      {/*    clipPath="url(#md-close_svg__a)"*/}
                                      {/*>*/}
                                      {/*    <path d="M23 9 9 23M9 9l14 14"/>*/}
                                      {/*</g>*/}
                                      <defs>
                                          <clipPath id="md-close_svg__a">
                                              <path fill="#fff" d="M0 0h32v32H0z"/>
                                          </clipPath>
                                      </defs>
                                  </svg>
                              </div>
                              <Menu
                                  $isOpen={openMenuIndex === index}
                                  className="flex flex-col w-full lg:w-[160px] bg-white text-black rounded-lg border border-jnGray-300 overflow-hidden">
                                  <ul>
                                      <li className="font-semibold text-sm hover:bg-jnGray-200">
                                          <button onClick={() => updateClick(item.usedItemId)} className="w-full py-5">수정</button>
                                      </li>
                                  </ul>
                              </Menu>
                          </div>
                          <TrustRatingModal open={open} setOpen={setOpen} />

                      </div>
                  ) : (
                      <div className="my-item-con relative" key={index}>
                          <div className="my-content-con relative">
                              <Link
                                  to={`/auction/${item.AUCTION_ITEM_ID}`}
                                  className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
                              >
                                  <div
                                      className="my-img-con relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
                                      <img
                                          alt={item.AUCTION_ITEM_NAME}
                                          // referrerPolicy="no-referrer"
                                          src={item.IMG}
                                          decoding="async"
                                          data-nimg="fill"
                                          className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                                          loading="lazy"
                                          style={{
                                              position: "absolute",
                                              height: "100%",
                                              width: "100%",
                                              inset: 0,
                                              color: "transparent"
                                          }}
                                      />
                                      {item.AUCTION_ITEM_STATUS === 1 && (
                                          <div className="z-10 pending item-status">{item.AUCTION_ITEM_STATUS_NAME}</div>
                                      )}
                                      {item.AUCTION_ITEM_STATUS === 2 && (
                                          <div className="z-10 ongoing item-status">{item.AUCTION_ITEM_STATUS_NAME}</div>
                                      )}
                                      {/*<div className="z-10 ended item-status">종료</div>*/}
                                  </div>
                                  <div
                                      className="my-text-con w-full overflow-hidden p-0 md:p-0 lg:p-0 xl:p-0 2xl:p-0">
                                      <h2 className="line-clamp-2 min-h-[10h] text-sm md:text-base text-heading">
                                          {item.AUCTION_ITEM_NAME}
                                          {/*<span className="text-sm text-gray-400 mx-1">|</span>*/}
                                          {/*<span>{item.AUCTION_ITEM_STATUS_NAME}</span>*/}
                                      </h2>
                                      <div className="mt-2">
                                          <span className="font-bold">
                                              {item.AUCTION_ITEM_STATUS === 1
                                                  ? `${item.AUCTION_ITEM_START_PRICE}원`
                                                  : `${item.AUCTION_ITEM_HIGHEST_PRICE}원`}
                                          </span>
                                          {item.AUCTION_ITEM_STATUS !== 1 && <span className="ml-2 text-s text-gray-500 line-through">{item.AUCTION_ITEM_START_PRICE}</span>}
                                      </div>
                                      {/*<div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">*/}
                                      {/*    {item.AUCTION_ITEM_STATUS === 1*/}
                                      {/*        ? `${item.AUCTION_ITEM_START_PRICE}원`*/}
                                      {/*        : `${item.AUCTION_ITEM_HIGHEST_PRICE}원`}*/}
                                      {/*    {item.AUCTION_ITEM_STATUS !== 1 &&*/}
                                      {/*        <span className={"m-1"}>시작가: {item.AUCTION_ITEM_START_PRICE}</span>}*/}
                                      {/*</div>*/}
                                      <div className="my-1">
                                          <span
                                              className="text-sm text-gray-400">{item.AUCTION_ITEM_STATUS === 1 ? '등록시간' : '종료시간'}</span>
                                          <span className="text-sm text-gray-400 mx-1">|</span>
                                          <span
                                              className="text-sm text-gray-400">{item.AUCTION_ITEM_STATUS === 1 ? item.AUCTION_ITEM_CREATE_TIME : item.AUCTION_ITEM_END_TIME}</span>
                                      </div>
                                      {item.AUCTION_ITEM_STATUS === 2 && (
                                          <div className="item-info_wrap">
                                              <div>
                                                  <span>입찰 </span>
                                                  <span>{item.AUCTION_JOIN_COUNT}회</span>
                                              </div>
                                              <span className="bar"></span>
                                              <div className="item-info time">
                                                  <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width="14"
                                                      height="14"
                                                      viewBox="0 0 14 14"
                                                      fill="none"
                                                  >
                                                      <path
                                                          d="M13.5443 3.2199C13.7953 2.9243 13.757 2.48076 13.4591 2.23252L11.311 0.442462C11.0169 0.19744 10.5804 0.235108 10.3327 0.526876C10.0817 0.822472 10.12 1.26601 10.4179 1.51425L12.566 3.30431C12.8601 3.54933 13.2966 3.51167 13.5443 3.2199ZM3.57846 1.5113C3.87485 1.26442 3.91379 0.823528 3.66526 0.528522C3.41887 0.23606 2.98262 0.197294 2.68853 0.441729L0.541829 2.22593C0.243509 2.47388 0.204934 2.91764 0.455997 3.21334C0.703548 3.50491 1.13978 3.54259 1.43367 3.2978L3.57846 1.5113ZM7.35 4.79312C7.35 4.50317 7.11495 4.26812 6.825 4.26812C6.53505 4.26812 6.3 4.50317 6.3 4.79312V7.87071C6.3 8.22307 6.48544 8.54942 6.78814 8.72978L9.20096 10.1674C9.43606 10.3075 9.74008 10.2326 9.88328 9.99943C10.0298 9.76086 9.95196 9.44852 9.71067 9.30655L7.84289 8.20758C7.5375 8.0279 7.35 7.70003 7.35 7.3457V4.79312ZM7 1.48759C3.521 1.48759 0.7 4.28898 0.7 7.74379C0.7 11.1986 3.514 14 7 14C10.479 14 13.3 11.1986 13.3 7.74379C13.3 4.28898 10.479 1.48759 7 1.48759ZM7 12.6097C4.291 12.6097 2.1 10.434 2.1 7.74379C2.1 5.05363 4.291 2.87786 7 2.87786C9.709 2.87786 11.9 5.05363 11.9 7.74379C11.9 10.434 9.709 12.6097 7 12.6097Z"
                                                          fill="#626262"
                                                      />
                                                  </svg>
                                                  <span className="pl-[8px]">7일 00시간 </span>
                                              </div>
                                              {/*<span className="text-sm text-gray-400">남은시간</span>*/}
                                              {/*<span className="text-sm text-gray-400 mx-1">|</span>*/}
                                              {/*<span*/}
                                              {/*    className="text-sm text-gray-400">01D 01H*/}
                                              {/*</span>*/}
                                              {/*<span*/}
                                              {/*    className="text-sm text-gray-400">*/}
                                              {/*    <span className={"m-1"}>입찰수</span>*/}
                                              {/*    <span>{item.AUCTION_JOIN_COUNT}회</span>*/}
                                              {/*</span>*/}
                                          </div>
                                      )}
                                  </div>
                              </Link>
                          </div>
                          {/*<div*/}
                          {/*    className="function-con flex flex-col space-y-2 items-end absolute cursor-pointer right-0 top-3 w-full h-auto">*/}
                          {/*    <div>*/}
                          {/*        <svg*/}
                          {/*            xmlns="http://www.w3.org/2000/svg"*/}
                          {/*            width={32}*/}
                          {/*            height={32}*/}
                          {/*            fill="none"*/}
                          {/*            className="text-white mr-2 w-8 h-8"*/}
                          {/*        >*/}
                          {/*            <path*/}
                          {/*                fill="#fff"*/}
                          {/*                d="M16.003 17.803a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6M16.003 9.4a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6M16.003 26.202a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6"*/}
                          {/*            />*/}
                          {/*        </svg>*/}
                          {/*    </div>*/}
                          {/*</div>*/}
                          {item.AUCTION_ITEM_STATUS === 1 && (
                              <div
                                  className="flex flex-col space-y-2 items-end absolute cursor-pointer right-0 top-3 w-full h-auto">
                                  <div onClick={() => productMenuClick(index)}>
                                      <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width={32}
                                          height={32}
                                          fill="none"
                                          className="text-white mr-2 w-8 h-8"
                                      >
                                      <path
                                          fill="#fff"
                                          d="M16.003 17.803a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6M16.003 9.4a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6M16.003 26.202a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6"
                                      />
                                          {/*<g*/}
                                          {/*    stroke="#fff"*/}
                                          {/*    strokeLinecap="round"*/}
                                          {/*    strokeLinejoin="round"*/}
                                          {/*    strokeWidth="1.5"*/}
                                          {/*    clipPath="url(#md-close_svg__a)"*/}
                                          {/*>*/}
                                          {/*    <path d="M23 9 9 23M9 9l14 14"/>*/}
                                          {/*</g>*/}
                                          {/*<defs>*/}
                                          {/*    <clipPath id="md-close_svg__a">*/}
                                          {/*        <path fill="#fff" d="M0 0h32v32H0z"/>*/}
                                          {/*    </clipPath>*/}
                                          {/*</defs>*/}
                                      </svg>
                                  </div>
                                  <Menu
                                      $isOpen={openMenuIndex === index}
                                      className="flex flex-col w-full lg:w-[160px] bg-white text-black rounded-lg border border-jnGray-300 overflow-hidden">
                                      <ul>
                                          <li className="font-semibold text-sm hover:bg-jnGray-200">
                                              <button onClick={() => updateClick(item.AUCTION_ITEM_ID)}
                                                      className="w-full py-5">수정
                                              </button>
                                              <button onClick={() => updateDelivery(item.AUCTION_ITEM_ID)}
                                                      className="w-full py-5">배송완료
                                              </button>
                                          </li>
                                      </ul>
                                  </Menu>
                              </div>
                          )}
                      </div>
                  )
                  ))}
              </MyListItemWrap>
          ) : (
              <p className="py-12 text-center">
                  선택된 조건에 해당하는 상품이 없습니다.
              </p>
          )}
      </MyListCon>
  );
};

const MyListCon = styled.div`
    padding-left: 0;
    margin-top: 2rem;

    @media (min-width: 1024px) {
        margin-top: 60px;
    }
`

const MyListTitleWrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 1rem;

    @media (min-width: 1024px) {
        margin-bottom: 1.25rem;
    }
`

const MyListTitle = styled.div`
    font-size: 1.125rem; /* text-lg */
    font-weight: bold;
    color: #141313;

    @media (min-width: 768px) {
        font-size: 22px;
    }
`

const MyListSubTitle = styled.div`
    margin-top: 0.75rem;
    margin-right: 0;
    margin-bottom: 2.25rem;

    @media (min-width: 1024px) {
        margin-top: 0.5rem;
    }
`

const MyListFilter = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
`

const Menu = styled.div`
    display: ${props => (props.$isOpen ? 'block' : 'none')};
`

const MyListItemWrap = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;

    @media (min-width: 640px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: 1280px) {
        grid-template-columns: repeat(4, 1fr);
        gap: 1.25rem;
    }

    @media (min-width: 1600px) {
        grid-template-columns: repeat(5, 1fr);
        gap: 1.75rem;
    }

    gap-y: 0.75rem;

    @media (min-width: 1280px) {
        gap-y: 1.25rem;
    }

    @media (min-width: 1600px) {
        gap-y: 2rem;
    }
`

export default MypageMyList;
