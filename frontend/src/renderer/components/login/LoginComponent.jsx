import React from 'react';

const InputForm = ({type, input, onChange}) => {
    let title;
    let placeholder;
    let value;

    switch(type) {
        case 'email' :
            title = '이메일';
            placeholder = '이메일 입력';
            value = input.email;
            break;
        case 'password' :
            title = '비밀번호';
            placeholder = '비밀번호 입력';
            value = input.password;
            break;
        case 'passwordCheck' :
            title = '비밀번호 확인';
            placeholder = '비밀번호 입력';
            value = input.passwordCheck;
            break;
        case 'nickname' :
            title = '닉네임';
            placeholder = '닉네임 입력';
            value = input.nickname;
            break;
    }

    return (
        <>
            <label>{title}</label>
            <input type={type.split('C')[0]} name={type} placeholder={placeholder} onChange={onChange} value={value} />
        </>
    );
}

export default InputForm;