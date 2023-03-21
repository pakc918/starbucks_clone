import { inputRegisterType } from '@/types/UserInformation/Information';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import Head from 'next/head';

import Swal from 'sweetalert2';
import Step01 from '../page/signup/step01';
import Step02 from '../page/signup/step02';
import Step03 from '../page/signup/step03';
import Step04 from '../page/signup/step04';
import StButton from '../ui/StButton';


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
      isAdvertisionConfirm: false
    }
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
          buttontext = '다음'
          textsize = '1.1rem'
          handler = { handleStepNext }
        />
      </section>
    </div>
  )
}