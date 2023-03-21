import { inputUserType } from '@/types/UserInformation/Information';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import Head from 'next/head';
import StButton from '../ui/StButton';

export interface LoginModalProps {
    isLoginModalOpen: boolean;
    setIsLoginModalOpen: Dispatch<SetStateAction<boolean>>;
}

export default function LoginModal({ isLoginModalOpen, setIsLoginModalOpen }: LoginModalProps) {

    const [inputUserData, setInputUserData] = useState<inputUserType>({
        userNickname: '',
        password: ''
    })

    useEffect(() => {
        console.log(inputUserData)
    }, [inputUserData])

    const handleSignup = () => {
        
    }

    if (!isLoginModalOpen) return null;

    return (
        <>
            <div className="signupmodalBox">
                <header className="signup-header">
                    <div className="signup-header-cancel" onClick={() => setIsLoginModalOpen(false)}>
                        <img src="https://cdn-icons-png.flaticon.com/512/864/864393.png" />
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

                <section className="id-pwd-input">
                    <div className="input-box">
                        <input className="id" type="text" maxLength="20" placeholder="아이디" />
                        <label htmlFor="id">아이디</label>
                    </div>
                    <div className="input-box">
                        <input className="pwd" type="password" maxLength="20" placeholder="비밀번호" />
                        <label htmlFor="pwd">비밀번호</label>
                    </div>
                </section>

                <section className="find-btn-wrap">
                    <ul>
                        <li><a href="">아이디 찾기</a></li>
                        <li><a href="">비밀번호 찾기</a></li>
                        <li>
                            <StButton
                                buttontext='회원가입'
                                textsize='4px'
                                handler={handleSignup}
                            />
                        </li>
                    </ul>
                </section>

                <footer className="login-footer">
                    <div className="login-footer-btn">
                        <span>로그인하기</span>
                    </div>
                </footer>
            </div>
        </>
    )
}
