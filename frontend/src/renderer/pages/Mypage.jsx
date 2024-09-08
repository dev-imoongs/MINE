import React, {useEffect} from "react";
import {useQuery} from "react-query";
import { useRecoilState } from "recoil";

import styled from "styled-components";

// components
import MypageNavigation from "../containers/mypage/MypageNavigation.jsx";
import MypageMyInfo from "../containers/mypage/MypageMyInfo.jsx";
import MypageMyList from "../containers/mypage/MypageMyList.jsx";
import {productListAtom} from "../../recoil/atoms/productListAtom.js";

const MyPage = () => {
    const [myData, setMyData] = useRecoilState(productListAtom);

    const onItemClick = (data) => {
        setMyData(data);
    }

  return (
    <div className="mx-auto px-4 md:px-8 2xl:px-16 box-content max-w-[1024px] min-[1600px]:max-w-[1280px] justify-between lg:gap-10 flex">
        <MypageNavigation onItemClick={onItemClick}></MypageNavigation>
        <div className="mx-auto box-content max-w-[1024px] min-[1600px]:max-w-[1280px] basis-[calc(100%-180px)] flex-grow px-0 md:px-0 2xl:px-0">
            <MypageMyInfo data={myData}></MypageMyInfo>
            <MypageMyList></MypageMyList>
        </div>
    </div>
  );
};

export default MyPage;
