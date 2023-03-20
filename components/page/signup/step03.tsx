import { inputRegisterType } from '@/types/UserInformation/Information'
import React from 'react'

interface ChildProps {
    inputData: inputRegisterType;
    setInputData: React.Dispatch<React.SetStateAction<inputRegisterType>>
}

const Step03 = ({ inputData, setInputData }: ChildProps) => {
    return (
        <div>step03</div>
    )
}

export default Step03;