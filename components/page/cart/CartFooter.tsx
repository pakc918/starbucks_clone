import React from 'react'

export default function CartFooter() {
    return (
        <footer className="cart-footer">
            <div className="submit-box">
                <div className="cart-footer-top">
                    <p className="cart-footer-top-left">총 <span className="cart-footer-top-count"> 2</span>건 / 20건</p>
                    <p className="cart-footer-top-right"><span className="cart-footer-top-total">77,900</span>원</p>
                </div>
                <div className="cart-footer-bot">
                    <div className="cart-gift">
                        <p>선물하기</p>
                    </div>
                    <div className="cart-buy">
                        <a href="buypage.html"><p>구매하기</p></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
