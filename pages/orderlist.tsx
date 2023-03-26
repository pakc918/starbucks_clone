import ModalBotHeader from '@/components/header/ModalBotHeader'
import Accordion from '@/components/widgets/Accordion'
import { ProductListCardType } from '@/types/fetchDataType'
import React, { useEffect, useState } from 'react'

export default function orderlist() {

    const [data, setdata] = useState<boolean>(false);
    return (
        <>
            <ModalBotHeader subject='주문 내역' />
            <Accordion setdata = {setdata} />
            
            <div style = {{
                backgroundColor: data ? 'lightgray' : 'white',
                height:'100vh',
                width:'100%',
            }}>
                <p>주문내역이 없습니다</p>
            </div>
            
        </>
    )
}
