import React, { useState } from 'react'
import styled from 'styled-components'
import myStyle from '@/components/footer/FooterTeacherButton.module.css'

const OrderToggleButton = styled.div`
width: 30px;
height: 5px;
border-radius: 5px;
background-color: rgba(0, 0, 0, 0.2);
margin:auto;
margin-bottom: 1rem;
`

const OrderButton = styled.div`
width: 100%;
border-radius: 30px;
background-color: rgb(0,155,57);
color: white;
font-size: 1.4rem;
font-weight: 600;
padding: 8px 0;
text-align: center;
`
const OrderInfoSection = styled.div`
width: 100%;
height: 300px;
background-color: red;
`


export default function FooterTeacherButton() {

    const [isOrder, setIsOrder] = useState<boolean>(false)

    const handleOpen = () => {
        setIsOrder(!isOrder)
    }
    return (
        <div className={myStyle.productOrderSection}>
            <OrderToggleButton />
            {isOrder && <OrderInfoSection />}
            <OrderButton onClick={handleOpen}>구매하기</OrderButton>
        </div>
    )
}
