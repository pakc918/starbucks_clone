import React, { useState } from 'react'

export default function Accordion(props:{title:string, content:string}) {

    const [isShowing, setIsShowing] = useState(false);

    const toggle = () => {
        setIsShowing(!isShowing);
    };
    return (
        <div
            style={{
                width: "100%",
                marginBottom: "15px",
                lineHeight: "15px",
                border: "1px solid rgba(209, 213, 219, 0.5)"
            }}
        >
            <button
                style={{
                    width: "100%",
                    position: "relative",
                    textAlign: "left",
                    padding: "4px",
                    border: "none",
                    background: "transparent",
                    outline: "none",
                    cursor: "pointer"
                }}
                onClick={toggle}
                type="button"
            >
                <p>{props.title}</p>
            </button>
            <div
                style={{ display: isShowing ? "block" : "none", padding: "5px" }}
                dangerouslySetInnerHTML={{
                    __html: props.content
                }}
            />
        </div>
    )
}
