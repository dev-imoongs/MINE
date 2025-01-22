import { atom } from "recoil"
import tempImgFile from '../../assets/temp_product.png';
export const mainProductList = atom({
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

export const searchItemList = atom({
    key : 'searchItemList',
    default : []
})

