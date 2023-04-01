import Link from 'next/link'
import React from 'react'

export default function LoginFooterButton(props:{inputvalue:string}) {
    return (
        <section id="footer-button">
            <div className="footer-btn-bg">
                <div className="footer-btn-mini">
                    <input type="button" value={props.inputvalue} />
                </div>
            </div>
        </section>
    )
}
