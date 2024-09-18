import React from 'react';
import styles from '../../../styles/login/find-password.module.css'; // CSS Module 파일 임포트

const FindPassword = () => {
    return (
        <div className={styles['login-container']}> {/* 하이픈 포함된 클래스명 접근 */}
            <div className={styles['signup-form']}>
                <h2>비밀번호 재설정</h2>
                <div className={styles.explain}>
                    <span>OOOOO 가입 시 사용한 이메일 계정을 입력해주세요.</span>
                    <br />
                    <span>해당 이메일로 비밀번호 재설정 링크를 보내드립니다.</span>
                </div>
                <form>
                    <div className={styles['form-group']}>
                        <label>이메일</label>
                        <input type="email" placeholder="이메일 입력" />
                        <span className={styles['error-message']}>이메일을 입력해주세요</span>
                    </div>
                    <button type="submit" className={styles['submit-button']}>비밀번호 재설정 링크 전송</button>
                </form>
            </div>
        </div>
    );
}

export default FindPassword;
