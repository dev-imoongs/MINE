import { atom } from 'recoil';

// 로그인 상태 관리
export const authState = atom({
    key: 'authState', // 고유 키
    default: { isLoggedIn: false, token: null }, // 초기값
});

// 사용자 정보 관리
export const userState = atom({
    key: 'userState',
    default: null, // 사용자 정보 초기값 (로그인 전에는 null)
});