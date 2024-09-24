import { atom } from "recoil"

export const chatDrawerState = atom({
    key: 'chatDrawerState',  
    default: false,  
  });

  export const currentChatId = atom({
    key: 'currentChatId',
    default: null,
  })