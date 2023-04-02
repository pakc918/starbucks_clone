import React from "react";

export interface handler {
    () : void
}

export default function StButton(props: { buttontext: string, textsize: string, handler?: handler}) {
    return (
        <button onClick={props.handler} style={{fontSize: props.textsize}}>{props.buttontext}</button>
    )
}