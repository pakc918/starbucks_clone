import { inputRegisterType, privateAgreeType } from '@/types/UserInformation/Information'
import React, { useEffect, useState, useCallback } from 'react'
import TotalCheckBox from '@/components/ui/TotalCheckBox'
import CheckBox from '@/components/ui/CheckBox'
import RadioCheckBox from '@/components/ui/RadioCheckBox'
import StButton from '@/components/ui/StButton'
import Image from 'next/image'
import Agreement from '@/pages/agreement'

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

    const handleInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        if (name === 'isAllAgree') {
            setAgreeArray({
                isAgree: checked,
                isUseConfirm: checked,
                isAdvertisionConfirm: checked,
                isEmail:checked,
                isSns: checked,
            })
        }
        else {
            setAgreeArray({
                ...agreeArray,
                [name]: checked
            })
        }
    }, [agreeArray])

    useEffect(() => {
        setInputData((prevInputData) => ({ ...prevInputData, privateAgree: agreeArray }))
    }, [agreeArray, setInputData])

    return (
        <>
            <div className="container">
                <section className="signup-logo">
                    <Image
                        src="https://www.starbucks.co.kr/common/img/common/logo.png"
                        width={70}
                        height={70}
                        alt= "logo"
                    />
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
                        link='/agreement'
                        handler={handleInput}
                        value={agreeArray.isAgree}
                    />
                    <CheckBox
                        lableText='개인정보 수집 및 이용동의(필수)'
                        isArrow={true}
                        inputName='isUseConfirm'
                        link='/agreementtwo'
                        handler={handleInput}
                        value={agreeArray.isUseConfirm}
                    />
                    <RadioCheckBox
                        lableText='광고성 정보 수신동의(선택)'
                        inputName='isAdvertisionConfirm'
                        handler={handleInput}
                        value={agreeArray.isAdvertisionConfirm}
                    />
                    <p className="font">다양한 프로모션 소식 및 신규 매장 정보를 보내드립니다.</p>
                    <div className="signup-policy-bottom-method">
                        <div className="signup-policy-bottom-method-category">
                            <RadioCheckBox
                                lableText='E-mail'
                                inputName='isEmail'
                                handler={handleInput}
                                value={agreeArray.isEmail}
                            />
                            <RadioCheckBox
                                lableText='SNS'
                                inputName='isSns'
                                handler={handleInput}
                                value={agreeArray.isSns}
                            />
                            
                            {/* <input type="checkbox" id="E-mail" />
                            <p>E-mail</p>
                            <input type="checkbox" />
                            <p>SMS</p> */}
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Step01