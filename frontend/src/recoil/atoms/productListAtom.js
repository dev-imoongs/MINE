import { atom } from "recoil"
import tempImgFile from '../../assets/temp_product.png';
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