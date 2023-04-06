import React from 'react'
import Image from 'next/image'
import { eventProductType } from '@/types/fetchDataType'

export default function ProductInfo(props: {productData: eventProductType}) {
  return (
    <section id="recommand-md">
        <div>
            <div className="item-info">
                <div>
                    <p className="item-info-1"><b>{props.productData.name} </b>
                        {
                            props.productData.isNew && <span className="item-new"> New</span>
                        }
                    </p>
                </div>
                <div>
                    <button className="openBtn">
                        <Image
                            src="/assets/images/icons/share.svg"
                            width={20}
                            height={20}
                            alt="share"
                        />
                    </button>
                </div>
            </div>
            <div>
                <p className="item-info-2">{props.productData.description}</p>
            </div>
            <div>
                <p className="item-info-1"><b>{props.productData.price}원</b></p>
            </div>
        </div>
    </section>
  )
}
