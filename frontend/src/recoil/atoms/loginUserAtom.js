import { atom } from 'recoil';

// 로그인 상태 관리
export const authState = atom({
    key: 'authState', // 고유 키
    default: { isLoggedIn: false, userEmail:'' } // 초기값
});