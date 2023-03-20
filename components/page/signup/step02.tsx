import { inputRegisterType } from '@/types/UserInformation/Information'
import React from 'react'

interface ChildProps {
    inputData: inputRegisterType;
    setInputData: React.Dispatch<React.SetStateAction<inputRegisterType>>
}

const Step02 = ({ inputData, setInputData }: ChildProps) => {
    return (
        <div>step02</div>
    )
}

export default Step02;