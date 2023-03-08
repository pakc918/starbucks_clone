import React, { useEffect, useState } from 'react'
import ProductListCard from '../ui/ProductListCard'
import { eventProductListType } from '@/types/fetchDataType'

export default function RecommandWidget(props: { title: string, eventId: number }) {

    const [eventItemList, setEventItemList] = useState<eventProductListType[]>()
    useEffect(() => {
        fetch(`http://localhost:3001/event-product-list?eventId=${props.eventId}`)
            .then(res => res.json())
            .then(data => setEventItemList(data))
    }, [])

    return (
        <section id="recommand-md">
            <div className="recommand-md-products">
                <h2>{props.title}</h2>
                <div className="recommand-product-list">
                    {
                        eventItemList && eventItemList.map(item => (
                            <ProductListCard
                                key={item.id}
                                productId={item.productId}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
