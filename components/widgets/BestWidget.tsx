import React, { useEffect, useState } from 'react'
import { bestProductListType } from '@/types/fetchDataType'
import ProductListCard from '../ui/ProductListCard'

export default function BestWidget(props: { bestId: number }) {

    const [bestItemList, setbestItemList] = useState<bestProductListType[]>()
    useEffect(() => {
        fetch(`http://localhost:3001/best-item-list?bestId=${props.bestId}`)
            .then(res => res.json())
            .then(data => setbestItemList(data))
    }, [props.bestId])

    return (
        <section className="best-product">
            <div className="best-product-list">
                <div className="product-item">
                    <div className="item_img">
                        {
                            bestItemList && bestItemList.map(item => (
                                <ProductListCard
                                    key={item.id}
                                    productId={item.productId}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
