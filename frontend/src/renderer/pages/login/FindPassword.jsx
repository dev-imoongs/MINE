import React from 'react';

const FindPassword = () => {
    return (
        <div className="login-container">
            <header>
                <h1>Joonggonara</h1>
            </header>
            <div className="signup-form">
                <h2>비밀번호 재설정</h2>
                <div className="explain">
                    <span>OOOOO 가입 시 사용한 이메일 계정을 입력해주세요.</span>
                    <br/>
                    <span>해당 이메일로 비밀번호 재설정 링크를 보내드립니다.</span>
                </div>
                <form>
                    <div className="form-group">
                        <label>이메일</label>
                        <input type="email" placeholder="이메일 입력" />
                        <span className="error-message">이메일을 입력해주세요</span>
                    </div>
                    <button type="submit" className="submit-button">비밀번호 재설정 링크 전송</button>
                </form>
            </div>
        </div>
    );
}

export default FindPassword;
