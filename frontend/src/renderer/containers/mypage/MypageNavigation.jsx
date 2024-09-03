import React from "react";

import styled from "styled-components";
const MypageNavigation = () => {
  return (
      <NaviContainer>
        <NaviTitle>마이 페이지</NaviTitle>
        <h3>거래 정보</h3>
        <ul>
          <li>판매내역</li>
          <li>구매내역</li>
          <li>택배</li>
          <li>찜한 상품</li>
        </ul>
        <h3>내 정보</h3>
        <ul>
          <li>계좌 관리</li>
          <li>배송지 관리</li>
          <li>거래 후기</li>
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
