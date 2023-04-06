import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function CommonHeader(props:{subject:string}) {
    return (
        <header>
            <div className="header-top">
                <div className="menu-icon">
                    <Link href="menu">
                            <Image
                              src="https://cdn-icons-png.flaticon.com/128/9121/9121686.png"
                              width={20}
                              height={20}
                              alt= "left"
                            />
                        </Link>
                </div>
                <h1><Link href="index">온라인 스토어</Link></h1>
                <div className="right-menu-icon">
                    <Link href="">
                        <Image
                            src="https://cdn-icons-png.flaticon.com/512/864/864393.png"
                            width={20}
                            height={20}
                            alt= "close"
                        />
                    </Link>
                </div>
            </div>

            <div className='header-bottom'>
                <div className="header-bottom-subject">
                    <p>{props.subject}</p>
                </div>
            </div>
        </header>
    )
}
