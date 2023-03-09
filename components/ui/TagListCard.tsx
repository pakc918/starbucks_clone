import { tagListCardType } from '@/types/fetchDataType'
import React, { useEffect, useState } from 'react'

export default function productListCard(props: { tagId: number }) {
    const [tagData, setTagData] = useState<tagListCardType>()

    useEffect(() => {
        fetch(`http://10.10.10.42:3001/tags/${props.tagId}`)
            .then(res => res.json())
            .then(data => setTagData(data))
    }, [props.tagId])

    return (
        <>
            {
                tagData &&
                <div className="recommand-product-item2">
                    <div className="recommand-product-item__img">
                        <img src={tagData.imgUrl} alt={tagData.title} />
                    </div>
                    <div className="recommand-product-item__info">
                        <p className="item-title2">{tagData.title}</p>
                    </div>
                </div>
            }
        </>
    )
}