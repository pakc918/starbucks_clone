import React from 'react'

export default function FooterButton(props:{inputvalue:string}) {
    return (
        <section id="footer-button">
            <div className="footer-btn-bg">
                <div className="footer-btn-mini">
                    <a href="/"><input type="button" value={props.inputvalue} /></a>
                </div>
            </div>
        </section>
    )
}
