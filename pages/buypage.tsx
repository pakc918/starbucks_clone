import FooterButton from '@/components/footer/FooterButton'
import Separator from '@/components/ui/Separator'
import { RequestPayParams, RequestPayResponse } from '@/types/productPayment/paymentFilterType'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Buypage() {

    const onClickPayment = () => {

        if (!window.IMP) return;

        /* 1. 가맹점 식별하기 */
        const IMP = window.IMP;
        IMP.init("imp31284226"); // 가맹점 식별코드
        

        /* 2. 결제 데이터 정의하기 */
        const data: RequestPayParams = {
            pg: "html5_inicis.{INIpayTest}", // PG사 : https://portone.gitbook.io/docs/sdk/javascript-sdk/payrq#undefined-1 참고"
            pay_method: "card", // 결제수단
            merchant_uid: `mid_${new Date().getTime()}`, // 주문번호
            amount: 1, // 결제금액
            name: "천만원", // 주문명
            buyer_name: "노홍기", // 구매자 이름
            buyer_tel: "01077416096", // 구매자 전화번호
            buyer_email: "example@example", // 구매자 이메일
            buyer_addr: "신사동 661-16", // 구매자 주소
            buyer_postcode: "06018", // 구매자 우편번호
        };

        /* 3. 콜백 함수 정의하기 */
        function callback(response: RequestPayResponse) {
            const { success, error_msg } = response;
            if (success) {
                alert("결제 성공");
                console.log(data.name);
                console.log("이 부분으로 데이터를 API로 전송할 예정입니다.");
                /*
                <history에 필수.>
                상품 ID => 클릭시 넘어가도록
                상품 이름
                주문 유형 : 내돈 내산 or 선물
                (선물일 경우) : 편지 내용
                주문 날짜
                (취소한 경우) 취소 날짜
                주문 상태
                결제 종류
                상품 금액
                개수
                주문 번호
                */
            } else {
                console.log(10000000);
                alert(`결제 실패: ${error_msg}`);
            }
        }

        /* 4. 결제 창 호출하기 */
        IMP.request_pay(data, callback);
    };


    return (
        <div className="container">
            <section id="buy">
                <div className='purchase'>
                    <p><b>결제하기</b></p>
                </div>
                <div className='ship-info'>
                    <p><b>배송 정보</b></p>
                </div>
                <div className="address-box">
                    <span>등록된 배송지가 없습니다.<p>배송지를 등록해주세요.</p></span>
                    <a href="address"><input type="button" className="address-btn" value="배송지 등록" /></a>
                </div>
                {/* <div className="item-information-box"> */}
                <button>
                    <div className="item-information-btn">
                        <div className="item-span-b"><span><b>상품내역</b></span></div>
                        <div className='item-thum'>
                            <Image
                                src="/assets/images/icons/down.png"
                                width={20}
                                height={20}
                                alt="down"
                            />
                        </div>
                    </div>
                </button>
                <div>
                    <div className='info-btn'>
                        <Image
                            src="https://shop-phinf.pstatic.net/20230213_282/1676250820294ccH77_JPEG/77386648106178298_1928937226.jpg?type=m510"
                            width={20}
                            height={20}
                            alt="23 SS 체리 콕시클 라벤더 콜드컵 591ml"
                        />
                        <div className='item-info-subject'><span><b>23 SS 체리 콕시클 라벤더 콜드컵 591ml</b></span></div>
                    </div>
                </div>
                {/* </div> */}
            </section>

            <section id="buy2">
                <div className="item-coupon-box">
                    <button>
                        <div className="item-coupon-btn">
                            <div><span><b>쿠폰 및 할인</b></span></div>
                            <div>
                                <Image
                                    src="/assets/images/icons/down.png"
                                    width={20}
                                    height={20}
                                    alt="down"
                                />
                            </div>
                        </div>
                    </button>
                </div>
            </section>

            <section id="buy2">
                <div className="item-coupon-box">
                    <div className='mobile'><b>모바일 상품권</b></div>
                    <nav>
                        <Link href="/giftcard"><ul>
                            <li >사용하기</li>
                            <li>
                                <Image
                                    src="/assets/images/icons/next.png"
                                    width={20}
                                    height={20}
                                    alt="next"
                                />
                            </li>
                        </ul></Link>
                    </nav>
                </div>
            </section>

            <section id="recommand-md">
                <div className='buy-recommand-md'>
                    <div className='buy-type'>
                        <p><b>결제 수단</b></p>
                    </div>
                    <div className="item-coupon-box">
                        <div>
                            <input type="radio" name="starbuks-card" value="스타벅스 카드" /> 스타벅스 카드
                        </div>
                        <div>
                            <input type="radio" name="starbuks-card" value="스타벅스 카드" /> 신용카드
                        </div>
                    </div>
                </div>
            </section>
            <section className='payment-info'>
                <p>결제 정보</p>
                <div>
                    <p>주문 금액</p>
                    <p>29,000원</p>
                </div>
                <div>
                    <p>상품 금액</p>
                    <p>26,000원</p>
                </div>
                <Separator color='lightgray' />
                <div>
                    <p>할인 금액 </p>
                    <p>0원</p>
                </div>
                <div>
                    <p>상품 할인 </p>
                    <p>0원</p>
                </div>
                <Separator color='lightgray' />
                <div>
                    <p>결제 금액 </p>
                    <p>29,000원</p>
                </div>
                <div>
                    <p>모바일 상품권 </p>
                    <p>0원</p>
                </div>
                <Separator color='lightgray' />
                <div>
                    <p>최종 결제 금액</p>
                    <p>29,000원</p>
                </div>
                <section className='order-agree'>
                    <p>위 주문 내용을 확인하였으며, 결제에 동의합니다.</p>
                    <p>(전자상거래법 8조 2항)</p>
                </section>
            </section>
            <button style={{zIndex:"1"}} onClick={() => onClickPayment()}><FooterButton inputvalue='29,000원 결제하기' /> </button>

            {/* <section id="buy2">
            <div className="item-coupon-box">
                <div><p>결제 수단</p></div>
                <div>스타벅스 카드</div>
                <div>신용카드</div>
            </div>  
        </section>
        <section id="recommand-md">
            <div style="border-bottom-style: solid;
            border-width: 1px;
            border-bottom-color: lightgray;">
                <p style="font-size: 20px;"><b>결제 정보</b></p>
                <div style="height: 30px; position: relative; margin: 10px;">
                    <div style="left: 0px; position: absolute;">
                        <p style="font-size: 18px;"><b>주문 금액</b></p>
                    </div>
                    <div style="right:0px; position: absolute;">
                        <p style="font-size: 20px;"><b>55,000원</b></p>
                    </div>
                </div>
                <div className="item-coupon-box" style="height: 70px; position: relative; margin: 10px;">
                    <div style="left: 0px; position: absolute;">
                        <p style="font-size: 14px;">상품 금액</p>
                        <p style="font-size: 14px;">배송비</p>
                    </div>
                    <div style="right:0px; position: absolute;">
                        <p style="font-size: 14px;"><b>55,000원</b></p>
                        <p style="font-size: 14px; right:0px; position: absolute; top: 30px;"><b>0원</b></p>
                    </div>
                </div>
            </div>
        </section>
        <section id="recommand-md">
            <div style="    border-bottom-style: solid;
            border-width: 1px;
            border-bottom-color: lightgray; height: 90px;">
                <div style="height: 30px; position: relative; margin: 10px;">
                    <div style="left: 0px; position: absolute; height: 90px;">
                        <p style="font-size: 18px;"><b>할인 금액</b></p>
                    </div>
                    <div style="right:0px; position: absolute;">
                        <p style="font-size: 20px;"><b>0원</b></p>
                    </div>
                </div>
                <div className="item-coupon-box" style="height: 70px; position: relative; margin: 10px;">
                    <div style="left: 0px; position: absolute;">
                        <p style="font-size: 14px;">상품 할인</p>
                    </div>
                    <div style="right:0px; position: absolute;">
                        <p style="font-size: 14px;"><b>0원</b></p>
                    </div>
                </div>
            </div>
        </section>
        <section id="recommand-md">
            <div style="    border-bottom-style: solid;
            border-width: 1px;
            border-bottom-color: lightgray; height: 90px;">
                <div style="height: 30px; position: relative; margin: 10px;">
                    <div style="left: 0px; position: absolute;">
                        <p style="font-size: 18px;"><b>결제 금액</b></p>
                    </div>
                    <div style="right:0px; position: absolute;">
                        <p style="font-size: 20px;"><b>55,000원</b></p>
                    </div>
                </div>
                <div className="item-coupon-box" style="height: 70px; position: relative; margin: 10px;">
                    <div style="left: 0px; position: absolute;">
                        <p style="font-size: 14px;">모바일 상품권</p>
                    </div>
                    <div style="right:0px; position: absolute;">
                        <p style="font-size: 14px;"><b>0원</b></p>
                    </div>
                </div>
            </div>
        </section>
        <section id="recommand-md" style="margin-bottom: 50%;">
            <div>
                <div style="height: 30px; position: relative; margin: 10px;">
                    <div style="left: 0px; position: absolute;">
                        <p style="font-size: 30px;"><b>최종 결제 금액</b></p>
                    </div>
                    <div style="right:0px; position: absolute;">
                        <p style="font-size: 30px;"><b>55,000원</b></p>
                    </div>
                </div>
            </div>
        </section>
        <footer className="buypage-footer">
            <div className="buypage-buy-btn">
                <p>구매하기</p>
            </div>
        </footer>
  */}
        </div>
    )
}
