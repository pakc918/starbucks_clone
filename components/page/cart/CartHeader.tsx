import React from 'react'

export default function CartHeader() {
    return (
        <header className="cart-header">
            <div className="header-top">
                <div className="menu-icon">
                    <a href="menu.html"><img src="https://cdn-icons-png.flaticon.com/128/9121/9121686.png" alt="" /></a>
                </div>
                <h1><a href="index.html">온라인 스토어</a></h1>
                <div className="right-menu-icon">
                    <a href=""><img src="https://cdn-icons-png.flaticon.com/512/864/864393.png" /></a>
                </div>
            </div>
            <div className="header-bottom">
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
            </div>
        </header>
    )
}
