import { useState } from 'react';

const Join = () => {
    const [input, setInput] = useState({
        email : "",
        password : "",
        nickname : "",
        address : "",
        addressDetail : "",
        category1 : "",
        category2 : "",
        category3 : ""
    });

    const onChange = (e) => {
        setInput({
            ...input,
            [e.target.name] : e.target.value
        });
    };

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
                        <input type="email" name='email' placeholder="이메일 입력" onChange={onChange} value={input.email} />
                        <span className="error-message">유효하지 않은 이메일입니다.</span>
                    </div>
                    <div className="form-group">
                        <label>비밀번호</label>
                        <input type="password" name='password' placeholder="비밀번호 입력" onChange={onChange} value={input.password} />
                        <span className="error-message">비밀번호를 입력해주세요.</span>
                    </div>
                    <div className="form-group">
                        <label>비밀번호 확인</label>
                        <input type="password" placeholder="비밀번호 확인" />
                        <span className="error-message">비밀번호가 일치하지 않습니다.</span>
                    </div>
                    <div className="form-group">
                        <label>닉네임</label>
                        <input type="text" name='nickname' placeholder="닉네임 입력" onChange={onChange} value={input.nickname} />
                        <span className="error-message">닉네임을 입력해주세요.</span>
                    </div>
                    <div className="form-group">
                        <label>주소</label>
                        <div className='address-container'>
                            <input type="text" name='address' placeholder="주소를 찾아주세요" onChange={onChange} value={input.address} readOnly/>
                            <button type='button' className='find-address'>찾기</button>
                        </div>
                        <input type="text" name='addressDetail' placeholder="상세주소 입력" onChange={onChange} value={input.addressDetail} readOnly/>
                        <span className="error-message">사는곳을 입력해주세요.</span>
                    </div>
                    <div className="form-group">
                        <label>관심 카테고리</label>
                        <select id='category1' name='category1' onChange={onChange} value={input.category1}>
                            <option value="">카테고리</option>
                            <option value="1">머리</option>
                            <option value="2">어깨</option>
                            <option value="3">무릎</option>
                            <option value="4">발</option>
                            <option value="5">스웩</option>
                        </select>
                        <select id='category2' name='category2' onChange={onChange} value={input.category2}>
                            <option value="">카테고리</option>
                            <option value="1">머리</option>
                            <option value="2">어깨</option>
                            <option value="3">무릎</option>
                            <option value="4">발</option>
                            <option value="5">스웩</option>
                        </select>
                        <select id='category3' name='category3' onChange={onChange} value={input.category3}>
                            <option value="">카테고리</option>
                            <option value="1">머리</option>
                            <option value="2">어깨</option>
                            <option value="3">무릎</option>
                            <option value="4">발</option>
                            <option value="5">스웩</option>
                        </select>
                    </div>
                    <button type="submit" className="submit-button">제출하기</button>
                </form>
            </div>
        </div>
    );
}

export default Join;
