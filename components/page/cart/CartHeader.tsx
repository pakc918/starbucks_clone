import Image from 'next/image'
import Link from 'next/link'
import router from 'next/router'
import React from 'react'

export default function CartHeader() {
    return (
        <header className="cart-header">
            <div className="header-top">
                <div className="menu-icon">
                    <div onClick={() => router.back()}>
                        <Image
                            src="https://cdn-icons-png.flaticon.com/128/9121/9121686.png"
                            width={20}
                            height={20}
                            alt="left"
                        />
                    </div>
                </div>
                <h1><Link href="/">온라인 스토어</Link></h1>
                <div className="right-menu-icon">
                    <Link href="/">
                        <Image
                            src="https://cdn-icons-png.flaticon.com/512/864/864393.png"
                            width={20}
                            height={20}
                            alt="close"
                        />
                    </Link>
                </div>
            </div>
                <div className="header-bottom-subject">
                    <p>장바구니</p>
                </div>
            
        </header>
    )
}
