import React from 'react'

export default function ModalHeader(props:{subject:string}) {
  return (
    <header>
        <div className='modal-header-top'>
            <span>{props.subject}</span>
            <a href="/"><img src="assets/images/icons/close.png" alt="끄기" /></a>
        </div>
    </header>
    )
}
