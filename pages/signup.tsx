import { inputRegisterType } from '@/types/UserInformation/Information';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import Head from 'next/head';

import Swal from 'sweetalert2';
import Step01 from '@/components/page/signup/step01';
import Step02 from '@/components/page/signup/step02';
import Step03 from '@/components/page/signup/step03';
import StButton from '@/components/ui/StButton';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Config from '@/configs/config.export';
import Image from 'next/image';
import { useRecoilValue } from 'recoil';
import { userLoginState } from '@/state/user/atom/userLoginState';

export default function Signup() {

  const router = useRouter();
  const { baseUrl } = Config();
  const { isLogin } = useRecoilValue(userLoginState)


  if (isLogin) {
    router.push('/');

  }

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
    confirmKey: '',
  })

  const steps: any = [
    { 1: <Step01 inputData={inputData} setInputData={setInputData} /> },
    { 2: <Step02 inputData={inputData} setInputData={setInputData} /> },
    { 3: <Step03 /> },
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
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: '이름을 입력해주세요.',
          customClass: {
            confirmButton: 'swal-confirm-button'
          }
        })
        return;
      } else if (inputData.phone === '') {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: '전화번호를 입력해주세요.',
          customClass: {
            confirmButton: 'swal-confirm-button'
          }
        })
        return;
      } else if (!inputData.isUserConfirm) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: '이메일 중복 확인과 이메일 인증을 해주세요.',
          customClass: {
            confirmButton: 'swal-confirm-button'
          }
        })
        return;
      } else if (inputData.password === '') {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: '바말번호를 입력해주세요.',
          customClass: {
            confirmButton: 'swal-confirm-button'
          }
        })
        return;
      } else if (inputData.confirmPassword === '') {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: '비밀번호를 한번 더 입력해주세요.',
          customClass: {
            confirmButton: 'swal-confirm-button'
          }
        })
        return;
      } else if (inputData.userNickname === '') {
        Swal.fire({
          icon: 'warning',
          text: '닉네임을 입력하지 않았습니다. 닉네임을 입력 해주세요.',
          cancelButtonText: '닉네임 정하기',
          customClass: {
            cancelButton: 'swal-cancel-button'
          }
        })
      } else if (inputData.password !== inputData.confirmPassword) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: '비밀번호가 동일하지 않습니다.',
          customClass: {
            confirmButton: 'swal-confirm-button'
          }
        })
        return;
      } else {
        axios.post(`${baseUrl}/api/v1/users/signup`, {
          userName: inputData.userName,
          userphone: inputData.phone,
          userEmail: inputData.userEmail,
          password: inputData.password,
          userNickname: inputData.userNickname,
        })
          .then((res) => {
            if (inputData.userNickname) {
              Swal.fire({
                icon: 'warning',
                text: `닉네임을 ${inputData.userNickname}으로 정하시겠습니까?`,
                cancelButtonText: '다시 정하기',
                showCancelButton: true,
                customClass: {
                  confirmButton: 'swal-confirm-button',
                  cancelButton: 'swal-cancel-button'
                }
              }).then(function () {
                setStepId(stepId + 1)
              })
              return;
            }
          })
          .catch((err) => {
            console.log(err)
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: '이미 가입되어 있는 회원 정보입니다.',
              customClass: {
                confirmButton: 'swal-confirm-button'
              }
            })
          })
        return;
      }
    } else if (stepId === 3) {
      router.push("/login");
      return;
    }
  }

  return (
    <div className="signupmodalBox">
      <header className="signup-header">
        <div className="signup-header-cancel">
          <Link href={"/"}>
            <Image
              src="https://cdn-icons-png.flaticon.com/512/864/864393.png"
              width={20}
              height={20}
              alt="next"
            />
          </Link>
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