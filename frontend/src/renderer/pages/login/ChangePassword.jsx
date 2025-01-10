import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from "react-query";
import styles from '../../../styles/login/find-password.module.css';
import InputForm from "../../components/login/LoginComponent";

import { checkKey } from "../../../services/userApiService.js";
import { changePassword } from "../../../services/userApiService.js";

const ChangePassword = () => {
    const navigate = useNavigate();

    const [input, setInput] = useState({
        password: "",
        passwordCheck: ""
    });

    const [error, setError] = useState({
        passwordError: "",
        passwordCheckError: ""
    });

    const params = new URLSearchParams(window.location.search);
    const email = params.get('userEmail');
    const keyValue = params.get('key');

    useEffect(() => {
        if (!email || !keyValue) {
            alert('잘못된 접근입니다.');
            navigate('/');
            return;
        }

        const verifyKey = async () => {
            try {
                const result = await checkKey(email, keyValue);
                if (!result) {
                    alert('잘못된 접근입니다.');
                    navigate('/');
                }
            } catch (error) {
                console.error("Error during checkKey:", error);
                alert('오류가 발생했습니다.');
                navigate('/');
            }
        };

        verifyKey();
    }, [email, keyValue, navigate]);

    const changePasswordAction = useQuery({
        queryKey: "changePassword",
        queryFn: () => changePassword(email, input.password),
        enabled: false, // 초기에는 쿼리를 자동 실행하지 않음
        onSuccess: () => {
            alert('비밀번호가 재설정 되었습니다.');
            navigate('/');
        },
        onError: (error) => {
            console.error("Error during login:", error);
            alert('비밀번호 재설정 중 오류가 발생했습니다.');
        },
    });

    const onChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    };

    const onClick = () => {
        if (validateForm()) {
            changePasswordAction.refetch();
        }
    };

    const validateForm = (e) => {
        const errors = {};

        const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[~?!@#$%^&*_-]).{8,}$/;

        if (!input.password) {
            errors.passwordError = '비밀번호를 입력하세요';
        } else if (!passwordRegex.test(input.password)) {
            errors.passwordError = '비밀번호는 8자 이상, 영어 대/소문자, 특수문자가 포함되어야합니다';
        }

        if (!input.passwordCheck) {
            errors.passwordCheckError = '비밀번호를 다시 한번 적어주세요';
        } else if (input.passwordCheck !== input.password) {
            errors.passwordCheckError = '비밀번호가 동일하지 않습니다';
        }

        setError(errors);

        return Object.keys(errors).length === 0;
    };

    return (
        <div className={styles['password']}>
            <div className={styles['password-container']}>
                <div className={styles['signup-form']}>
                    <h2>비밀번호 재설정</h2>
                    <form>
                        <div className={styles['form-group']}>
                            <InputForm
                                type={'password'}
                                input={input}
                                onChange={onChange}
                                className={error.passwordError ? styles['error-border'] : ''}
                            />
                            {error.passwordError && <span className={styles['error-message']}>{error.passwordError}</span>}
                        </div>
                        <div className={styles['form-group']}>
                            <InputForm
                                type={'passwordCheck'}
                                input={input}
                                onChange={onChange}
                                className={error.passwordCheckError ? styles['error-border'] : ''}
                            />
                            {error.passwordCheckError && <span className={styles['error-message']}>{error.passwordCheckError}</span>}
                        </div>
                        <button type="button" onClick={onClick} className={styles['submit-button']}>비밀번호 재설정</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ChangePassword;
