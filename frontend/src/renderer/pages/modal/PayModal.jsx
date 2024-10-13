import React, { useState } from 'react';
import '../../../styles/auction/paymodal.css';
import useFormattedPrice from '../../../hooks/useFormattedPrice';

const PayModal = ({ detailInfo, setPayIsOpen }) => {
    const [amount, setAmount] = useState('');

    const handleDigitClick = (value) => {
        if (value === '직접입력') {
            // 추가 로직이 필요할 수 있음 (예: 포커스)
        } else {
            setAmount((prev) => (prev ? Number(prev) + value : value));
        }
    };

    const handleInputChange = (e) => {
        setAmount(e.target.value);
    };

    return (
        <div className="modal-overlay">
            <div
                className="ngdialog-content"
                style={{ position: 'fixed', alignItems: 'center', justifyContent: 'center' }}
            >
                <div className="modal-content">
                    <div className="inner-modal">
                        <div>
                            <strong className="tit-head">입찰하기</strong>
                        </div>
                        <div className="layer-body">
                            <div className="info-profile">
                                <div
                                    className="thumb-img"
                                    style={{ backgroundImage: 'url(userimg)' }} // userimg는 실제 URL로 변경해야 합니다.
                                ></div>
                                <div className="area-info">
                                    <strong className="tit-info">{detailInfo.productInfo.title}</strong>
                                    <p className="txt-sponsor">유저 이름</p>
                                </div>
                            </div>
                            <form name="form" className="form-manage">
                                <fieldset>
                                    <div className="wrap-fund">
                                        <div className="box-input-num">
                                            <input
                                                type="text"
                                                inputMode="numeric"
                                                id="tfWrite"
                                                name="amount"
                                                placeholder="0"
                                                className="tf-g"
                                                value={useFormattedPrice(amount)}
                                                onChange={handleInputChange}
                                            />
                                            <em className="txt-unit">원</em>
                                            <button className="btn-reset" type="button" onClick={() => setAmount('')}>
                                                <span className="ico-close-round"></span>
                                            </button>
                                        </div>

                                        <div className="box-digit">
                                            {[1000, 3000, 5000, 10000, 30000, 50000, 100000, '직접입력'].map(
                                                (value) => (
                                                    <button
                                                        key={value}
                                                        type="button"
                                                        className="btn-digit"
                                                        onClick={() => handleDigitClick(value)}
                                                    >
                                                        {typeof value === 'number'
                                                            ? `+ ${useFormattedPrice(value)}원`
                                                            : value}
                                                    </button>
                                                )
                                            )}
                                        </div>
                                    </div>
                                    <div className="wrap-btns">
                                        <button type="button" className="btn-set">
                                            입찰하기
                                        </button>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                        <div className="layer-foot">
                            <button
                                type="button"
                                className="btn-close"
                                onClick={() => {
                                    setPayIsOpen(false);
                                }}
                            >
                                <span className="ico-close ir-pm">닫기</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PayModal;
