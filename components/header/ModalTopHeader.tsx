import React from 'react'

export default function ModalTopHeader(props: { subject: string }) {
    return (
        <header>
            <div className='modal-header-top'>
                <span>{props.subject}</span>
                <button><img src="assets/images/icons/close.png" alt="끄기" /></button>
            </div>
        </header>
    )
}
