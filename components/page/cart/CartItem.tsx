import { cartListState } from '@/state/cartListState'
import { cartListType, cartType } from '@/types/cart/cartListType'
import Link from 'next/link'
import React from 'react'
import { useRecoilState } from 'recoil'

export default function CartItem(props: { data: cartListType }) {

    const [cartList, setCartList] = useRecoilState<cartType>(cartListState)

    const handleCheck = () => {
        if (props.data.bigCategoryId === 1) {
            setCartList(
                {
                    ...cartList,
                    cartListFreeze: cartList.cartListFreeze.map((item: cartListType) => {
                        if (item.cartId === props.data.cartId) {
                            return { ...item, check: !item.check }
                        }
                        return item
                    })
                })
        } else {
            setCartList(
                {
                    ...cartList,
                    cartList: cartList.cartList.map((item: cartListType) => {
                        if (item.cartId === props.data.cartId) {
                            return { ...item, check: !item.check }
                        }
                        return item
                    })
                })
        }
    }

    return (
        <section className="cart-product">
            {/* <div className="cart-product-category">
                    <div className="cart-product-category-detail">
                        <input type="checkbox" id="section-cb" /><span>일반 상품</span>
                    </div>
                </div>
                <div className="checkbox-border">
                    <div className="checkbox-border-left">
                        <input type="checkbox" />
                        <img src="assets/images/products/01.png" />
                    </div>
                    <div className="checkbox-border-right">
                        <p className="subject">23 SS 체리 콕시클 라벤더 콜드컵 591ml</p>
                        <p className="price">55,000원</p>
                    </div>
                    <div className="cancel-button">
                        <img src="https://cdn-icons-png.flaticon.com/512/864/864393.png" />
                    </div>
                </div>
                <div className="product-count">
                    <p>수량:1개</p>
                </div>
                <div className="order-price">
                    <span>주문 금액</span>
                    <span>55,000원</span>
                </div>
                <div className="edit-buy">
                    <div className="cart-product-table">
                        <span>주문 수정</span>
                        <span><Link href='/buypage'>바로 구매</Link></span>
                    </div>
                </div> */}

            <div className={props.data.check ? 'sbCheckBoxOn' : 'sbCheckBox'} onClick={handleCheck}></div>
            <div>
                <div className="item-info">
                    <img src="./assets/images/products/cake.jpg" alt="" className="product-img" />
                    <div>
                        <p className="name">부드러운 고구마 생크림 케이크</p>
                        <p className="price">33,000원</p>
                    </div>
                    <Link href="#"><img src="./assets/images/icons/close.png" alt="" className="close-icon" /></Link>
                </div>
                <div className="count">
                    <p>수량: 1개</p>
                </div>
                <div className="item-price">
                    <p>주문 금액</p>
                    <p>33,000원</p>
                </div>
                <div className="item-purchase">
                    <a href="">
                        주문 수정
                    </a>
                    <a href="">바로 구매</a>
                </div>
            </div>

            <section className="cart-result">
                <div className="cart-result-detail">
                    <p className="cart-result-detail-price">상품 1건 55,000원 + 배송비 0원=총 55,000원</p>
                    <p className="cart-result-detail-tax">무료배송</p>
                </div>
                <a href="">
                    <p className="cart-result-detail-more">더 담으러 가기</p>
                </a>
            </section>
        </section>
    )
}
