import { ProductListCardType } from '@/types/fetchDataType'
import React, { useEffect, useState } from 'react'

export default function ProductListCard(props: { productId: number }) {
    const [productData, setProductData] = useState<ProductListCardType>()

    useEffect(() => {
        fetch(`http://localhost:3001/products/${props.productId}`)
            .then(res => res.json())
            .then(data => setProductData(data))
    }, [props.productId])

    return (
        <>
            {
                productData &&
                <div className="recommand-product-item">
                    <div className="recommand-product-item__img">
                        <img src={productData.imgUrl} alt={productData.title} />
                    </div>
                    <div className="recommand-product-item__info">
                        {productData.isNew ? <p className="item-new">New</p> : null}
                        <p className="item-title">{productData.title}</p>
                        <p className="item-price"><span>{productData.price}</span>원</p>
                    </div>
                </div>
            }
        </>
    )
}
