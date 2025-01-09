import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from "react-query";
import plusIcon from '../../../assets/plus.png';
import minusIcon from '../../../assets/minus.png';
import styles from '../../../styles/register/product-register.module.css'; // CSS Module 파일 임포트
import Category from "../../components/login/CategoryComponent";
import RegisterImage from "../../components/register/RegisterImageComponent";
import RegisterInput from "../../components/register/RegisterInputComponent";

import { getCategory } from "../../../services/commonService.js";
import { saveAuction } from "../../../services/auctionApiService.js";
import { saveImages } from "../../../services/commonService.js";

const AuctionRegister = () => {
    const navigate = useNavigate();

    const category = useQuery({
        queryKey: 'getCategory',
        queryFn: getCategory,
        onSuccess: (data) => {
            console.log('카테고리 데이터 로딩 성공:', data);
        },
        onError: (error) => {
            console.error('카테고리 데이터 로딩 중 에러 발생:', error);
            alert('카테고리 데이터를 불러오는 중 오류가 발생했습니다.');
        }
    });

    const [input, setInput] = useState({
        name: "",
        startPrice: 0,
        category: "",
        endTime: "",
        explain: "",
        status: "중고"
    });

    const [images, setImages] = useState([]);

    const setInputState = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    };

    const setStatusClick = (name, value) => {
        setInput({
            ...input,
            [name]: value
        });
    };

    const auctionRegisterAction = useQuery({
        queryKey: "auctionRegister",
        queryFn: () => saveAuction(input, images),
        enabled: false,
        onSuccess: () => {
            alert('경매 등록이 완료되었습니다.');
            navigate('/mypage');
        },
        onError: (error) => {
            console.error("Error during productRegister:", error);
            alert('경매 등록 도중 오류가 발생했습니다.');
        },
    });

    const submitOnclick = () => {
        if (!input.name) {
            alert("상품명을 입력해주세요.");
            return;
        }

        if (!input.startPrice || input.startPrice <= 0) {
            alert("시작 입찰가격을 입력해주세요.");
            return;
        }

        if (!input.category) {
            alert("카테고리를 선택 해주세요.");
            return;
        }

        if (!input.endTime) {
            alert("경매 종료 시간을 입력해주세요.");
            return;
        }

        if (!input.explain) {
            alert("상품 설명을 입력해주세요.");
            return;
        }

        auctionRegisterAction.refetch();
    }

    return (
        <div className={styles['form-container']}>
            <form action='' method='' name=''>
                <div className={styles['form-group']}>
                    <RegisterImage images={images} setImages={setImages} />
                </div>
                <div className={styles['form-group']}>
                    <label>상품명</label>
                    <RegisterInput type={'text'} name={'name'} onChange={setInputState} placeholder={'상품명 입력'} />
                </div>

                <div className={styles['form-group']}>
                    <label>시작 입찰가격</label>
                    <div className={styles['price-group']}>
                        <RegisterInput type={'number'} name={'startPrice'} onChange={setInputState} placeholder={'시작 입찰가격 입력'} />
                    </div>
                </div>

                <div className={styles['form-group']}>
                    <label>카테고리</label>
                    {category.data && (
                        <Category
                            onChange={setInputState}
                            input={input.category}
                            name={'category'}
                            categoryData={category.data}
                        />
                    )}
                </div>

                <div className={styles['form-group']}>
                    <label>경매 종료시간</label>
                    <RegisterInput type={'datetime-local'} name={'endTime'} onChange={setInputState} />
                </div>

                <div className={styles['form-group']}>
                    <label>상품 설명</label>
                    <textarea name='explain' onChange={setInputState} placeholder="상품 설명 입력"></textarea>
                </div>

                <div className={styles['form-group']}>
                    <label>상품상태</label>
                    <button type='button' className={`${styles.btn} ${input.status == '중고' ? styles.old : styles.new}`} onClick={() => {setStatusClick('status', '중고')}}>중고</button>
                    <button type='button' className={`${styles.btn} ${input.status == '새상품' ? styles.old : styles.new}`} onClick={() => {setStatusClick('status', '새상품')}}>새상품</button>
                </div>

                <div className={styles['form-group']}>
                    <button type='button' className={styles['submit-btn']} onClick={submitOnclick}>등록</button>
                </div>
            </form>
        </div>
    );
}

export default AuctionRegister;
