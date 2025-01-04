import React, {useEffect, useState} from 'react';
import Drawer from 'rc-drawer';
import 'rc-drawer/assets/index.css';
import {Route, Outlet, Routes, useLocation, useNavigate} from 'react-router-dom';
import MainPage from '../renderer/pages/MainPage';
import Mypage from '../renderer/pages/Mypage.jsx';
import ChattingPage from '../renderer/pages/ChattingPage.jsx';
import {useRecoilState, useRecoilValue} from 'recoil';
import { chatDrawerState } from '../recoil/atoms/chatStateAtom.js'
import {authState} from '../recoil/atoms/loginUserAtom';
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
import {sessionCheck} from "../services/sessionCheckApi.js";
import axios from "axios";
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
                <Route path="/changePasfsword" element={<ChangePassword />} />
                <Route path="/findPassword" element={<FindPassword />} />
            </Route>
        </Routes>
    );
};

const Layout = React.memo(() => {
    const [drawerVisible, setDrawerVisible] = useRecoilState(chatDrawerState);
    const [auth, setAuth] = useRecoilState(authState)
    const navigate = useNavigate()
    const location = useLocation();
    useEffect(() => {
        const validateSession = async () => {
            // 세션 점검이 필요한 경로 목록
            const restrictedPaths = [
                '/auctionRegister',
                '/productRegister',
                '/mypage',
            ];

            // 현재 경로가 제한된 경로인지 확인
            const isRestrictedPath = restrictedPaths.some((path) =>
                location.pathname.startsWith(path)
            );

            if (isRestrictedPath) {
                console.log('Session Valid:', auth);
                try {
                    const isValid = await sessionCheck(); // 세션 검증 요청
                    if (!isValid.data.status) {
                        console.warn('세션이 유효하지 않습니다. /login으로 리디렉션합니다.');
                        setDrawerVisible(false); // 드로어 닫기
                        setAuth({ isLoggedIn: false, userEmail: '' }); // 세션 초기화
                        navigate('/login'); // 로그인 페이지로 이동
                    }
                } catch (error) {
                    console.error('세션 확인 중 오류 발생:', error);
                    setDrawerVisible(false); // 드로어 닫기
                    setAuth({ isLoggedIn: false, userEmail: ''}); // 세션 초기화
                    navigate('/login'); // 로그인 페이지로 이동
                }
            }
        };

        validateSession()
    },[drawerVisible, location.pathname, auth, navigate, setDrawerVisible])

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
                onClose={() => {
                    setDrawerVisible(false)
                }}
                width={600}
                handler={false}
                maskClosable={true}
                mask={true}
            >
                <ChattingPage/>
            </Drawer>
            <FooterComponent />
        </>
    );
});
Layout.displayName = "Layout";

export default AppRouter;
