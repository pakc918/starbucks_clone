import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export interface handleInput {
    (e: React.ChangeEvent<HTMLInputElement>): void;
}

export default function CheckBox(
    props: {
        lableText: string,
        isArrow: boolean,
        inputName: string,
        link: string,
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
                    <Link href={props.link && props.link}>
                        {
                            props.isArrow && 
                            <Image
                                src="/assets/images/icons/right-arrow-black.png"
                                width={20}
                                height={20}
                                alt= "right-arrow-black"
                                className="arrow"
                            />
                        }
                    </Link>
            </div>
        </div>
    )
}
