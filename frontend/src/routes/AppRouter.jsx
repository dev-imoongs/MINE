import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from '../renderer/pages/MainPage';
import Mypage from '../renderer/pages/Mypage.jsx';
import { Outlet } from 'react-router-dom';

import HeaderComponent from '../renderer/components/Common/HeaderComponent';
import FooterComponent from '../renderer//components/Common/FooterComponent';
import AuctionDetailPage from '../renderer/pages/AuctionDetailPage.jsx';
import AuctionListPage from '../renderer/pages/AuctionListPage.jsx';
import TradeDetailPage from '../renderer/pages/TradeDetailPage.jsx';
import TradeListPage from '../renderer/pages/TradeListPage.jsx';
import SearchListPage from '../renderer/pages/SearchListPage.jsx';
const AppRouter = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<MainPage />} />
                <Route path="/mypage" element={<Mypage />} />
                <Route path="/search" element={<SearchListPage />} />
                <Route path="/auction">
                    <Route index element={<AuctionListPage />} />
                    <Route path=":auctionId" element={<AuctionDetailPage />} />
                </Route>
                <Route path="/trade">
                    <Route index element={<TradeListPage />} />
                    <Route path=":tradeId" element={<TradeDetailPage />} />
                </Route>
            </Route>
        </Routes>
    );
};

function Layout() {
    return (
        <>
            <HeaderComponent />
            <main className="relative flex-grow border-b-2" style={{ minHeight: '0px', height: 'auto' }}>
                <Outlet />
            </main>
            <FooterComponent />
        </>
    );
}
export default AppRouter;
