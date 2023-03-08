import React, { useEffect, useState } from 'react'
import ProductListCard from '../ui/productListCard'
import { eventProductListType } from '@/types/fetchDataType'

export default function RecommandWidget(props: { title: string, eventId: number }) {

    const [eventItemList, setEventItemList] = React.useState<eventProductListType[]>()
    useEffect(() => {
        fetch(`http://localhost:3001/evnet-product-list?eventId=${props.eventId}`)
        .then(res => res.json())
        .then(data => setEventItemList(data))
    }, [])

    return (
        <section id="recommand-md">
            <div className="recommand-md-products">
                <h2>{props.title}</h2>
                <div className="recommand-product-list">
                    {
                        eventItemList && eventItemList.map( item => (
                            <ProductListCard
                            key={item.id}
                            productId = {item.productId}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
