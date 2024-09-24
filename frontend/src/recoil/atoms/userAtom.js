import { atom } from "recoil"

export const myInfoAtom = atom({
    key : 'myInfoAtom',
    default : [],
})

export const activeIndexAtom = atom({
    key : 'activeIndexAtom',
    default : 0,
})