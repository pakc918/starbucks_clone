import { inputRegisterType } from '@/types/UserInformation/Information';
import React, { useState, useEffect } from 'react';
import axiois from 'axios';
import moment from 'moment';

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


    const handleChagne = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        if (inputData.userEmail === '') {
            alert('이메일을 입력해주세요.')
            return;
        }
        console.log("이메일 전송")
        setConfirmView(true)
        // 서버에 이메일 전송


    }
    const handleConfirmKey = () => {
        console.log(confirmKey)
        // 서버에 키값 확인
        // axiois.post('http://localhost:3000/api/user/confirmKey', {
        //   confirmKey: confirmKey,
        // })
        // .then((res) => {
        //   console.log(res)
        //   // 키값이 일치하면 인증완료
        // })
        // .catch((err) => {
        //   console.log(err)
        // })
    }

    const handleCheck = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('submit')
    }


    return (
        <>
            <div className="email-password-box">
                <div className="greeting">
                    <h2 className="signup-info">이메일과 비밀번호를<br />입력해주세요.</h2>
                </div>
                <form className="agree-input" id="agree-main">
                    <div className="email-box">
                        <p>email : </p>
                        <input
                            type="email"
                            name="userEmail"
                            placeholder='이메일을 입력해주세요.'
                            onChange={handleChagne}
                            required={true}
                        />
                        <button type="button" onClick={handleEmailCofirm}>이메일인증</button>
                    </div>
                    {
                        confirmView &&
                        <div>
                            <input
                                type="text"
                                name="confirmKey"
                                placeholder='인증키를 입력해주세요.'
                                onChange={handleChagne}
                            />
                            <button type="button" onClick={handleConfirmKey}>인증하기</button>
                            <p>{moment(timeLeft / 60, 'mm:ss').format("mm:ss")}</p>
                        </div>
                    }
                    <div className="password-box">
                        <p>password : </p>
                        <input
                            type="password"
                            name="password"
                            placeholder='암호를 입력해주세요.'
                            onChange={handleChagne}
                        />
                    </div>
                    <div className="confirmPassword-box">
                        <p>confirmPassword : </p>
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder='암호를 한번 더 입력해주세요.'
                            onChange={handleChagne}
                        />
                    </div>
                </form>
            </div>
        </>
    );
}

export default Step02;