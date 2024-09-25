import { useState, useRef } from 'react';
import plusIcon from '../../../assets/plus.png';
import minusIcon from '../../../assets/minus.png';
import styles from "../../../styles/register/product-register.module.css";
import Category from "../../components/login/CategoryComponent";
import InputForm from "../../components/login/LoginComponent";

const ProductRegister = () => {
    const [input, setInput] = useState({
        name: "",
        price: 0,
        category: "",
        explain: "",
        status: "중고",
        tradeWay: "택배거래",
        tradePlace: ""
    });

    const [images, setImages] = useState([]);

    const fileInputRef = useRef(null);

    const fileButtonClick = () => {
        fileInputRef.current.click();
    };

    const fileChange = (e) => {
        const files = Array.from(e.target.files); // 새로 추가된 파일들
        const totalImages = images.length + files.length; // 기존 이미지 개수 + 새로 추가된 파일 개수

        if (totalImages > 10) {
            alert("이미지는 최대 10개까지만 추가할 수 있습니다.");
            return;
        }

        // 새 이미지를 URL로 변환하여 images 배열에 추가
        const newImages = files.map(file => URL.createObjectURL(file));
        setImages(prevImages => [...prevImages, ...newImages]);
    };

    const deleteImage = (index) => {
        setImages(prevImages => prevImages.filter((_, i) => i !== index));
    };

    const setInputState = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    };

    const setFreeClick = () => {
        setInput({
            ...input,
            price: 0
        });
    };

    const setStatusClick = (name, value) => {
        setInput({
            ...input,
            [name]: value
        });
    };

    return (
        <div className={styles['form-container']}>
            <form>
                <div className={styles['form-group']}>
                    <div className={styles['image-container']}>
                        <div>
                            <input name="media" ref={fileInputRef} type="file" multiple accept="image/png, image/jpeg, image/jpg" className={styles['hidden']} onChange={fileChange}/>
                            <button type="button" className={styles['image-button']} onClick={fileButtonClick}>
                                <div className={styles['flex']}>
                                    <svg width="32px" height="32px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M15.728 20.4461C13.6481 20.4461 11.9619 18.7599 11.9619 16.68C11.9619 14.6001 13.6481 12.9138 15.728 12.9138C17.8079 12.9138 19.4942 14.6001 19.4942 16.68C19.4942 18.7599 17.8079 20.4461 15.728 20.4461Z" fill="#C2C6CE"></path>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M10.4564 7.32295C10.9376 6.00587 11.5097 5.15997 12.8118 5.15997H17.9241C19.2253 5.15997 19.7975 6.00463 20.2785 7.32003H20.7897C24.7543 7.32003 27.968 10.4192 27.968 14.2417V19.119C27.968 22.9409 24.7543 26.04 20.7897 26.04H10.6669C6.7023 26.04 3.48798 22.9409 3.48798 19.119V14.2417C3.48798 10.487 6.58918 7.4303 10.4564 7.32295ZM21.3772 16.68C21.3772 19.8001 18.8481 22.3292 15.728 22.3292C12.6079 22.3292 10.0788 19.8001 10.0788 16.68C10.0788 13.5599 12.6079 11.0308 15.728 11.0308C18.8481 11.0308 21.3772 13.5599 21.3772 16.68ZM21.5988 11.88C21.5988 12.4 22.0204 12.8216 22.5403 12.8216C23.0603 12.8216 23.4819 12.4 23.4819 11.88C23.4819 11.36 23.0603 10.9385 22.5403 10.9385C22.0204 10.9385 21.5988 11.36 21.5988 11.88Z" fill="#C2C6CE"></path>
                                    </svg>
                                    <p>
                                        <span className={styles['image-count']}>{images.length}</span>/10
                                    </p>
                                </div>
                            </button>
                        </div>
                        <div className={styles['select-image-container']}>
                            {images.map((imgSrc, index) => (
                                <div key={index} className={styles['select-image']}>
                                    <img src={imgSrc} alt={`image-${index}`} />
                                    <button type='button' className={styles['absolute-top-right']} onClick={() => deleteImage(index)}>
                                        {/* SVG 아이콘: 클릭 시 이미지 삭제 */}
                                        <svg width="20px" height="20px" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z" fill="white"></path>
                                            <path d="M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5V18.5C14.6944 18.5 18.5 14.6944 18.5 10H17.5ZM10 17.5C5.85786 17.5 2.5 14.1421 2.5 10H1.5C1.5 14.6944 5.30558 18.5 10 18.5V17.5ZM2.5 10C2.5 5.85786 5.85786 2.5 10 2.5V1.5C5.30558 1.5 1.5 5.30558 1.5 10H2.5ZM10 2.5C14.1421 2.5 17.5 5.85786 17.5 10H18.5C18.5 5.30558 14.6944 1.5 10 1.5V2.5Z" fill="#DADEE5"></path>
                                            <path d="M7 7L13 13M13 7L7 13" stroke="#363C45" strokeLinecap="round"></path>
                                        </svg>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={styles['form-group']}>
                    <label>상품명</label>
                    <input type="text" name='name' value={input.name} onChange={setInputState} placeholder="상품명 입력"/>
                </div>

                <div className={styles['form-group']}>
                    <label>가격</label>
                    <div className={styles['price-group']}>
                        <input type="text" name='price' value={input.price} onChange={setInputState} placeholder="판매가격 입력"/>
                        <div className={styles['price-free']}>
                            <div className={styles['svg-1']} onClick={setFreeClick}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className={styles['path1']} d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke={ input.price == 0 ? "rgb(13, 204, 90)" : "#ddd" } fill="#fff"></path>
                                    <path className={styles['path2']} d="M7 12.6667L10.3846 16L18 8.5" stroke={ input.price == 0 ? "rgb(13, 204, 90)" : "#ddd" } strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </div>
                            <span>무료나눔</span>
                        </div>
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
                    <label>상품 설명</label>
                    <textarea name='explain' value={input.explain} onChange={setInputState} placeholder="상품 설명 입력"></textarea>
                </div>

                <div className={styles['form-group']}>
                    <label>상품상태</label>
                    <button type='button' className={`${styles.btn} ${input.status == '중고' ? styles.old : styles.new}`} onClick={() => {setStatusClick('status', '중고')}}>중고</button>
                    <button type='button' className={`${styles.btn} ${input.status == '새상품' ? styles.old : styles.new}`} onClick={() => {setStatusClick('status', '새상품')}}>새상품</button>
                </div>

                <div className={styles['form-group']}>
                    <label>거래방법</label>
                    <div className={styles['trade-type-container']}>
                        <div className={styles['trade-type']} onClick={() => setStatusClick('tradeWay', '택배거래') }>
                            <div className={styles['svg-1']}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className={styles['path1']} d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke={ input.tradeWay == '택배거래' ? "rgb(13, 204, 90)" : "#ddd" } fill="#fff"></path>
                                    <path className={styles['path2']} d="M7 12.6667L10.3846 16L18 8.5" stroke={ input.tradeWay == '택배거래' ? "rgb(13, 204, 90)" : "#ddd" } strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </div>
                            <span>택배거래</span>
                        </div>
                        <div className={styles['trade-type']} onClick={() => setStatusClick('tradeWay', '직거래') }>
                            <div className={styles['svg-1']}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className={styles['path1']} d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke={ input.tradeWay == '직거래' ? "rgb(13, 204, 90)" : "#ddd" } fill="#fff"></path>
                                    <path className={styles['path2']} d="M7 12.6667L10.3846 16L18 8.5" stroke={ input.tradeWay == '직거래' ? "rgb(13, 204, 90)" : "#ddd" } strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </div>
                            <span>직거래</span>
                        </div>
                    </div>
                </div>

                <div className={styles['form-group']}>
                    <label>희망 지역&nbsp;<span><span>0</span>/5</span></label>
                    <div className={styles['place-container']}>
                        <button className={`${styles.btn} ${styles['btn-place']}`}>+ 추가하기</button>
                        <div className={styles['select-place']}>
                            <span>상도 제1동</span>
                            <button type="button">
                                <svg width="20px" height="20px" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z" fill="white"></path>
                                    <path d="M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5V18.5C14.6944 18.5 18.5 14.6944 18.5 10H17.5ZM10 17.5C5.85786 17.5 2.5 14.1421 2.5 10H1.5C1.5 14.6944 5.30558 18.5 10 18.5V17.5ZM2.5 10C2.5 5.85786 5.85786 2.5 10 2.5V1.5C5.30558 1.5 1.5 5.30558 1.5 10H2.5ZM10 2.5C14.1421 2.5 17.5 5.85786 17.5 10H18.5C18.5 5.30558 14.6944 1.5 10 1.5V2.5Z" fill="#DADEE5"></path>
                                    <path d="M7 7L13 13M13 7L7 13" stroke="#363C45" strokeLinecap="round"></path>
                                </svg>
                            </button>
                        </div>
                        {/* 추가 선택지 */}
                    </div>
                </div>

                <div className={styles['form-group']}>
                    <button className={styles['submit-btn']}>등록</button>
                </div>
            </form>
        </div>
    );
}

export default ProductRegister;
