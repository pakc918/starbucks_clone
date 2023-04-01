import React, { useEffect, useState } from 'react'
import ItemButton from '../ui/ItemButton'


export default function ItemNoticeWidget() {

    // const [isuseopen, setIsUseOpen] = useState<boolean>(false)
    // const [isinfoopen, setIsInfoOpen] = useState<boolean>(false)
    // const [ischangeopen, setIsChangeOpen] = useState<boolean>(false)
    // const [iscancelopen, setIsCancelOpen] = useState<boolean>(false)

    return (
        <>
            <section className='item_notice'>
                <ItemButton title='이용조건 및 배송 안내' />
                <ItemButton title='상품제공정보고시' />
                <ItemButton title='교환/반품 안내' />
                <ItemButton title='취소/환불 안내' />
            </section>
        </>
    )
}
