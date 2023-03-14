import Link from 'next/link'
import React from 'react'

export default function mypage() {
    return (
        <div className="container">
            <section className="tracking">
                <div className="tracking-subject">
                    <p className="subject">주문/배송 현황</p>
                    <p className="recent-3">최근 3개월 동안 구매한 상품</p>
                </div>
                <div className="tracking-step">
                    <div className="product-step">
                        <p className="product-count">0</p>
                        <p>상품준비중</p>
                    </div>
                    <img src="assets/images/icons/right-arrow.png" />
                    <div className="product-step">
                        <p className="product-count">0</p>
                        <p>배송준비중</p>
                    </div>
                    <img src="assets/images/icons/right-arrow.png" />
                    <div className="product-step">
                        <p className="product-count">0</p>
                        <p>배송중</p>
                    </div>
                    <img src="assets/images/icons/right-arrow.png" />
                    <div className="product-step">
                        <p className="product-count">0</p>
                        <p>배송완료</p>
                    </div>
                </div>
            </section>
            <section className="service-policy">
                <div className="service">
                    <p className="service-subject">서비스</p>
                    <div className="service-button">
                        <img src="assets/images/icons/order.png" />
                        <p>주문 내역</p>
                        <img src="assets/images/icons/right-arrow-black.png" />
                    </div>

                    <div className="service-button">
                        <img src="https://cdn-icons-png.flaticon.com/512/548/548427.png" />
                        <p>선물함</p>
                        <img src="assets/images/icons/right-arrow-black.png" />
                    </div>

                    <div className="service-button">
                        <img src="https://cdn-icons-png.flaticon.com/512/2438/2438167.png" />
                        <p>쿠폰</p>
                        <img src="assets/images/icons/right-arrow-black.png" />
                    </div>

                    <div className="service-button">
                        <img src="https://cdn-icons-png.flaticon.com/512/8866/8866851.png" />
                        <p>배송지관리</p>
                        <img src="assets/images/icons/right-arrow-black.png" />
                    </div>

                    <div className="service-button">
                        <img src="https://cdn-icons-png.flaticon.com/512/3602/3602145.png" />
                        <p>입고 알림 내역</p>
                        <img src="assets/images/icons/right-arrow-black.png" />
                    </div>
                </div>

                <div className="policy">
                    <p className="policy-subject">약관 및 정책</p>
                    <div className="service-button">
                        <img src="https://cdn-icons-png.flaticon.com/512/664/664477.png" />
                        <p>배송지 정보 수집 및 이용 동의</p>
                        <img src="assets/images/icons/right-arrow-black.png" />
                    </div>
                </div>
            </section>
        </div>
    )
}
