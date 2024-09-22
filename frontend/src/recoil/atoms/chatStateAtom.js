import { atom } from "recoil"

export const chatDrawerState = atom({
    key: 'chatDrawerState',  // Recoil 상태의 고유 키
    default: false,  // 기본 값은 드로어가 닫힌 상태
  });