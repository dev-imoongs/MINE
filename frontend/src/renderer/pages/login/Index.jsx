import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import styles from '../../../styles/login/index.module.css';
import { authState } from '.././../../recoil/atoms/loginUserAtom';
import { useRecoilState } from 'recoil';
import { login } from '../../../services/userApiService.js';

const Index = () => {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useRecoilState(authState);
    const [input, setInput] = useState({
        email: '',
        password: '',
    });

    const loginCheck = useQuery({
        queryKey: 'loginCheck',
        queryFn: () => login(input),
        enabled: false, // 초기에는 쿼리를 자동 실행하지 않음
        onSuccess: (result) => {
            if (result.valid) {
                console.log(result);
                setIsLogin({ isLoggedIn: result.valid, userEmail: result.userEmail });
                navigate('/'); // 성공 시 페이지 이동
            } else {
                alert('이메일 또는 비밀번호를 확인하세요.');
            }
        },
        onError: (error) => {
            console.error('Error during login:', error);
            alert('로그인 도중 오류가 발생했습니다.');
        },
    });

    const onChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
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

        loginCheck.refetch();
    };

    return (
        <div className={styles['login']}>
            <div className={styles['login-container']}>
                <h2>로그인</h2>
                <form>
                    <input
                        type="email"
                        name="email"
                        value={input.email}
                        onChange={onChange}
                        placeholder="example@gmail.com"
                    />
                    <input
                        type="password"
                        name="password"
                        value={input.password}
                        onChange={onChange}
                        placeholder="비밀번호 입력"
                    />
                    <button type="submit" onClick={validateForm}>
                        로그인
                    </button>
                </form>
                <div className={styles.divider}>
                    <span>계정이 없으신가요?</span>
                </div>
                <div className={styles['start-email']}>
                    <Link to="/join">
                        <button type="button">이메일로 시작하기</button>
                    </Link>
                </div>
                <div className={styles['forgot-password']}>
                    <span>비밀번호를 잊으셨나요?</span>
                    <Link to="/findPassword"> 비밀번호 재설정</Link>
                </div>
            </div>
        </div>
    );
};

export default Index;
