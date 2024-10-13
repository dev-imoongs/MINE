import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../../styles/login/index.module.css';

const Index = () => {
    const navigate = useNavigate();
    
    const [input, setInput] = useState({
        email: "",
        password: "",
    });

    const onChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    };

    const validateForm = (e) => {
        e.preventDefault();
        if (!input.email) {
            alert('이메일을 입력하세요');
            return;
        }

        if (!input.password) {
            alert('비밀번호를 입력하세요');
            return;
        }

        navigate('/');
    }

    return (
        <div className={styles['login']}>
            <div className={styles['login-container']}>
                <h2>로그인</h2>
                <form>
                    <input type="email" name='email' value={input.email} onChange={onChange} placeholder="example@gmail.com" />
                    <input type="password" name='password' value={input.password} onChange={onChange} placeholder="비밀번호 입력" />
                    <button type="submit" onClick={validateForm}>로그인</button>
                </form>
                <div className={styles.divider}><span>계정이 없으신가요?</span></div>
                <div className={styles['start-email']}>
                    <button type='button'>이메일로 시작하기</button>
                </div>
                <div className={styles['forgot-password']}>
                    <span>비밀번호를 잊으셨나요?</span>
                    <a href="#">비밀번호 재설정</a>
                </div>
            </div>
        </div>
    );
}

export default Index;
