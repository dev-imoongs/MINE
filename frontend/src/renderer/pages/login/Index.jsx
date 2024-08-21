import React from 'react';

const Index = () => {
    return (
        <div className="login-container">
            <h2>로그인</h2>
            <form>
                <input type="email" placeholder="example@gmail.com" required />
                <input type="password" placeholder="비밀번호 입력" required />
                <button type="submit">로그인</button>
            </form>
            <div className="divider"><span>계정이 없으신가요?</span></div>
            <div className="start-email">
                <button>이메일로 시작하기</button>
            </div>
            <div className="forgot-password">
                <span>비밀번호를 잊으셨나요?</span>
                <a href="#">비밀번호 재설정</a>
            </div>
        </div>
    );
}

export default Index;
