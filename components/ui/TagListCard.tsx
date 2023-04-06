import { tagListCardType } from '@/types/fetchDataType'
import Image from 'next/image'
import router from 'next/router'
import React, { useEffect, useState } from 'react'

export default function ProductListCard(props: { tagId: number }) {
    const [tagData, setTagData] = useState<tagListCardType>()

    useEffect(() => {
        fetch(`http://localhost:3001/tags/${props.tagId}`)
            .then(res => res.json())
            .then(data => setTagData(data))
    }, [props.tagId])

    return (
        <>
            {
                tagData &&
                <div className="recommand-product-item2">
                    <div className="recommand-product-item__img">
                    <Image
                        src={tagData.imgUrl}
                        width={20}
                        height={20}
                        alt= {tagData.title}
                    />
                    </div>
                    <div className="recommand-product-item__info">
                        <p className="item-title2">{tagData.title}</p>
                    </div>
                </div>
            }
        </>
    )
}