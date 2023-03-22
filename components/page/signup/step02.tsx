import { inputRegisterType } from '@/types/UserInformation/Information';
import moment from 'moment';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface ChildProps {
    inputData: inputRegisterType;
    setInputData: React.Dispatch<React.SetStateAction<inputRegisterType>>;
}
const Step02 = ({ inputData, setInputData }: ChildProps) => {

    const [confirmKey, setConfirmKey] = useState<string>('');
    const [confirmView, setConfirmView] = useState<boolean>(false);

    const MINUTES_IN_MS = 3 * 60;
    const INTERVAL = 1000;
    const [timeLeft, setTimeLeft] = useState<number>(MINUTES_IN_MS);

    const expression: RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/g;

    //create email regex code

    useEffect(() => {
        console.log(new Date())
        console.log(inputData)
    }, [inputData])

    useEffect(() => {
        console.log(timeLeft)
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1);
        }, INTERVAL);

        if (timeLeft <= 0) {
            clearInterval(timer);
            setTimeLeft(MINUTES_IN_MS);
            console.log('타이머가 종료되었습니다.');
        }

        return () => {
            clearInterval(timer);
        };
    }, [timeLeft]);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === 'confirmKey') setConfirmKey(value);
        if (name === 'userEmail' && expression.test(value)) {
            // 이메일 중복확인
            console.log('이메일 중복확인')
        }
        setInputData({
            ...inputData,
            [name]: value,
        })
    }

    const handleEmailCofirm = () => {

        if (!expression.test(inputData.userEmail)) {
            alert('이메일 형식이 올바르지 않습니다.')
            return;
        }
        console.log("이메일 전송")
        
        axios.post('http://10.10.10.39:8080/api/v1/email/confirm', {
            userEmail: inputData.userEmail,
        })
            .then((res) => {
                if (res.data === true) {
                    setConfirmView(true)
                }else if (res.data === false) {
                    alert('이미 가입되어 있는 이메일입니다.')
                    setConfirmView(false)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }
    const handleConfirmKey = () => {
        console.log(confirmKey)
        //서버에 키값 확인
        axios.post('http://10.10.10.39:8080/api/v1/email/checkcode', {
            userEmail: inputData.userEmail,
            confirmKey: inputData.confirmKey
        })
            .then((res) => {
                console.log(res)
                // 키값이 일치하면 인증완료
            })
            .catch((err) => {
                console.log(err)
            })
    }
    const handlephone = () => {
        console.log("휴대폰 번호 전송")
        axios.post('http://10.10.10.39:8080/api/v1/email/confirm', {
            phone: inputData.phone,
        })
            .then((res) => {
                console.log(res)
                alert('사용 가능합니다.')
            })
            .catch((err) => {
                console.log(err)
                alert('가입한 이력이 있는 전화번호 입니다.')
            })
    }
    const handlenickname = () => {
        console.log("닉네임 전송")
        axios.post('http://10.10.10.39:8080/api/v1/email/confirm', {
            userNickname: inputData.userNickname,
        })
            .then((res) => {
                console.log(res)
                alert('사용 가능합니다.')
            })
            .catch((err) => {
                console.log(err)
                alert('중복되는 닉네임 입니다.')
            })
    }

    return (
        <>
            <div className="email-password-box">
                <div className="greeting">
                    <h2 className="signup-info">회원 정보를<br />입력해주세요.</h2>
                </div>
                <form className="agree-input" id="agree-main">
                    <div className="userName-box">
                        <p>이름 : </p>
                        <input
                            type="text"
                            name="userName"
                            placeholder='이름 입력'
                            maxLength={6}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="birthday-box">
                        <p>생일 : </p>
                        <input
                            type="date"
                            name="birthday"
                            value="2023-03-22"
                            max="2023-03-31"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="phone-box">
                        <p>휴대폰 : </p>
                        <input
                            type="tel"
                            name="phone"
                            placeholder='전화번호 입력'
                            maxLength={11}
                            onChange={handleChange}
                        />
                        {/* <button type="button" onClick={handlephone}>휴대폰 확인</button> */}
                    </div>
                    <div className="email-box">
                        <p>이메일 : </p>
                        <input
                            type="email"
                            name="userEmail"
                            placeholder='이메일 입력'
                            onChange={handleChange}
                            required={true}
                        />
                        <button type="button" onClick={handleEmailCofirm}>이메일인증</button>
                    </div>
                    {
                        confirmView &&
                        <div>
                            <div className="confirm-box">
                                <p>인증키 :</p>
                                <input
                                    type="text"
                                    name="confirmKey"
                                    placeholder='인증키 입력'
                                    onChange={handleChange}
                                />
                                <button type="button" onClick={handleConfirmKey}>인증하기</button>
                            </div>
                            <p>{moment(timeLeft / 60, 'mm:ss').format("mm:ss")}</p>
                        </div>
                    }
                    <div className="password-box">
                        <p>비밀번호 : </p>
                        <input
                            type="password"
                            name="password"
                            placeholder='최대 12문자까지 입력'
                            onChange={handleChange}
                            maxLength={12}
                        />
                    </div>
                    <div className="confirmPassword-box">
                        <p>비밀번호 확인 : </p>
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder='비밀번호 재입력'
                            onChange={handleChange}
                            maxLength={12}
                        />
                    </div>
                    <div className="userNickname-box">
                        <p>닉네임 : </p>
                        <input
                            type="text"
                            name="userNickname"
                            placeholder='닉네임(한글 6자리 이내)'
                            onChange={handleChange}
                            maxLength={6}
                        />
                        <button type="button" onClick={handlenickname}>닉네임 확인</button>
                    </div>
                </form>
                <section id="nickname-notice-box">
                    <p>· 매장에서 주문한 메뉴를 찾으실 때, 등록한 닉네임으로 불러 드립니다.</p>
                </section>
            </div>
        </>
    );
}

export default Step02;