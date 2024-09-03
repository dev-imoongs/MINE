import React from 'react';

const Modal = () => {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="text-box">
                    <span>인증 단계를 중단하고</span>
                    <br/>
                    <span>처음으로 돌아가시겠습니까?</span>
                </div>
                <div className="modal-actions">
                    <button className="confirm-button">확인</button>
                    <button className="cancel-button">취소</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
