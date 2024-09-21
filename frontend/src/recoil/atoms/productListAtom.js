import { atom } from "recoil"

export const productListAtom = atom({
    key : 'productListAtom',
    default : [],
})

export const recommendProductListAtom = atom({
    key : 'recommendListAtom',
    default : [],
})

export const myProductListAtom = atom({
    key : 'myProductListAtom',
    default : [],
})