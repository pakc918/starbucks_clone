import React from 'react'

export default function CartInfo(props:{price:number, count:number}) {
    let ship = 0
    if(props.price < 30000){
        ship = 3000
    }
    return (
        <>
        
        <section className="cart-result">
                <div className="cart-result-detail">
                    <p className="cart-result-detail-price">상품 {props.count}건 {(props.price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원 + 배송비 {(ship).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원 = 총 {(props.price + ship).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</p>
                    {
                        ship === 0 ? <p className="cart-result-detail-tax">무료배송</p> : ''
                    }
                    
                </div>
                <a href="">
                    <p className="cart-result-detail-more">더 담으러 가기</p>
                </a>
            </section>
        </>
    )
}
