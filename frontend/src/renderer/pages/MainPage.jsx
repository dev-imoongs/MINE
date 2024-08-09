import React from "react";
import HeaderContainer from "../containers/Common/HeaderContainer"
import FooterContainer from "../containers/Common/FooterContainer"
import MainContainer from "../containers/MainContainer"
import MainSlideComponent from "../components/Main/MainSlideComponent.jsx";
import MainContentComponent from "../components/Main/MainContentComponent.jsx";
const MainPage = () => {
  return (
    <>
        <MainSlideComponent />
        <MainContentComponent/>
    </>
  );
};

export default MainPage;
