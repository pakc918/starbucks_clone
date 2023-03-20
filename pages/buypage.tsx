import React from 'react'

export default function buypage() {
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
                <a href="address.html"><input type="button" className="address-btn" value="배송지 등록"/></a>
            </div>
            <div className="item-information-box">
                <button>
                    <div className="item-information-btn">
                        <div><span><b>상품내역</b></span></div>
                        <div className='item-thum'><img src="assets/images/icons/down.png"/></div>
                    </div>
                </button>
                <div className="item-information-btn">
                    <div className='info-btn'><img src="https://shop-phinf.pstatic.net/20230213_282/1676250820294ccH77_JPEG/77386648106178298_1928937226.jpg?type=m510" alt="23 SS 체리 콕시클 라벤더 콜드컵 591ml"
                    /></div>
                    <div className='item-info-subject'><span><b>23 SS 체리 콕시클 라벤더 콜드컵 591ml</b></span></div>
                </div>
            </div>
        </section>

        <section id="buy2">
            <div className="item-coupon-box">
                <button>
                    <div className="item-coupon-btn">
                        <div><span><b>쿠폰 및 할인</b></span></div>
                        <div><img src="assets/images/icons/down.png"/></div>
                    </div>
                </button>
            </div>
        </section>

        <section id="buy2">
            <div className="item-coupon-box">
                <div className='mobile'><b>모바일 상품권</b></div>
                <nav>
                    <a href="giftcard.html"><ul>
                        <li >사용하기</li>
                        <li><img src="assets/images/icons/next.png"/></li>
                    </ul></a>
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
                        <input type="radio" name="starbuks-card" value="스타벅스 카드"/> 스타벅스 카드
                    </div>
                    <div>
                        <input type="radio" name="starbuks-card" value="스타벅스 카드"/> 신용카드
                    </div>
                </div>
            </div>
        </section>
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
