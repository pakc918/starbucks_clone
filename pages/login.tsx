import React, { ChangeEvent } from 'react'

export default function login() {
    return (
        <>
            <header>
                <div className="login-header-top">
                    <img src="https://cdn-icons-png.flaticon.com/512/860/860790.png" />
                </div>
                <div className="login-header-bot">
                    <p>로그인</p>
                </div>
            </header>

            <section className="login-logo">
                <img src="https://www.starbucks.co.kr/common/img/common/logo.png" />
            </section>

            <section className="login-notice">
                <p className="hello">안녕하세요.</p>
                <p className="starbucks">스타벅스입니다.</p>
                <span>회원 서비스 이용을 위해 로그인 해주세요.</span>
            </section>

            <form>
            <section className="id-pwd-input">
                <div className="input-box">
                    <input className="id" type="text" maxLength={20} placeholder="아이디" />
                    <label htmlFor="id">아이디</label>
                </div>
                <div className="input-box">
                    <input className="pwd" type="password" maxLength={20} placeholder="비밀번호" />
                    <label htmlFor="pwd">비밀번호</label>
                </div>
            </section>

            <section className="find-btn-wrap">
                <ul>
                    <li><a href="">아이디 찾기</a></li>
                    <li><a href="">비밀번호 찾기</a></li>
                    <li className="last"><a href="">회원가입</a></li>
                </ul>
            </section>

            <footer className="login-footer">
                <div className="login-footer-btn">
                    <span>로그인하기</span>
                </div>
            </footer>
            </form>
        </>
    )
}
