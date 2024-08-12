import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../renderer/pages/MainPage";
import Mypage from "../renderer/pages/Mypage.jsx";
import { Outlet } from "react-router-dom";

import HeaderComponent from "../renderer/components/Common/HeaderComponent"
import FooterComponent from "../renderer//components/Common/FooterComponent"
const AppRouter = () => {
    return(
        <Routes>
            <Route element={<Layout/>}>
                <Route path="/" element={<MainPage />} />
                <Route path="/mypage" element={<Mypage />} />
            </Route>
        </Routes>
    )
}

function Layout() {
    return (
        <>
            <HeaderComponent/>
                <main className="relative flex-grow border-b-2" style={{ minHeight: "0px", height: "auto" }}>
                    <Outlet/>
                </main>
            <FooterComponent/>
        </>
    )
}
export default AppRouter;