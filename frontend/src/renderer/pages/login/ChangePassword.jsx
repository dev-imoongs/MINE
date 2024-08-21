import React from 'react';

const ChangePassword = () => {
    return (
        <div className="login-container">
            <header>
                <h1>Joonggonara</h1>
            </header>
            <div className="signup-form">
                <h2>비밀번호 재설정</h2>
                <form>
                    <div className="form-group">
                        <label>새 비밀번호 입력</label>
                        <input type="password" placeholder="새 비밀번호 입력" />
                        <span className="error-message">비밀번호를 입력해주세요</span>
                    </div>
                    <div className="form-group">
                        <label>새 비밀번호 확인</label>
                        <input type="password" placeholder="새 비밀번호 확인" />
                        <span className="error-message">비밀번호가 일치하지 않습니다</span>
                    </div>
                    <button type="submit" className="submit-button">비밀번호 재설정</button>
                </form>
            </div>
        </div>
    );
}

export default ChangePassword;
