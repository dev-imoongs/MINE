import React, {useEffect} from "react";
import { useRecoilState } from "recoil";
import {useQuery} from "react-query";

import styled from "styled-components";

import { myProductListAtom } from "../../../recoil/atoms/productListAtom.js"
import { myAuctionListAtom } from "../../../recoil/atoms/auctionListAtom.js"
import {myProduct} from "../../../services/productApiService.js";
import {myAuctionProduct} from "../../../services/auctionApiService.js";

const MypageNavigation = ({onItemClick}) => {

    const [myProductList, setMyProductList] = useRecoilState(myProductListAtom);
    const [myAuctionList, setMyAuctionList] = useRecoilState(myAuctionListAtom);

    // const myProductData = useQuery({ // useQuery hook : 서버에서 데이터를 가져옴
    //     queryKey: "myProductData", // 캐싱, 식별 고유값
    //     queryFn: myProduct // 서버에서 데이터 가져오는 함수
    // })

    const myAuctionData = useQuery({ // useQuery hook : 서버에서 데이터를 가져옴
        queryKey: "myAuctionData", // 캐싱, 식별 고유값
        queryFn: myAuctionProduct // 서버에서 데이터 가져오는 함수
    })

    const handleClick = (data ,isProduct) => {
        onItemClick(data, isProduct);
    }

    // useEffect(() => {
    //     if (myProductData) {
    //         setMyProductList(myProductData.data);
    //     }
    // }, [myProductData, setMyProductList]);

    useEffect(() => {
        if (myAuctionData) {
            setMyAuctionList(myAuctionData.data);
        }
    }, [myAuctionData, setMyAuctionList]);

    return (
        <NaviContainer>
            <NaviTitle>마이 페이지</NaviTitle>
            <h3>거래</h3>
            <ul>
              <li onClick={() => handleClick(myProductList ,true)}>거래상품</li>
            </ul>
            <h3>경매</h3>
            <ul>
              <li onClick={() => handleClick(myAuctionList, false)}>경매상품</li>
            </ul>
            <h3>내 정보</h3>
            <ul>
              <li>회원수정</li>
              <li>탈퇴하기</li>
            </ul>
      </NaviContainer>
    );
};

const NaviContainer = styled.div`
    display: block;
    flex: 1 1 auto;
    flex-shrink: 1;
  flex-grow: 0;
  margin-top: 72px;
  line-height: 1.75rem;
  
  & ul {
    margin-bottom: 1.5rem;
  }
  
  & li {
    width: fit-content;
    cursor: pointer;
    margin-bottom: 10px;
    color: rgba(54, 60, 69, 1);
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
  
  & h3:first-of-type {
    border-top: none;
    padding-top: 0;
  }
  
  & h3 {
    margin-bottom: 0.75rem;
    font-size: 1.125rem;
    font-weight: 600;
    color: #1f2937;
    padding-top: 1.5rem;
    border-top: 1px solid #DADEE5;
  }
`;

const NaviTitle = styled.h2`
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937; /* text-jnBlack */
`;

export default MypageNavigation;
