import React, {useEffect} from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { useQuery } from "react-query";
import MainSlideComponent from "../components/Main/MainSlideComponent.jsx";
import { mainProductList } from "../../recoil/atoms/productListAtom";
import { mainProducts } from "../../services/mainApiService.js"
import MainContentContainer from "../containers/Main/MainContentContainer.jsx";
import LoadingSpinner from "../components/Common/LoadingSpinner";
import Slider from "../components/Common/Slider.jsx";

const MainPage = () => {
  const setProductList = useSetRecoilState(mainProductList); // atom 상태 업데이트
  const { data, error, isLoading, isError } = useQuery( // useQuery hook : 서버에서 데이터를 가져옴
   "productList", // 캐싱, 식별 고유값
    mainProducts, // 서버에서 데이터 가져오는 함수
  {
    staleTime: 1000 * 60 * 5, // 5분 동안 캐싱 데이터 유지
    cacheTime: 1000 * 60 * 10 // 캐시가 메모리에 10분간 유지 (아무도 조회하지 않을 경우 삭제)
    }
  )
  useEffect(() => {
    if (data) {
      setProductList(data); // 다른 컴포넌트에서 사용할 수 있도록 상태 업데이트
    }
  }, [data, setProductList]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    console.error(error);
    return <div>Error occurred</div>;
  }
  if (!data || data.length === 0) {
    return <div>No products found</div>;
  }
  return (
    <>

        {/*<MainSlideComponent />*/}
        <MainContentContainer/>
    </>
  );
};

export default MainPage;
