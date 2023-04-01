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
            <img src='assets/images/icons/right-arrow-black.png' style={{ width: '20px', height: '20px' }}></img>
        </button>
        </>
    )
}
