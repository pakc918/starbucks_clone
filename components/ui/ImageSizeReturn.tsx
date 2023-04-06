import React, { useState } from 'react'
import Image from 'next/image'
import { getImageSize } from 'react-image-size'

export default function ImageSizeReturn(props: { imgUrl: string, imgAlt: string }) {
    const [size, setSize] = useState({ width: 0, height: 0 })

    getImageSize(props.imgUrl).then((size) => {
        setSize(size)
    })

    return (
        <Image src={props.imgUrl} width={size.width} height={size.height} alt={props.imgAlt} priority />
    )
}
