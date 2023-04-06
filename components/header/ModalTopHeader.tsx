import Image from 'next/image'
import React from 'react'

export default function ModalTopHeader(props: { subject: string }) {
    return (
        <header>
            <div className='modal-header-top'>
                <span>{props.subject}</span>
                <button>
                    <Image
                        src="/assets/images/icons/close.png"
                        width={20}
                        height={20}
                        alt= "close"
                    />
                </button>
            </div>
        </header>
    )
}
