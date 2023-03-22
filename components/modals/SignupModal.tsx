import { inputRegisterType } from '@/types/UserInformation/Information';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import Head from 'next/head';

import Swal from 'sweetalert2';
import Step01 from '../page/signup/step01';
import Step02 from '../page/signup/step02';
import Step03 from '../page/signup/step03';
import Step04 from '../page/signup/step04';
import StButton from '../ui/StButton';
import axios from 'axios';


export interface SignupModalProps {
  isSignupModalOpen: boolean;
  setIsSignupModalOpen: Dispatch<SetStateAction<boolean>>;
}

export default function SignupModal({ isSignupModalOpen, setIsSignupModalOpen }: SignupModalProps) {

  const [stepId, setStepId] = useState<number>(1)
  const [inputData, setInputData] = useState<inputRegisterType>({
    userEmail: '',
    userName: '',
    userNickname: '',
    birthday: new Date(),
    password: '',
    confirmPassword: '',
    phone: '',
    isUserConfirm: false,
    privateAgree: {
      isAgree: false,
      isUseConfirm: false,
      isAdvertisionConfirm: false,
    },
    confirmKey: ''
  })

  const steps: any = [
    { 1: <Step01 inputData={inputData} setInputData={setInputData} /> },
    { 2: <Step02 inputData={inputData} setInputData={setInputData} /> },
    { 3: <Step03 inputData={inputData} setInputData={setInputData} /> },
    { 4: <Step04 inputData={inputData} setInputData={setInputData} /> },
  ]

  useEffect(() => {
    console.log(inputData)
  }, [inputData])

  const handleStepNext = () => {
    console.log(inputData.privateAgree)
    if (stepId === 1 && inputData.privateAgree) {
      if (!inputData.privateAgree.isAgree || !inputData.privateAgree.isUseConfirm) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: '필수 항목을 동의 해주세요.',
          customClass: {
            confirmButton: 'swal-confirm-button'
          }
        })
        return
      }
      setStepId(stepId + 1)
    } else if (stepId === 2) {
        if (inputData.userName === '') {
          alert('이름을 입력해주세요.')
          return;
        } else if (inputData.phone === '') {
          alert('전화번호를 입력해주세요.')
          return;
        } else if (inputData.userEmail === '') {
          alert('이메일을 입력해주세요.')
          return;
        } else if (inputData.password === '') {
          alert('바말번호를 입력해주세요.')
          return;
        } else if (inputData.confirmPassword === '') {
          alert('비밀번호를 한번 더 입력해주세요.')
          return;
        } else if (inputData.userNickname === '') {
          alert('닉네임을 입력해주세요.')
          return;
        } else if (inputData.password !== inputData.confirmPassword) {
          alert('비밀번호가 동일하지 않습니다.')
          return;
        } else if (inputData.confirmKey === "") {
          alert('이메일 인증이 필요합니다.')
          return;
        } else {
          axios.post('http://10.10.10.39:8080/api/v1/auth/signup', {
            userName: inputData.userName,
            userphone: inputData.phone,
            userEmail: inputData.userEmail,
            password: inputData.password,
            userNickname: inputData.userNickname,
          })
            .then((res) => {
              console.log(res)
              setStepId(stepId + 1)
            })
            .catch((err) => {
                console.log(err)
                alert('이미 가입되어 있는 회원 정보입니다.')
            })
          return;
        }
    }
  }

  if (!isSignupModalOpen) return null;

  return (
    <div className="signupmodalBox">
      <header className="signup-header">
        <div className="signup-header-cancel" onClick={() => setIsSignupModalOpen(false)}>
          <img src="https://cdn-icons-png.flaticon.com/512/864/864393.png" />
        </div>
      </header>
      {steps[stepId - 1][stepId]}
      <section className='submit-container'>
        <StButton
          buttontext='Next'
          textsize='1.1rem'
          handler={handleStepNext}
        />
      </section>
    </div>
  )
}