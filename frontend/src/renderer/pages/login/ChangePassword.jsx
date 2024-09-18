import React from 'react';
import styles from '../../../styles/login/find-password.module.css'; // CSS Module 파일 임포트

const ChangePassword = () => {
    return (
        <div className={styles['login-container']}> {/* 하이픈 포함된 클래스명 접근 */}
            <div className={styles['signup-form']}>
                <h2>비밀번호 재설정</h2>
                <form>
                    <div className={styles['form-group']}>
                        <label>새 비밀번호 입력</label>
                        <input type="password" placeholder="새 비밀번호 입력" />
                        <span className={styles['error-message']}>비밀번호를 입력해주세요</span>
                    </div>
                    <div className={styles['form-group']}>
                        <label>새 비밀번호 확인</label>
                        <input type="password" placeholder="새 비밀번호 확인" />
                        <span className={styles['error-message']}>비밀번호가 일치하지 않습니다</span>
                    </div>
                    <button type="submit" className={styles['submit-button']}>비밀번호 재설정</button>
                </form>
            </div>
        </div>
    );
}

export default ChangePassword;
