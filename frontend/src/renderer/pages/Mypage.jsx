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
import { myInfoAtom } from "../../recoil/atoms/userAtom.js"
import {myProduct} from "../../services/productApiService.js";
import {myAuctionProduct} from "../../services/auctionApiService.js";
import {getMyInfo} from "../../services/userApiService.js";

const MyPage = () => {
    const [myData, setMyData] = useRecoilState(myProductListAtom);
    const [myInfo, setMyInfo] = useRecoilState(myInfoAtom);
    const [isProduct, setIsProduct] = useState(true);

    const onItemClick = (data ,isProduct) => {
        console.log("여기서 data>>>",data);
        setMyData(data);
        setIsProduct(isProduct);
    }

    // const myProductData = useQuery({
    //     queryKey: ['myProductData', { usedItemSalesStatus: '401' }],
    //     queryFn: () => myProduct({ usedItemSalesStatus: '401' }),
    // });
    
    const myProductData = useQuery({
        queryKey: ['myProductData'],
        queryFn: myProduct,
    });

    const myInfoData = useQuery({
        queryKey: "myInfoData",
        queryFn: getMyInfo
    })
    
    useEffect(() => {
        if (myProductData.data) {
            setMyData(myProductData.data);
        }
    }, []);

    useEffect(() => {
        if (myInfoData.data) {
            setMyInfo(myInfoData.data);
        }
    }, [myInfoData.data]);

  return (
    <div className="mx-auto px-4 md:px-8 2xl:px-16 box-content max-w-[1024px] min-[1600px]:max-w-[1280px] justify-between lg:gap-10 flex">
        <MypageNavigation onItemClick={onItemClick}></MypageNavigation>
        <div className="mx-auto box-content max-w-[1024px] min-[1600px]:max-w-[1280px] basis-[calc(100%-180px)] flex-grow px-0 md:px-0 2xl:px-0">
            <MypageMyInfo></MypageMyInfo>
            <MypageMyList isProduct={isProduct}></MypageMyList>
        </div>
    </div>
  );
};

export default MyPage;
