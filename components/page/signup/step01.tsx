import { inputRegisterType, privateAgreeType } from '@/types/UserInformation/Information'
import React, { useEffect, useState } from 'react'
import TotalCheckBox from '@/components/ui/TotalCheckBox'
import CheckBox from '@/components/ui/CheckBox'
import Signup from '@/pages/Signup'
import StButton from '@/components/ui/StButton'

interface ChildProps {
    inputData: inputRegisterType;
    setInputData: React.Dispatch<React.SetStateAction<inputRegisterType>>
}

const Step01 = ({ inputData, setInputData }: ChildProps) => {

    const [agreeArray, setAgreeArray] = useState<privateAgreeType>({} as privateAgreeType)
    const [addOption, setAddOption] = useState<object>([
        { id: 1, name: 'E-mail', checked: false },
        { id: 2, name: 'SNS', checked: false },
    ])

    useEffect(() => {
        setInputData({ ...inputData, privateAgree: agreeArray })
    }, [agreeArray])

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        if (name === 'isAllAgree') {
            setAgreeArray({
                isAgree: checked,
                isUseConfirm: checked,
                isAdvertisionConfirm: checked
            })
        }
        else {
            setAgreeArray({
                ...agreeArray,
                [name]: checked
            })
        }
    }

    return (
        <>
            <div className="container">
                <section className="signup-logo">
                    <img src="https://www.starbucks.co.kr/common/img/common/logo.png" />
                </section>

                <section className="signup-notice">
                    <p className="customer">고객님</p>
                    <p className="welcome">환영합니다!</p>
                </section>

                <section className="signup-policy">
                    <TotalCheckBox
                        lableText='약관 전체 동의'
                        inputName='isAllAgree'
                        handler={handleInput}
                    />
                    <CheckBox
                        lableText='이용약관 동의(필수)'
                        isArrow={true}
                        inputName='isAgree'
                        link='/best'
                        handler={handleInput}
                        value={agreeArray.isAgree}
                    />
                    <CheckBox
                        lableText='개인정보 수집 및 이용동의(필수)'
                        isArrow={true}
                        inputName='isUseConfirm'
                        link='/best'
                        handler={handleInput}
                        value={agreeArray.isUseConfirm}
                    />
                    <CheckBox
                        lableText='광고성 정보 수신동의(선택)'
                        isArrow={true}
                        inputName='isAdvertisionConfirm'
                        link='/best'
                        handler={handleInput}
                        value={agreeArray.isAdvertisionConfirm}
                    />
                    <div className="signup-policy-bottom-method">
                        <div className="signup-policy-bottom-method-category">
                            <input type="checkbox" id="E-mail" />
                            <p>E-mail</p>
                            <input type="checkbox" />
                            <p>SMS</p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Step01