import Link from 'next/link';
import React, { useEffect } from 'react'
import Image from 'next/image';
import router from 'next/router';
import { useRecoilValue } from 'recoil';
import { userLoginState } from '@/state/user/atom/userLoginState';
import Swal from 'sweetalert2';

export default function Mypage() {
    
    const {isLogin} = useRecoilValue(userLoginState);
    
    useEffect(() => {
        if (!isLogin) {
            Swal.fire({
                icon: 'error',
                text: '로그인이 필요한 서비스 입니다.',
                customClass: {
                    confirmButton: 'swal-confirm-button'
                }
            }).then(
                res => res.isConfirmed && router.push('/login')
            )
            return;
        }
    }, [isLogin])


    return (
        <div className="container">
            <section className="tracking">
                <div className="tracking-subject">
                    <p className="subject">주문/배송 현황</p>
                    <p className="recent-3">최근 3개월 동안 구매한 상품</p>
                </div>
                <Link href={'/orderlist'}>
                    <div className="tracking-step">
                        <div className="product-step">
                            <p className="product-count">0</p>
                            <p>상품준비중</p>
                        </div>
                        <Image
                            src="/assets/images/icons/right-arrow.png"
                            width={20}
                            height={20}
                            alt="right-arrow"
                        />
                        <div className="product-step">
                            <p className="product-count">0</p>
                            <p>배송준비중</p>
                        </div>
                        <Image
                            src="/assets/images/icons/right-arrow.png"
                            width={20}
                            height={20}
                            alt="right-arrow"
                        />
                        <div className="product-step">
                            <p className="product-count">0</p>
                            <p>배송중</p>
                        </div>
                        <Image
                            src="/assets/images/icons/right-arrow.png"
                            width={20}
                            height={20}
                            alt="right-arrow"
                        />
                        <div className="product-step">
                            <p className="product-count">0</p>
                            <p>배송완료</p>
                        </div>
                    </div>
                </Link>
            </section>
            <section className="service-policy">
                <div className="service">
                    <p className="service-subject">서비스</p>

                    <Link href='/orderlist'>
                        <div className="service-button">
                            <Image
                                src="/assets/images/icons/order.png"
                                width={20}
                                height={20}
                                alt="order"
                            />
                            <p>주문 내역</p>
                            <Image
                                src="/assets/images/icons/right-arrow-black.png"
                                width={20}
                                height={20}
                                alt="right-arrow-black"
                            />
                        </div>
                    </Link>

                    <Link href='/receivegift'>
                        <div className="service-button">
                            <Image
                                src="https://cdn-icons-png.flaticon.com/512/548/548427.png"
                                width={20}
                                height={20}
                                alt="service"
                            />
                            <p>선물함</p>
                            <Image
                                src="/assets/images/icons/right-arrow-black.png"
                                width={20}
                                height={20}
                                alt="right-arrow-black"
                            />
                        </div>
                    </Link>

                    <div className="service-button">
                        <Image
                            src="https://cdn-icons-png.flaticon.com/512/2438/2438167.png"
                            width={20}
                            height={20}
                            alt="coupon"
                        />
                        <p>쿠폰</p>
                        <Image
                            src="/assets/images/icons/right-arrow-black.png"
                            width={20}
                            height={20}
                            alt="right-arrow-black"
                        />
                    </div>

                    <div className="service-button">
                        <Image
                            src="https://cdn-icons-png.flaticon.com/512/8866/8866851.png"
                            width={20}
                            height={20}
                            alt="shipping address"
                        />
                        <p>배송지관리</p>
                        <Image
                            src="/assets/images/icons/right-arrow-black.png"
                            width={20}
                            height={20}
                            alt="right-arrow-black"
                        />
                    </div>

                    <div className="service-button">
                        <Image
                            src="https://cdn-icons-png.flaticon.com/512/3602/3602145.png"
                            width={20}
                            height={20}
                            alt="알림"
                        />
                        <p>입고 알림 내역</p>
                        <Image
                            src="/assets/images/icons/right-arrow-black.png"
                            width={20}
                            height={20}
                            alt="right-arrow-black"
                        />
                    </div>
                </div>

                <div className="policy">
                    <p className="policy-subject">약관 및 정책</p>
                    <div className="service-button">
                        <Image
                            src="https://cdn-icons-png.flaticon.com/512/664/664477.png"
                            width={20}
                            height={20}
                            alt="배송지 정보 수집 및 이용 동의"
                        />
                        <p>배송지 정보 수집 및 이용 동의</p>
                        <Image
                            src="/assets/images/icons/right-arrow-black.png"
                            width={20}
                            height={20}
                            alt="right-arrow-black"
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}
