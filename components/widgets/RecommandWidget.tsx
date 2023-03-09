import React, { useEffect, useState } from 'react'
import ProductListCard from '../ui/ProductListCard'
import TagListCard from '../ui/TagListCard'
import { eventProductListType } from '@/types/fetchDataType'
import { tagListCardType } from '@/types/fetchDataType'

export default function RecommandWidget(props: { title: string, eventId: number }) {

    const [eventItemList, setEventItemList] = useState<eventProductListType[]>()
    useEffect(() => {
        fetch(`http://10.10.10.42:3001/event-product-list?eventId=${props.eventId}`)
            .then(res => res.json())
            .then(data => setEventItemList(data))
    }, [])

    const [eventTagItemList, setEventTagItemList] = useState<tagListCardType[]>()
    useEffect(() => {
        fetch(`http://10.10.10.42:3001/event-tag-list?eventId=${props.eventId}`)
            .then(res => res.json())
            .then(data => setEventTagItemList(data))
    }, [])
    return (
        <section id="recommand-md">
            <div className="recommand-md-products">
                <h2>{props.title}</h2>
                <div className="recommand-product-list3">
                    {
                        eventTagItemList && eventTagItemList.map(item => (
                            <TagListCard
                                key={item.id}
                                tagId={item.tagId}
                            />
                        ))
                    }
                </div>
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
