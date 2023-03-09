import { productListCardType } from '@/types/fetchDataType'
import React, { useEffect, useState } from 'react'

export default function productListCard(props: { productId: number }) {
    const [productData, setProductData] = useState<productListCardType>()

    useEffect(() => {
        fetch(`http://10.10.10.42:3001/products/${props.productId}`)
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
