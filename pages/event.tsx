import MainLayout from '@/components/layouts/MainLayout';
import { mainEventListType, ProductListCardType } from '@/types/fetchDataType';
import { bottomNavMenuType, subNavMenuType } from '@/types/navMenuType'

import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { NextPageWithLayout } from './_app';

const Event = () => {

  // const router = useRouter()
  // console.log(router.pathname)

  // const [navBottomData, setNavBottomData] = useState<bottomNavMenuType[]>()

  // useEffect(() => {
  //   fetch('http://localhost:3001/nav')
  //     .then(res => res.json())
  //     .then(data => setNavBottomData(data))
  // }, [])

  // const [navSubData, setNavSubData] = useState<subNavMenuType[]>()

  // useEffect(() => {
  //   fetch('http://localhost:3001/subnav')
  //     .then(res => res.json())
  //     .then(data => setNavSubData(data))
  // }, [])

  const [productData, setProductData] = useState<ProductListCardType>()

    useEffect(() => {
        fetch(`http://10.10.10.42:3001/products/4`)
            .then(res => res.json())
            .then(data => setProductData(data))
    }, [])

  return (
    <>
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

      <section className='special_section_product2'>
      <div className="special-recommand-product-list">
          <div className="recommand-product-item">

            </div>
            </div>

      </section>

      {/* <section className="special_section_product2">
        <div className="special-recommand-product-list">
          <div className="recommand-product-item">
            <div className="special-recommand-product-item__img">
              <img
                src="https://shop-phinf.pstatic.net/20221230_152/1672371405306IVKOz_JPEG/73507189011853712_324497504.jpg?type=m510"
                style={{ height: "156px", width: "161px" }} alt="23 SS 체리 밸류 로맨틱 텀블러 355ml" />
            </div>
            <div className="recommand-product-item__info">
              <p className="item-title">더블 초콜릿 케이크</p>
              <p className="item-price"><span>33,000</span>원</p>
            </div>
          </div>
          <div className="recommand-product-item2">
            <div className="special-recommand-product-item__img">
              <img
                src="https://shop-phinf.pstatic.net/20221230_87/1672371248920KrduT_JPEG/73507032581228289_908311394.jpg?type=m510"
                style={{ height: "156px", width: "161px" }} alt="23 SS 체리 밸류 로맨틱 텀블러 355ml" />
            </div>
            <div className="recommand-product-item__info">
              <p className="item-title">부드러운 고구마 생크림 케이크</p>
              <p className="item-price"><span>33,000</span>원</p>
            </div>
          </div>
        </div>
      </section>
      <section className="special_section_product3">
        <div className="special-recommand-product-list">
          <div className="recommand-product-item">
            <div className="special-recommand-product-item__img">
              <img
                src="https://shop-phinf.pstatic.net/20221230_294/1672371457399tDq2z_JPEG/73507241105091598_1599621290.jpg?type=m510"
                style={{ height: "156px", width: "161px" }} alt="23 SS 체리 밸류 로맨틱 텀블러 355ml" />
            </div>
            <div className="recommand-product-item__info">
              <p className="item-title">블루베리 치즈 케이크</p>
              <p className="item-price"><span>33,000</span>원</p>
            </div>
          </div>

          <div className="recommand-product-item2">
            <div className="special-recommand-product-item__img">
              <img src="" style={{ height: "156px", width: "161px" }} alt="" />
            </div>
          </div>
        </div>
      </section>
      <footer className="special_footer_notice">
        <div className="subject">
          <span style={{ fontSize: "20px", fontWeight: "bold" }}>기획전 유의사항</span>
        </div>
        <div className="contents">
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
        </div>
      </footer> */}
    </>
  )
}

export default Event