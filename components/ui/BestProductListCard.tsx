import Config from '@/configs/config.export';
import { eventProductType } from '@/types/fetchDataType';
import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

export default function BestProductListCard(props: { categoryLarge: string }) {

    const { baseUrl } = Config()
    const [productData, setProductData] = useState<eventProductType[]>()

    useEffect(() => {
        axios.get(`${baseUrl}/api/v1/product/get?categoryLarge=${props.categoryLarge}&sort=추천순`)
            .then(res => res.data.data)
            .then(data => setProductData(data))
    }, [props.categoryLarge, baseUrl])

    console.log('123', productData)

    return (
        <>
            {productData && productData.map((res,index) =>
                <div className="searchresult-product-item" key={res.id}>
                    <p className="count">{index+1}</p>
                    <div className="searchresult-product-item__img">
                        <Image src={res.titleImg} alt={res.description} width={170} height={170}/>
                    </div>
                    <div className="recommand-product-item__info">
                        {res.isNew ? <p className="item-new">new</p> : null}
                        <p className="item-title">{res.name}</p>
                        <p className="item-price">{res.price}원</p>
                    </div>
                </div>
            )}
        </>
    )
}
