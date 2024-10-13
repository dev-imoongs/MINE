import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import plusIcon from '../../../assets/plus.png';
import minusIcon from '../../../assets/minus.png';
import styles from '../../../styles/register/product-register.module.css'; // CSS Module 파일 임포트
import Category from "../../components/login/CategoryComponent";
import RegisterImage from "../../components/register/RegisterImageComponent";
import RegisterInput from "../../components/register/RegisterInputComponent";

const AuctionRegister = () => {
    const navigate = useNavigate();

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
            alert("상품 설명을 입력해주세요.");
            return;
        }

        if (!input.explain) {
            alert("상품 설명을 입력해주세요.");
            return;
        }
    
        alert('폼 제출이 완료되었습니다.');
        navigate('/mypage');
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
                    <Category
                        onChange={setInputState}
                        input={input.category}
                        name={'category'}
                    />
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
