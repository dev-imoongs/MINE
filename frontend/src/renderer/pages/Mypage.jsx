import React, {useEffect, useState} from "react";
import {useQuery} from "react-query";
import { useRecoilState } from "recoil";

import styled from "styled-components";

// components
import MypageNavigation from "../containers/mypage/MypageNavigation.jsx";
import MypageMyInfo from "../containers/mypage/MypageMyInfo.jsx";
import MypageMyList from "../containers/mypage/MypageMyList.jsx";

import { myProductListAtom } from "../../recoil/atoms/productListAtom.js"
import { myAuctionListAtom } from "../../recoil/atoms/auctionListAtom.js"
import {myProduct} from "../../services/productApiService.js";
import {myAuctionProduct} from "../../services/auctionApiService.js";

const MyPage = () => {
    const [myData, setMyData] = useState(null);
    const [isProduct, setIsProduct] = useState(true);

    const onItemClick = (data ,isProduct) => {
        setMyData(data);
        setIsProduct(isProduct);
    }

    const myProductData = useQuery({ // useQuery hook : 서버에서 데이터를 가져옴
        queryKey: "myProductData", // 캐싱, 식별 고유값
        queryFn: myProduct // 서버에서 데이터 가져오는 함수
    })

    useEffect(() => {
        if (myProductData) {
            setMyData(myProductData.data);
        }
    }, [myProductData.data]);

  return (
    <div className="mx-auto px-4 md:px-8 2xl:px-16 box-content max-w-[1024px] min-[1600px]:max-w-[1280px] justify-between lg:gap-10 flex">
        <MypageNavigation onItemClick={onItemClick}></MypageNavigation>
        <div className="mx-auto box-content max-w-[1024px] min-[1600px]:max-w-[1280px] basis-[calc(100%-180px)] flex-grow px-0 md:px-0 2xl:px-0">
            <MypageMyInfo></MypageMyInfo>
            <MypageMyList data={myData} isProduct={isProduct}></MypageMyList>
        </div>
    </div>
  );
};

export default MyPage;
