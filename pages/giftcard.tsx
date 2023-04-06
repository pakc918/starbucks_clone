import FooterButton from '@/components/footer/FooterButton'
import ModalHeader from '@/components/header/ModalTopHeader'
import Image from 'next/image'
import React from 'react'

export default function giftcard() {
    return (
        <>
            <ModalHeader subject='모바일 상품권'/>
            <section id="top">
                <div className="e-gift-box">
                    <span>e-Gift Item</span>
                </div>
                <div className="e-gift-box-item">
                    <span>사용 가능한 선물이 없습니다.</span>
                </div>
            </section>
            <section id="middle">
                <div className="e-gift-box2">
                    <div className="e-gift-in-box"><span>제휴사 쿠폰</span></div>
                    <nav>
                        <ul>
                            <li>
                                <Image
                                    src="/assets/images/icons/GreenPlus.png"
                                    width={20}
                                    height={20}
                                    alt= "GreenPlus"
                                />
                            </li>
                            <li>추가</li>
                        </ul>
                    </nav>
                </div>
                <div className="e-gift-box-item2">
                    <span>사용 가능한 선물이 없습니다.</span>
                </div>
            </section>
            <section id="bottom">
                <div className="payment">
                    <div className="payment-price-box">
                        <div className="payment-price1"><span>선물 사용 금액</span></div>
                        <div className="payment-price2"><span>0원</span></div>
                    </div>
                    <div className="payment-price-box">
                        <div className="payment-price1"><span >남은 결제 금액</span></div>
                        <div className="payment-price2"><span>25,000원</span></div>
                    </div>
                </div>
                <div className="payment-information">
                    <div className="payment-information-box">
                        <p>남은 결제 금액보다 금액이 같거나 작은 선물만 사용 가능하며, 유효기간이 임박한(14일 이내) 선물은 온라인 스토어에서 사용할 수 없습니다.</p>
                        <p>적용하지 않은 제휴사 쿠폰은 별도 저장되지 않으며, 추후 다시 가져오거나 매장에서 사용할 수 있습니다.</p>
                        <p>제휴사 쿠폰은 한 번에 최대 3개까지 사용이 가능합니다.</p>
                    </div>
                </div>
                <div className="refund-box">
                    <div className="refund">
                        <input className="giftcard-checkbox" type="checkbox" />
                        <p>모바일 상품권 환불 정책에 동의합니다.</p>
                    </div>
                </div>
                <div className="cancel-refund">
                    <p>•구매자의 사유로 주문 취소 및 반품 시 결제에 사용된 모바일 상품권은 유효기간 경과 여부와 무관하게 사용 취소 처리되며, 여러 개의 모바일 상품권이 사용된 경우 유효기간이 긴 순 {'>'} 선물 사용 금액기 적은 순 {'>'} 사용 순서의 역 순에 따라 모바일 상품권을 사용 취소합니다.</p>
                    <p>•모바일 상품권 사용 금액과 환불 금액이 상이하여 모바일 상품권의 부분 사용 및 부분 취소가 필요한 경우, 모바일 상푼권의 부분 사용은 불가하므로 해당 모바일 상품권은 사용 처리 후 부분 환불이 필요한 금액만큼 스타벅스 카드/e-Gift Card에 충전하여 환불합니다.</p>
                    <p>•판매자의 사유로 주문 취소 및 반품 시 당일 취소의 경우 사용한 모바일 상품권이 사용 취소되며, 익일 이후 취소 시 스타벅스에서 사용 가능한 스타벅스 카드/e-Gift-Card에 환불금액을 충전하여 환불합니다.</p>
                    <p>•스타벅스 리워드 회원의 경우 회원가입시 입력하신 고객님의 휴대 전화 번호로 e-Gift Card가 문자 발송됩니다. (스타벅스 애플리케이션{'>'}Other{'>'}개인 정보 관리에서 전화번호 확인 및 수정이 가능합니다.)</p>
                    <p>•음료 가격인상 전 발행된 상품권을 사용 후 취소/반품 시, 사유 발생 주체와 무관하게 선물 사용 금액 기준으로 사용 취소/환불됩니다.</p>
                </div>
            </section>
            <FooterButton inputvalue='확인'/>
        </>
    )
}
