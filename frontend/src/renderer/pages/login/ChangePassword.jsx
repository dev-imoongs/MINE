import { useState } from 'react';
import styles from '../../../styles/login/find-password.module.css';
import InputForm from "../../components/login/LoginComponent";

const ChangePassword = () => {
    const [input, setInput] = useState({
        password: "",
        passwordCheck: ""
    });

    const [error, setError] = useState({
        passwordError: "",
        passwordCheckError: ""
    });

    const onChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    };

    const onClick = () => {
        if (validateForm()) {
            alert('성공');
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
