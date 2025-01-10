import { useState } from 'react';
import { useQuery } from "react-query";
import styles from '../../../styles/login/find-password.module.css';
import InputForm from "../../components/login/LoginComponent";

import { checkDuplicateEmail } from "../../../services/userApiService.js";
import { sendEmail } from "../../../services/userApiService.js";

const FindPassword = () => {
    const [input, setInput] = useState({
        email: ""
    });

    const [error, setError] = useState({
        emailError: ''
    });

    const emailCheck = useQuery({
        queryKey: "emailCheck",
        queryFn: () => checkDuplicateEmail(input),
        enabled: false, // 초기에는 쿼리를 자동 실행하지 않음
        onSuccess: (result) => {
            if(!result) {
                sendEmailAction.refetch();
            } else {
                alert('존재하지 않는 이메일입니다.');
            }
        },
        onError: (error) => {
            console.error("Error during login:", error);
            alert('이메일 검사중 오류가 발생했습니다.');
        },
    });

    const sendEmailAction = useQuery({
        queryKey: "sendEmail",
        queryFn: () => sendEmail(input),
        enabled: false, // 초기에는 쿼리를 자동 실행하지 않음
        onSuccess: () => {
            alert('이메일을 전송했습니다.');
            navigator('/');
        },
        onError: (error) => {
            console.error("Error during login:", error);
            alert('이메일 전송중 오류가 발생했습니다.');
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
            emailCheck.refetch();
        }
    };

    const validateForm = (e) => {
        const errors = {};

        const emailRegex = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)/;

        if (!input.email) {
            errors.emailError = '이메일을 입력하세요';
        } else if (!emailRegex.test(input.email)) {
            errors.emailError = '이메일 형식이 맞지 않습니다';
        }

        setError(errors);

        return Object.keys(errors).length === 0;
    };

    return (
        <div className={styles['password']}>
            <div className={styles['password-container']}>
                <div className={styles['signup-form']}>
                    <h2>비밀번호 재설정</h2>
                    <div className={styles.explain}>
                        <span>MINE 가입 시 사용한 이메일 계정을 입력해주세요.</span>
                        <br />
                        <span>해당 이메일로 비밀번호 재설정 링크를 보내드립니다.</span>
                    </div>
                    <form>
                        <div className={styles['form-group']}>
                            <InputForm
                                type={'email'}
                                input={input}
                                onChange={onChange}
                                className={error.emailError ? styles['error-border'] : ''}
                            />
                            {error.emailError && <span className={styles['error-message']}>{error.emailError}</span>}
                        </div>
                        <button type="button" onClick={onClick} className={styles['submit-button']}>비밀번호 재설정 링크 전송</button>
                    </form>
                </div>
            </div>
        </div>
        
    );
}

export default FindPassword;
