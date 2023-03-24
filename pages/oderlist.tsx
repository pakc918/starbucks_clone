import ModalBotHeader from '@/components/header/ModalBotHeader'
import CartHeader from '@/components/page/cart/CartHeader'
import Accordion from '@/components/widgets/Accordion'
import { ProductListCardType } from '@/types/fetchDataType'
import React, { useEffect, useState } from 'react'

export default function oderlist() {
    const [productData, setProductData] = useState<ProductListCardType>()

    useEffect(() => {
        fetch(`http://localhost:3001/products/1`)
            .then(res => res.json())
            .then(data => setProductData(data))
    }, [])

    console.log('데이터',productData?.id)

    return (
        <>
            <ModalBotHeader subject='주문 내역' />
            <Accordion title="전체" content="this is content 1" />
        </>
    )
}
