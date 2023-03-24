import React from 'react'

export default function ModalBotHeader(props: { subject: string }) {
    return (
        <>
            <div className="header-top">
            </div>
            <div className='modal-header-bottom'>
                <div className="header-bottom-subject">
                    <p>{props.subject}</p>
                </div>
            </div>
        </>
    )
}
