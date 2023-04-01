import { inputRegisterType } from '@/types/UserInformation/Information';
import React, { useState, useEffect } from 'react';
import Config from "@/configs/config.export";
import axios from 'axios';
import Swal from 'sweetalert2';
import Countdown from 'react-countdown';
import { SignupErrType } from '@/types/signup/signErrType';

interface ChildProps {
    inputData: inputRegisterType;
    setInputData: React.Dispatch<React.SetStateAction<inputRegisterType>>;
}

const renderer = (props: {
    hours: any;
    minutes: any;
    seconds: any;
    completed: any;
}) => {
    if (props.completed) {
        Swal.fire({
            icon: "warning",
            text: `입력 시간이 초과 되었습니다. 다시 시도해주세요.`,
            customClass: {
                confirmButton: "swal-confirm-button",
            },
        });
        return <></>;
    } else {
        // Render a countdown
        return (
            <span>
                {props.minutes} : {props.seconds}
            </span>
        );
    }
};

const Step02 = ({ inputData, setInputData }: ChildProps) => {

    //countdown date = {Date.now() +}
    const [confirmTime, setConfirmTime] = useState<number>(1)
    const [confirmKey, setConfirmKey] = useState<string>("");
    const [confirmView, setConfirmView] = useState<boolean>(false);
    const [duplicateView, setDuplicateView] = useState<boolean>(false);

    //create email regex code
    const expression: RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/g;
    const passwordRegex: RegExp = /^(?=.*[a-zA-Z])(?=.*[!@#$^*])(?=.*[0-9]).{8,20}$/;
    //최소 8자 이상, 최소 하나의 알파벳 문자가 포함, 최소 하나의 숫자, 특수문자가 포함.

    const [errMsg, setErrMsg] = useState<SignupErrType>({
        emailErr: "",
        passwordErr: "",
        confirmPasswordErr: "",
        confirmKeyErr: ""
    });

    const baseUrl = Config().baseUrl;

    useEffect(() => {
        console.log(new Date())
        console.log(inputData)
    }, [inputData])


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === 'confirmKey') setConfirmKey(value);
        if (name === 'password' && value.length > 8 && passwordRegex.test(inputData.password)) {
            if (!passwordRegex.test(value)) {
                if (value.length > 20) {
                    setErrMsg({ ...errMsg, passwordErr: "비밀번호는 20자리 이하로 해주세요." })
                } else {
                    setErrMsg({ ...errMsg, passwordErr: "비밀 번호는 숫자, 영문자, 특수문자(!@#$^*)를 포함한 8자리 이상이어야 합니다." })
                }
            }
            return;
        } else if(inputData.password === ""){
            setErrMsg({ ...errMsg, passwordErr: "" })
        }

        if (name === 'userEmail' && expression.test(value)) {
            // 이메일 중복확인
            console.log('이메일 중복확인')
        }
        setInputData({
            ...inputData,
            [name]: value,
        })
        if(inputData.password !== inputData.confirmPassword){
            setErrMsg({ ...errMsg, confirmPasswordErr: "비밀번호가 일치하지 않습니다." })
        } else {
            setErrMsg({ ...errMsg, confirmPasswordErr: "" })
        }
    }

    const handleEmailCofirm = () => {

        if (!expression.test(inputData.userEmail)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '이메일 형식이 올바르지 않습니다.',
                customClass: {
                    confirmButton: 'swal-confirm-button'
                }
            })
            setConfirmTime(Date.now() + 180000)
            return;
        }
        console.log("이메일 전송")
        if(inputData.userEmail === ""){
            Swal.fire({
                icon: 'error',
                text: '이메일을 입력해주세요.',
                customClass: {
                    confirmButton: 'swal-confirm-button'
                }
            })
            return;
        }

        axios.post('http://10.10.10.196:8080/api/v1/email/confirm', {
            userEmail: inputData.userEmail,
        })
            .then((res) => {
                if (res.data === true) {
                    setConfirmView(true)
                    setDuplicateView(true)
                    setErrMsg({ ...errMsg, emailErr: ""});
                    Swal.fire({
                        icon: 'success',
                        text: `인증번호가 ${inputData.userEmail}로 전송되었습니다.`,
                        customClass: {
                            confirmButton: 'swal-confirm-button'
                        }
                    })
                    setConfirmTime(Date.now() + 180000)
                } else if (res.data === false) {
                    setConfirmView(false)
                    setDuplicateView(false)
                    setInputData({
                        ...inputData,
                        userEmail: "",
                    })
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: '이미 가입되어 있는 이메일입니다.',
                        customClass: {
                            confirmButton: 'swal-confirm-button'
                        }
                    })
                    setErrMsg({ ...errMsg, emailErr: ""});
                    return;
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }
    const handleConfirmKey = () => {
        console.log(confirmKey)
        //서버에 키값 확인
        axios.post('http://10.10.10.196:8080/api/v1/email/checkcode', {
            userEmail: inputData.userEmail,
            confirmKey: inputData.confirmKey
        })
            .then((res) => {
                console.log(res)
                // 키값이 일치하면 인증완료
                setInputData({
                    ...inputData,
                    isUserConfirm: true,
                });
                setErrMsg({ ...errMsg, confirmKeyErr: ""})
                Swal.fire({
                    icon: 'success',
                    text: '인증 완료되었습니다.',
                    customClass: {
                        confirmButton: 'swal-confirm-button'
                    }
                })
            })
            .catch((err) => {
                console.log(err)
                setErrMsg({ ...errMsg, confirmKeyErr: "인증번호가 일치하지 않습니다." })
                setConfirmKey("")
            })
    }
    // const handlenickname = () => {
    //     console.log("닉네임 전송")
    //     axios.post('url', {
    //         userNickname: inputData.userNickname,
    //     })
    //         .then((res) => {
    //             console.log(res)
    //             alert('사용 가능합니다.')
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //             alert('중복되는 닉네임 입니다.')
    //         })
    // }

    return (
        <>
            <div className="Information-box">
                <div className="signup-info-box">
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
                            className={inputData.isUserConfirm ? "isDisable" : ""}
                            disabled={inputData.isUserConfirm}
                        />
                        <button type="button" onClick={handleEmailCofirm} className={inputData.isUserConfirm ? "isDisable" : ""}>이메일인증</button>
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
                                    className={inputData.isUserConfirm ? "isDisable" : ""}
                                    disabled={inputData.isUserConfirm}
                                />
                                <button type="button" onClick={handleConfirmKey} className={inputData.isUserConfirm ? "isDisable" : ""}>인증하기</button>
                            </div>
                            <div className="confirm-countdown-box">
                                <div className="countdown-box">
                                    {!inputData.isUserConfirm ? (
                                        <Countdown date={confirmTime} renderer={renderer} />
                                    ) : ""}
                                </div>
                                <div className="confirm-error-box">
                                    <p>{errMsg.confirmKeyErr}</p>
                                </div>
                            </div>
                        </div>
                    }
                    <div className="password-box">
                        <p>비밀번호 : </p>
                        <input
                            type="password"
                            name="password"
                            placeholder='최대 20문자까지 입력'
                            onChange={handleChange}
                        />
                    </div>
                    <div className="password-error-box">
                        <p>{errMsg.passwordErr}</p>
                    </div>
                    <div className="confirmPassword-box">
                        <p>비밀번호 확인 : </p>
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder='비밀번호 재입력'
                            onChange={handleChange}
                        />
                    </div>
                    <div className="confirmPassword-error-box">
                        <p>{errMsg.confirmPasswordErr}</p>
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
                        {/* <button type="button" onClick={handlenickname}>닉네임 확인</button> */}
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