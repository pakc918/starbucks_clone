import Link from 'next/link'
import React from 'react'

export default function CartHeader() {
    return (
        <header className="cart-header">
            <div className="header-top">
                <div className="menu-icon">
                    <Link href="menu"><img src="https://cdn-icons-png.flaticon.com/128/9121/9121686.png" alt="" /></Link>
                </div>
                <h1><Link href="index">온라인 스토어</Link></h1>
                <div className="right-menu-icon">
                    <Link href=""><img src="https://cdn-icons-png.flaticon.com/512/864/864393.png" /></Link>
                </div>
            </div>
            {/* <div className="header-bottom">
                <div className="header-bottom-subject">
                    <p>장바구니</p>
                </div>
                <div className="header-bottom-check">
                    <div className="header-bottom-check-left">
                        <input type="checkbox" id="menu-cb" /><span>전체 선택</span>
                    </div>
                    <div className="header-bottom-check-right">
                        <span>선택삭제</span> <span>|</span> <span>전체삭제</span>
                    </div>
                </div>
            </div> */}
        </header>
    )
}
