import React from "react";
import MainProductListComponent from "../../components/Main/MainProductListComponent"
import { useRecoilValue } from 'recoil';
import Slider from "../../components/Common/Slider.jsx";
import {mainFilteredProdSelector} from "../../../recoil/selectors/mainFilteredProdSelector.js";

const MainContentContainer = () => {
  const productList = useRecoilValue(mainFilteredProdSelector);
  console.log(productList)
  if(!productList || productList.length === 0){
    return;
  }


  return (
    <>
      <div
        className="mx-auto px-4 md:px-8 2xl:px-16 box-content max-w-[1024px] min-[1600px]:max-w-[1280px]"
        style={{ height: "auto" }}
      >
      <Slider />
        {
          productList.map((data, i) => (
            <MainProductListComponent key={i} product={data} />
          ))
        }
      </div>
    </>
  );
};

export default MainContentContainer;