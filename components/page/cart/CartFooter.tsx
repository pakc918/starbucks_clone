import buypage from '@/pages/buypage'
import giftcard from '@/pages/giftcard'
import Link from 'next/link'
import React, { useState } from 'react'

export default function CartFooter() {

    return (
        <footer className="cart-footer">
            <div className="submit-box">
                <div className="cart-footer-top">
                    <p className="cart-footer-top-left">총 <span className="cart-footer-top-count"> 2</span>건 / 20건</p>
                    <p className="cart-footer-top-right"><span className="cart-footer-top-total">77,900</span>원</p>
                </div>
                <div className="cart-footer-bot">
                    <button className="cart-gift"><Link href = 'giftcard'>선물하기 </Link></button>
                    <button className="cart-buy"><Link href = 'buypage'>구매하기</Link></button>
                </div>
            </div>
        </footer>
    )
}
