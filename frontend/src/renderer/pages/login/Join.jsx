import React from 'react';

const Join = () => {
    return (
        <div className="login-container">
            <header>
                <h1>Joonggonara</h1>
            </header>
            <div className="signup-form">
                <h2>이메일로 회원가입</h2>
                <form>
                    <div className="form-group">
                        <label>이메일</label>
                        <input type="email" placeholder="이메일 입력" />
                        <span className="error-message">유효하지 않은 이메일입니다.</span>
                    </div>
                    <div className="form-group">
                        <label>비밀번호</label>
                        <input type="password" placeholder="비밀번호 입력" />
                        <span className="error-message">비밀번호를 입력해주세요.</span>
                    </div>
                    <div className="form-group">
                        <label>비밀번호 확인</label>
                        <input type="password" placeholder="비밀번호 확인" />
                        <span className="error-message">비밀번호가 일치하지 않습니다.</span>
                    </div>
                    <div className="form-group">
                        <label>닉네임</label>
                        <input type="text" placeholder="닉네임 입력" />
                        <span className="error-message">닉네임을 입력해주세요.</span>
                    </div>
                    <div className="form-group">
                        <label>사는곳</label>
                        <input type="text" placeholder="사는곳 입력" />
                        <span className="error-message">사는곳을 입력해주세요.</span>
                    </div>
                    <button type="submit" className="submit-button">제출하기</button>
                </form>
            </div>
        </div>
    );
}

export default Join;
