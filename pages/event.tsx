import { ProductListCardType } from '@/types/fetchDataType';
import { subNavMenuType } from '@/types/navMenuType'
import Image from 'next/image';

import React, { useEffect, useState } from 'react'
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper'

import "swiper/css";
import "swiper/css/pagination";
const Event = () => {

  const [productData, setProductData] = useState<ProductListCardType>()
  const [slideindex, setSlideIndex] = useState<number>(0)
  const [eventSubNavData, setsubNavBottomData] = useState<subNavMenuType[]>()
  const [isNotice, setIsNotice] = useState<boolean>(false)

  const [swiper, setSwiper] = useState<SwiperCore>();

  useEffect(() => {
    fetch('http://localhost:3001/eventsubnav')
      .then(res => res.json())
      .then(data => setsubNavBottomData(data))
  }, [slideindex])

  useEffect(() => {
    fetch(`http://localhost:3001/products/1`)
      .then(res => res.json())
      .then(data => setProductData(data))
  }, [])

  const slidechange = () => {
    if (slideindex !== 0) (
      setIsNotice(false)
    );
  }

  return (
    <>
      <div className='header-top' />
      <div style={{ marginTop: '50px', position: 'fixed', width: '100%', zIndex: '2', background: 'white' }}>
        <div className="header-sub">
          <nav>
            <ul>
              {
                eventSubNavData && eventSubNavData.map((eventsubnav) => (
                  <li
                    key={eventsubnav.id}
                    className={slideindex === eventsubnav.id - 1 ? "active" : ""}
                    onClick={() => swiper ? swiper.slideTo(eventsubnav.id - 1) : ""}
                  >{eventsubnav.name}</li>
                ))
              }
            </ul>
          </nav>
        </div>
      </div>

      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        onSlideChange={(swiper) => (setSlideIndex(swiper.activeIndex))}
        onSlideChangeTransitionStart={() => (scrollTo(0, 0))}
        onSlideChangeTransitionEnd={() => (slidechange())}
        onSwiper={setSwiper}
        style={{ marginTop: '107px' }}
      >

        <SwiperSlide>
          <section className="special_section_image">
            <div>
              <img src="assets/images/special_cake_crop.jpg" style={{ width: "100%", height: "auto" }} />
            </div>
          </section>
          <section className="special_section_product">
            <div className="special-recommand-product-list">
              {/* 아이템 불러올 자리 */}
              <div className="recommand-product-item">
                <div className="special-recommand-product-item__img">
                  <img
                    src="https://shop-phinf.pstatic.net/20230215_64/1676424666767CNRjg_JPEG/77560500579518181_629284917.jpg?type=m510"
                    style={{ height: "156px", width: "161px" }} alt="23 SS 체리 밸류 로맨틱 텀블러 355ml" />
                </div>
                <div className="recommand-product-item__info">
                  <p className="item-new">New</p>
                  <p className="item-title">부드러운 티라미수 롤케이크</p>
                  <p className="item-price"><span>19,900</span>원</p>
                </div>
              </div>
              <div className="recommand-product-item2">
                <div className="special-recommand-product-item__img">
                  <img
                    src="https://shop-phinf.pstatic.net/20230215_274/1676424690223Q4bek_JPEG/77560524030735209_1274866820.jpg?type=m510"
                    style={{ height: "156px", width: "161px" }} alt="23 SS 체리 밸류 로맨틱 텀블러 355ml" />
                </div>
                <div className="recommand-product-item__info">
                  <p className="item-new">New</p>
                  <p className="item-title">별의 별 케이크</p>
                  <p className="item-price"><span>25,000</span>원</p>
                </div>
              </div>
            </div>
          </section>

          {/* {
            productData &&
            <section className='special_section_product'>
              <div className="special-recommand-product-list">
                <div className="recommand-product-item">
                  <div className="special-recommand-product-item__img">
                    <img
                      src={productData.imgUrl} alt={productData.title}
                      style={{ height: "156px", width: "161px" }} />
                  </div>
                  <div className="recommand-product-item__info">
                    {productData.isNew ? <p className='item-new'>New</p> : null}
                    <p className="item-title">{productData.title}</p>
                    <p className="item-price"><span>{productData.price}</span>원</p>
                  </div>
                </div>

                <div className="recommand-product-item2">
                  <div className="special-recommand-product-item__img">
                    <img
                      src={productData.imgUrl} alt={productData.title}
                      style={{ height: "156px", width: "161px" }} />
                  </div>
                  <div className="recommand-product-item__info">
                    {productData.isNew ? <p className='item-new'>New</p> : null}
                    <p className="item-title">{productData.title}</p>
                    <p className="item-price"><span>{productData.price}</span>원</p>
                  </div>
                </div>
              </div>
            </section>
          } */}

          <footer className="special_footer_notice">
            <div className="subject" onClick={() => setIsNotice(!isNotice)}>
              <span>기획전 유의사항</span>
              <div className='subject-image'>
                <Image src={isNotice ? "https://cdn-icons-png.flaticon.com/512/2985/2985150.png" : "https://cdn-icons-png.flaticon.com/512/3106/3106683.png"} alt="notice" width={20} height={20} />

              </div>
            </div>
            {isNotice ?
              (<div className="contents">
                <div className="detail">
                  <p>• 택배를 통해 배송되는 냉동 상품입니다. 매장을 통한 구매, 교환 혹은 반품 은 불가합니다.</p>
                  <p>• 사진은 연출된 이미지 컷으로 실제와 다를 수 있습니다.</p>
                  <p>• 한정 수량으로 제작되어 조기 소진될 수 있습니다.</p>
                  <p>• 상품에 대한 자세한 정보 및 구매, 교환, 환불 등 서비스 관련 내용은 각 상품의 상세페이지에서 확인하시기 바랍니다.</p>
                  <p>• 무료 음료 쿠폰은 온라인 스토어에서 구매하신 홀케이크의 수량만큼 ‘수신 자에게 지급됩니다.</p>
                  <p>• 무료 음료 쿠폰은 배송 완료일로부터 9일차에 카카오톡 알림톡으로 발송 되며, 알림톡발송 실패 시 문자(LMS)로 발송됩니다.</p>
                  <p>• 무료 음료 쿠폰에 대한 자세한 정보는 각 상품의 상세페이지에서 확인하시 기 바랍니다.</p>
                  <p>• 구매 별은 스타벅스 리워드 웰컴, 그린, 골드 레벨 회원이 본인 계정에 등록 된 스타벅스 카드를 이용하여 온라인 스토어에서 구매 시 적립됩니다.
                    (단, 스타벅스 카드 결제 금액 1천원 이상인 경우에만 별 적립 대상에 포함)</p>
                  <p>• 구매 별 적립 대상자가 1만원 이상 결제 시, 배송비를 제외한 총 결제금액 1 만원 당 이벤트 별 1개가 적립됩니다.</p>
                  <p>• 별은 배송완료일로부터 9일차에 '구매자'에게 적립되며, 별 적립 이후 상품 을 반품할 경우 적립된 별은 회수됩니다. (불량 등의 사유로 반품할 경우에도 별은 회수됨)</p>
                  <p>• 별 적립 일정은 당사 사정에 따라 변경될 수 있습니다.</p>
                  <p>• 적립된 별의 유효기간은 적립일로부터 1년입니다.</p>
                </div>
              </div>) : null
            }
          </footer>
        </SwiperSlide>
        <SwiperSlide>
          <section className="special_section_image">
            <div>
              <img src="assets/images/special_cake_crop.jpg" style={{ width: "100%", height: "auto" }} />
            </div>
          </section>
          <section className="special_section_product">
            <div className="special-recommand-product-list">
              <div className="recommand-product-item">
                <div className="special-recommand-product-item__img">
                  <img
                    src="https://shop-phinf.pstatic.net/20230215_64/1676424666767CNRjg_JPEG/77560500579518181_629284917.jpg?type=m510"
                    style={{ height: "156px", width: "161px" }} alt="23 SS 체리 밸류 로맨틱 텀블러 355ml" />
                </div>
                <div className="recommand-product-item__info">
                  <p className="item-new">New</p>
                  <p className="item-title">부드러운 티라미수 롤케이크</p>
                  <p className="item-price"><span>19,900</span>원</p>
                </div>
              </div>
              <div className="recommand-product-item2">
                <div className="special-recommand-product-item__img">
                  <img
                    src="https://shop-phinf.pstatic.net/20230215_274/1676424690223Q4bek_JPEG/77560524030735209_1274866820.jpg?type=m510"
                    style={{ height: "156px", width: "161px" }} alt="23 SS 체리 밸류 로맨틱 텀블러 355ml" />
                </div>
                <div className="recommand-product-item__info">
                  <p className="item-new">New</p>
                  <p className="item-title">별의 별 케이크</p>
                  <p className="item-price"><span>25,000</span>원</p>
                </div>
              </div>
            </div>
          </section>

          {
            productData &&
            <section className='special_section_product'>
              <div className="special-recommand-product-list">
                <div className="recommand-product-item">
                  <div className="special-recommand-product-item__img">
                    <img
                      src={productData.imgUrl} alt={productData.title}
                      style={{ height: "156px", width: "161px" }} />
                  </div>
                  <div className="recommand-product-item__info">
                    {productData.isNew ? <p className='item-new'>New</p> : null}
                    <p className="item-title">{productData.title}</p>
                    <p className="item-price"><span>{productData.price}</span>원</p>
                  </div>
                </div>

                <div className="recommand-product-item2">
                  <div className="special-recommand-product-item__img">
                    <img
                      src={productData.imgUrl} alt={productData.title}
                      style={{ height: "156px", width: "161px" }} />
                  </div>
                  <div className="recommand-product-item__info">
                    {productData.isNew ? <p className='item-new'>New</p> : null}
                    <p className="item-title">{productData.title}</p>
                    <p className="item-price"><span>{productData.price}</span>원</p>
                  </div>
                </div>
              </div>
            </section>
          }
        </SwiperSlide>
        <SwiperSlide>
          <section className="special_section_image">
            <div>
              <img src="assets/images/special_cake_crop.jpg" style={{ width: "100%", height: "auto" }} />
            </div>
          </section>
          <section className="special_section_product">
            <div className="special-recommand-product-list">
              <div className="recommand-product-item">
                <div className="special-recommand-product-item__img">
                  <img
                    src="https://shop-phinf.pstatic.net/20230215_64/1676424666767CNRjg_JPEG/77560500579518181_629284917.jpg?type=m510"
                    style={{ height: "156px", width: "161px" }} alt="23 SS 체리 밸류 로맨틱 텀블러 355ml" />
                </div>
                <div className="recommand-product-item__info">
                  <p className="item-new">New</p>
                  <p className="item-title">부드러운 티라미수 롤케이크</p>
                  <p className="item-price"><span>19,900</span>원</p>
                </div>
              </div>
              <div className="recommand-product-item2">
                <div className="special-recommand-product-item__img">
                  <img
                    src="https://shop-phinf.pstatic.net/20230215_274/1676424690223Q4bek_JPEG/77560524030735209_1274866820.jpg?type=m510"
                    style={{ height: "156px", width: "161px" }} alt="23 SS 체리 밸류 로맨틱 텀블러 355ml" />
                </div>
                <div className="recommand-product-item__info">
                  <p className="item-new">New</p>
                  <p className="item-title">별의 별 케이크</p>
                  <p className="item-price"><span>25,000</span>원</p>
                </div>
              </div>
            </div>
          </section>

          {
            productData &&
            <section className='special_section_product'>
              <div className="special-recommand-product-list">
                <div className="recommand-product-item">
                  <div className="special-recommand-product-item__img">
                    <img
                      src={productData.imgUrl} alt={productData.title}
                      style={{ height: "156px", width: "161px" }} />
                  </div>
                  <div className="recommand-product-item__info">
                    {productData.isNew ? <p className='item-new'>New</p> : null}
                    <p className="item-title">{productData.title}</p>
                    <p className="item-price"><span>{productData.price}</span>원</p>
                  </div>
                </div>

                <div className="recommand-product-item2">
                  <div className="special-recommand-product-item__img">
                    <img
                      src={productData.imgUrl} alt={productData.title}
                      style={{ height: "156px", width: "161px" }} />
                  </div>
                  <div className="recommand-product-item__info">
                    {productData.isNew ? <p className='item-new'>New</p> : null}
                    <p className="item-title">{productData.title}</p>
                    <p className="item-price"><span>{productData.price}</span>원</p>
                  </div>
                </div>
              </div>
            </section>
          }
        </SwiperSlide>
        <SwiperSlide>
          <section className="special_section_image">
            <div>
              <img src="assets/images/special_cake_crop.jpg" style={{ width: "100%", height: "auto" }} />
            </div>
          </section>
          <section className="special_section_product">
            <div className="special-recommand-product-list">
              <div className="recommand-product-item">
                <div className="special-recommand-product-item__img">
                  <img
                    src="https://shop-phinf.pstatic.net/20230215_64/1676424666767CNRjg_JPEG/77560500579518181_629284917.jpg?type=m510"
                    style={{ height: "156px", width: "161px" }} alt="23 SS 체리 밸류 로맨틱 텀블러 355ml" />
                </div>
                <div className="recommand-product-item__info">
                  <p className="item-new">New</p>
                  <p className="item-title">부드러운 티라미수 롤케이크</p>
                  <p className="item-price"><span>19,900</span>원</p>
                </div>
              </div>
              <div className="recommand-product-item2">
                <div className="special-recommand-product-item__img">
                  <img
                    src="https://shop-phinf.pstatic.net/20230215_274/1676424690223Q4bek_JPEG/77560524030735209_1274866820.jpg?type=m510"
                    style={{ height: "156px", width: "161px" }} alt="23 SS 체리 밸류 로맨틱 텀블러 355ml" />
                </div>
                <div className="recommand-product-item__info">
                  <p className="item-new">New</p>
                  <p className="item-title">별의 별 케이크</p>
                  <p className="item-price"><span>25,000</span>원</p>
                </div>
              </div>
            </div>
          </section>

          {
            productData &&
            <section className='special_section_product'>
              <div className="special-recommand-product-list">
                <div className="recommand-product-item">
                  <div className="special-recommand-product-item__img">
                    <img
                      src={productData.imgUrl} alt={productData.title}
                      style={{ height: "156px", width: "161px" }} />
                  </div>
                  <div className="recommand-product-item__info">
                    {productData.isNew ? <p className='item-new'>New</p> : null}
                    <p className="item-title">{productData.title}</p>
                    <p className="item-price"><span>{productData.price}</span>원</p>
                  </div>
                </div>

                <div className="recommand-product-item2">
                  <div className="special-recommand-product-item__img">
                    <img
                      src={productData.imgUrl} alt={productData.title}
                      style={{ height: "156px", width: "161px" }} />
                  </div>
                  <div className="recommand-product-item__info">
                    {productData.isNew ? <p className='item-new'>New</p> : null}
                    <p className="item-title">{productData.title}</p>
                    <p className="item-price"><span>{productData.price}</span>원</p>
                  </div>
                </div>
              </div>
            </section>
          }
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Event