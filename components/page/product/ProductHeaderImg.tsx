import ImageSizeReturn from '@/components/ui/ImageSizeReturn'
import { eventProductType } from '@/types/fetchDataType'
import React from 'react'

export default function ProductHeaderImg(props:{productData: eventProductType}) {
  return (
    <section id="item-event-banner">
        <div className="event-banner">
            <div className="event-banner__item">
                <div className="event-banner__item__img">
                    <ImageSizeReturn imgUrl={props.productData.titleImg} imgAlt={props.productData.description} />
                </div>
            </div>
        </div>
    </section>
  )
}
