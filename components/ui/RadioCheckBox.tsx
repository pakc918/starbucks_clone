import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export interface handleInput {
    (e: React.ChangeEvent<HTMLInputElement>): void;
}

export default function RadioCheckBox(
    props: {
        lableText: string,
        inputName: string,
        value?: boolean,
        handler?: handleInput,
    }) {
    return (
        <div className="signup-policy-bottom">
            <div className="signup-policy-bottom-list">
                <div className="signup-policy-bottom-list-subject">
                    <input
                        type="checkbox"
                        id="tos-agree"
                        name={props.inputName}
                        onChange={props.handler && props.handler}
                        checked={props.value && props.value}
                    />
                    <p>{props.lableText}</p>
                </div>
            </div>
        </div>
    )
}
