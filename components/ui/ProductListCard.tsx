import Config from '@/configs/config.export'
import { eventProductType } from '@/types/fetchDataType'
import axios from 'axios'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

export default function ProductListCard(props: { productId: number }) {

    const router = useRouter()
    const { baseUrl } = Config()

    const [productData, setProductData] = useState<eventProductType>()
    


    useEffect(() => {
        axios(`${baseUrl}/api/v1/product/get/${props.productId}`)
            .then(res => res.data)
            .then(data => setProductData(data.data))
    }, [props.productId, baseUrl])


    return (
        <>
            {
                productData && 
                <div onClick={()=>router.push(`/products/${productData.id}`)}className="recommand-product-item">
                    <div className="recommand-product-item__img">
                        <Image
                            src={productData.titleImg}
                            width={150}
                            height={150}
                            alt= {productData.description}
                        />
                    </div>
                    <div className="recommand-product-item__info">
                        <p className="item-title">{productData.name}</p>
                        <p className="item-price"><span>{productData.price}</span>원</p>
                    </div>
                </div>
            }
        </>
    )
}
