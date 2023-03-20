import { inputRegisterType } from '@/types/UserInformation/Information'
import React from 'react'

interface ChildProps {
    inputData: inputRegisterType;
    setInputData: React.Dispatch<React.SetStateAction<inputRegisterType>>
}

const Step04 = ({ inputData, setInputData }: ChildProps) => {
    return (
        <div>step04</div>
    )
}

export default Step04;