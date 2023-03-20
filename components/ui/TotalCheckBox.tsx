import React from 'react'

export interface handleInput {
    ( e: React.ChangeEvent<HTMLInputElement> ): void;
}

export default function TotalCheckBox(
    props: {
        lableText: string,
        inputName: string,
        value?: boolean,
        handler?: handleInput,
    }) {
    return (
        <div className="signup-policy-top">
            <input
                type="checkbox"
                id="tos-agree"
                name={props.inputName}
                onChange={props.handler && props.handler}
                checked={props.value && props.value}
            />
            <p>{props.lableText}</p>
        </div>
    )
}
