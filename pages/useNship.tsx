import FooterButton from '@/components/footer/FooterButton'
import ModalHeader from '@/components/header/ModalTopHeader'
import React from 'react'

export default function useNship() {
    return (
        <>
            <ModalHeader subject='이용조건 및 배송 안내' />
            <div className='itemModal-notice'>
                <p>ㆍ온라인 스토어는 스타벅스 홈페이지 및 모바일 애플리케이션에
                    게시하고 있는 홈페이지 이용약관 및 비회원 이용약관에 의거합
                    니다.
                </p>
                <p>
                    ㆍ온라인 스토어에서 판매되는 상품은 고객님이 원하는 곳에서
                    수령할 수 있는 배송 상품이며, 구매일 또는 배송지 입력일로부터
                    2~5일 (영업일 기준) 배송기간이 소요됩니다.
                </p>
                <p>
                    ㆍ배송 소요 기간은 휴일 포함 여부 및 상품 재고상황, 택배사 사
                    정에 의해 지연될 수 있습니다.
                </p>
                <p>ㆍ배송비는 모바일상품권 사용금액을 포함하여 30,000원 이상
                    구매 시 무료로 배송되며, 30,000원 미만의 경우에는 3,000원
                    의 배송비가 발생합니다. "무료배송" 또는 "유료배송" 상품으로
                    명시되어 있는 상품은 결제금액과 무관하게 무료 또는 유료로 배
                    송됩니다.
                </p>
                <p>ㆍ일반 배송 상품과 냉동 배송 상품을 동시에 구매 시, 배송비는 배
                    송 유형 별로 각각 부과됩니다.
                </p>
                <p>ㆍ제주/도서산간 지역은 택배 수령 시 추가 운임이 발생할 수 있
                    으며, 냉동 상품의 경우 상품 안전성을 고려하여 제주도, 도서, 산
                    간지역/군부대의 배송이 불가합니다.
                </p>
            </div>
            <FooterButton inputvalue='확인' />
        </>
    )
}
