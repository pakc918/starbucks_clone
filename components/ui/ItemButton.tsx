import Image from 'next/image'
import React, { useState } from 'react'

export function Modal(){
    const [modalCheck, setModalCheck]=useState<boolean>(false)
    const modalhandle = () =>{
        setModalCheck(!modalCheck)
    }
}
export default function ItemButton(props: { title: string}) {

    return (
        <>
        <button>
            <p>{props.title}</p>
            <Image
                src="/assets/images/icons/right-arrow-black.png"
                width={20}
                height={20}
                alt= "right-arrow-black"
            />
        </button>
        </>
    )
}
