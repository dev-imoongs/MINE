import React, { useEffect } from "react";
import MainProductListComponent from "../../components/Main/MainProductListComponent"
import { productListAtom } from "../../../recoil/atoms/productListAtom";
import { useRecoilValue } from 'recoil';

const MainContentContainer = () => {
  const productList = useRecoilValue(productListAtom);

  if(!productList || productList.length === 0){
    return;
  }


  return (
    <>
      <div
        className="mx-auto px-4 md:px-8 2xl:px-16 box-content max-w-[1024px] min-[1600px]:max-w-[1280px]"
        style={{ height: "auto" }}
      >
         <MainProductListComponent product={productList[0]}/>
         <MainProductListComponent product={productList[1]}/>
         <MainProductListComponent product={productList[2]}/>
      </div>
    </>
  );
};

export default MainContentContainer;