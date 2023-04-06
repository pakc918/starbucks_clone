import Link from 'next/link'
import React from 'react'


export default function CartFooter(props: { itemprice:number, frozenprice:number, itemcount:number }) {
    let shipPrice = 0
    if(props.itemprice < 30000 || props.frozenprice < 30000){
        shipPrice = 3000
    }
    
    return (
        <>
            <section id="total-cart-price">
                <div>
                    <div className="title-total-price">
                        총 주문 금액
                    </div>
                    <div className="prices">
                        <div className="cart-price">
                            <p>상품 금액</p>
                            <p className="price">{(props.itemprice + props.frozenprice).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</p>
                        </div>
                        <div className="cart-price">
                            <p>할인 금액</p>
                            <p className="price">0원</p>
                        </div>
                        <div className="cart-price">
                            <p>배송비</p>
                            <p className="price">{shipPrice}원</p>
                        </div>
                    </div>
                    <div className="total-price">
                        <p>최종 결제 금액</p>
                        <p className="price">{(props.itemprice + props.frozenprice + shipPrice).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</p>
                    </div>
                    <div className="notice">
                        <div className="notice-box">
                            장바구니에는 최대 20개까지 담을 수 있으며, 담긴 상품은 최대 2개월간 보관됩니다.<br />
                            가격, 옵션 등 정보가 변경된 경우 주문이 불가할 수 있습니다.
                        </div>
                    </div>
                </div>
            </section>

            <footer className="cart-footer">
                <div className="submit-box">
                    <div className="cart-footer-top">
                        <p className="cart-footer-top-left">총 <span className="cart-footer-top-count"> {props.itemcount}</span>건 / 20건</p>
                        <p className="cart-footer-top-right"><span className="cart-footer-top-total">{(props.itemprice + props.frozenprice + shipPrice).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>원</p>
                    </div>
                    <div className="cart-footer-bot">
                        <button className="cart-gift"><Link href='giftcard'>선물하기 </Link></button>
                        <button className="cart-buy"><Link href='buypage'>구매하기</Link></button>
                    </div>
                </div>
            </footer>


        </>
    )
}
