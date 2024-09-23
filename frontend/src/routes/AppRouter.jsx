import React, { useEffect } from 'react';
import Drawer from 'rc-drawer';
import 'rc-drawer/assets/index.css';
import { Route,Outlet, Routes, useLocation } from 'react-router-dom';
import MainPage from '../renderer/pages/MainPage';
import Mypage from '../renderer/pages/Mypage.jsx';
import ChattingPage from '../renderer/pages/ChattingPage.jsx';
import { useRecoilState } from 'recoil';
import { chatDrawerState } from '../recoil/atoms/chatStateAtom.js'

import HeaderComponent from '../renderer/components/Common/HeaderComponent';
import FooterComponent from '../renderer//components/Common/FooterComponent';
import AuctionDetailPage from '../renderer/pages/AuctionDetailPage.jsx';
import AuctionListPage from '../renderer/pages/AuctionListPage.jsx';
import TradeDetailPage from '../renderer/pages/TradeDetailPage.jsx';
import TradeListPage from '../renderer/pages/TradeListPage.jsx';
import SearchListPage from '../renderer/pages/SearchListPage.jsx';
import ProductListPage from '../renderer/pages/ProductListPage.jsx';
import AuctionRegister from '../renderer/pages/register/AuctionRegister.jsx';
import ProductRegister from '../renderer/pages/register/ProductRegister.jsx';
import Index from '../renderer/pages/login/Index.jsx';
import Join from '../renderer/pages/login/Join.jsx'
import ChangePassword from '../renderer/pages/login/ChangePassword.jsx'
import FindPassword from '../renderer/pages/login/FindPassword.jsx'
import ToastComponent from '../renderer/components/Common/ToastComponent.jsx'
const AppRouter = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<MainPage />} />
                <Route path="/mypage" element={<Mypage />} />
                <Route path="/auction">
                    <Route index element={<AuctionListPage />} />
                    <Route path=":auctionId" element={<AuctionDetailPage />} />
                </Route>
                <Route path="/product">
                    <Route index element={<TradeListPage />} />
                    <Route path="list" element={<ProductListPage />} />
                    <Route path=":productId" element={<TradeDetailPage />} />
                </Route>
                <Route path="/search" element={<SearchListPage />} /> {/* 검색바 */}
                <Route path="/auctionRegister" element={<AuctionRegister />} />
                <Route path="/productRegister" element={<ProductRegister />} />
                <Route path="/login" element={<Index />} />
                <Route path="/join" element={<Join />} />
                <Route path="/editInfo" element={<Join />} />
                <Route path="/changePassword" element={<ChangePassword />} />
                <Route path="/findPassword" element={<FindPassword />} />
            </Route>
        </Routes>
    );
};

const Layout = React.memo(() => {
    const [drawerVisible, setDrawerVisible] = useRecoilState(chatDrawerState);
    return (
        <>
            <HeaderComponent />
            <main className="relative flex-grow border-b-2" style={{ minHeight: '0px', height: 'auto' }}>
                <Outlet />
            </main>
            <ToastComponent />
            <Drawer
                placement="right"
                open={drawerVisible}
                onClose={() => setDrawerVisible(false)}
                width={600}
                handler={false}
                maskClosable={true}
                mask={true}
                duration="0.3s"
            >
                <ChattingPage />
            </Drawer>
            <FooterComponent />
        </>
    );
});
Layout.displayName = "Layout";

export default AppRouter;
