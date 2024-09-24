import React, {useState} from "react";
import {useRecoilState} from "recoil";
import styled from "styled-components";

import {useNavigate, useNavigation} from 'react-router-dom';

import CountBox from "../../components/Layout/CountBox.jsx"
import TrustRating from "../../components/Layout/TrustRating.jsx"

import { myInfoAtom } from "../../../recoil/atoms/userAtom.js"

const MypageMyInfo = () => {
    const box = ["구매횟수", "판매횟수", "입찰중"];
    const [myInfo, setMyInfo] = useRecoilState(myInfoAtom);
    const navigate = useNavigate();

    const handleTrade = () => {
        navigate('/product');
    }

  return (
      <div className="block mt-8 lg:mt-[72px] mb-5 lg:mb-0">
          <div className="relative w-full h-full col-span-2 text-black grid grid-cols-1 gap-y-4 gap-x-0 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-6 lg:min-w-[800px]">
              <MyNameInfo className="space-y-2">
                  <div className="flex items-center">
                      <div className="w-full">
                          <div className="w-full lg:flex lg:items-center">
                              <h2 className="mr-3 text-[22px] lg:text-[28px] leading-[39px] font-semibold cursor-pointer inline-block lg:block">
                                  {myInfo && myInfo.USER_NICKNAME}({myInfo && myInfo.USER_EMAIL})
                              </h2>
                          </div>
                      </div>
                      <div className="flex items-center translate-x-3 lg:hidden">
                          <img
                              alt="profile-image"
                              src=""
                              width={60}
                              height={60}
                              decoding="async"
                              data-nimg={1}
                              className="rounded-full w-[48px] h-[48px] lg:w-[60px] lg:h-[60px] hidden"
                              loading="lazy"
                              style={{ color: "transparent" }}
                          />
                          <img
                              alt="profile-image"
                              src="https://img2.joongna.com/common/Profile/Default/profile_f.png"
                              width={60}
                              height={60}
                              decoding="async"
                              data-nimg={1}
                              className="rounded-full w-[48px] h-[48px] lg:w-[60px] lg:h-[60px] box-content border-4 border-white -translate-x-3"
                              loading="lazy"
                              style={{ color: "transparent" }}
                          />
                      </div>
                  </div>
                  <div className="flex items-start">
                      <p className="w-10 flex-auto text-[14px] text-jnGray-600 break-all">
                          <span className="w-fit max-w-[calc(100%+1px)] block text-ellipsis overflow-hidden whitespace-nowrap">
                            매너있는 거래는 신뢰도를 높여줍니다.
                          </span>
                      </p>
                      <button
                          type="button"
                          className="min-w-[50px] underline text-jnGray-600 hidden"
                      >
                          더보기
                      </button>
                  </div>
              </MyNameInfo>
              <TrustRating trust={myInfo && myInfo.trustScore}></TrustRating>
              <CountBox box={box}></CountBox>
              <MyProductRegister>
                  <div className="w-10 lg:w-12 h-10 lg:h-12 mr-3 shrink-0 relative">
                      <img
                          alt="카페"
                          src="/_next/static/media/cafe.4ecb0d6e.webp"
                          decoding="async"
                          data-nimg="fill"
                          className=""
                          loading="lazy"
                          style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              inset: 0,
                              color: "transparent"
                          }}
                      />
                      <img
                          alt="채팅"
                          src="/_next/static/media/chat.8164dbdd.webp"
                          decoding="async"
                          data-nimg="fill"
                          className="hidden"
                          loading="lazy"
                          style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              inset: 0,
                              color: "transparent"
                          }}
                      />
                  </div>
                  <div className="flex-auto">
                      <span className="block text-gray-900 font-bold text-[14px] lg:text-lg">
                      거래하러가기
                      </span>
                      <span className="text-[#787E89] text-[12px] lg:text-[14px] flex flex-col min-[1600px]:flex-row min-[1600px]:space-x-[6px] break-keep">
                      매너있는 거래는 신뢰도를 높여줍니다.
                      </span>
                  </div>
                  <button onClick={handleTrade} className="ml-2 px-3 text-[12px] lg:text-[14px] shrink-0 font-medium leading-5 h-8 lg:h-9 min-w-[66px] lg:min-w-[74px] text-white bg-gray-900 rounded-[100px] transition-color ease-out duration-500">
                      거래하기
                  </button>
              </MyProductRegister>
          </div>
      </div>
  );
};

const MyNameInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

const MyProductRegister = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 1.25rem;
  background-color: #F7F9FA;
  border-radius: 0.5rem;

  @media (min-width: 1024px) {
    padding: 1.75rem 1.5rem;
  }
`;


export default MypageMyInfo;
