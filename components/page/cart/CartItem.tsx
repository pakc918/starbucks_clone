import { cartListState } from '@/state/cartListState'
import { cartListType, cartType } from '@/types/cart/cartListType'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { useRecoilState } from 'recoil'

export default function CartItem(props: { data: cartListType }) {

    const [cartList, setCartList] = useRecoilState<cartType>(cartListState)


    // const handleCheck = () => {
    //     if (props.data.bigCategoryId === 1) {
    //         setCartList(
    //             {
    //                 ...cartList,
    //                 cartListFreeze: cartList.cartListFreeze.map((item: cartListType) => {
    //                     if (item.cartId === props.data.cartId) {
    //                         return { ...item, check: !item.check }
    //                     }
    //                     return item
    //                 })
    //             })
    //     } else {
    //         setCartList(
    //             {
    //                 ...cartList,
    //                 cartList: cartList.cartList.map((item: cartListType) => {
    //                     if (item.cartId === props.data.cartId) {
    //                         return { ...item, check: !item.check }
    //                     }
    //                     return item
    //                 })
    //             })
    //     }
    // }

    return (
        <>
        <section className="cart-product">
            <div className="checkbox-border">
                <div className="checkbox-border-left">
                    <input checked={props.data.checkbox ? true : false} className={props.data.checkbox ? 'checkboxOn' : 'checkbox'} type='checkbox' />
                    <Image
                        src= {props.data.titleImg}
                        width={100}
                        height={100}
                        alt= "productItem"
                    />
                </div>
                <div className="checkbox-border-right">
                    <p className="subject">{props.data.name}</p>
                    <p className="price">{(props.data.price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</p>
                </div>
                <div className="cancel-button">
                    <Image
                        src="https://cdn-icons-png.flaticon.com/512/864/864393.png"
                        width={30}
                        height={30}
                        alt= "cancelButton"
                    />
                </div>
            </div>
            <div className="product-count">
                <p>수량: {props.data.productAmount}개</p>
            </div>
            <div className="order-price">
                <span>주문 금액</span>
                <span>{(props.data.price * props.data.productAmount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</span>
            </div>
            <div className="edit-buy">
                <div className="cart-product-table">
                    <span>주문 수정</span>
                    <span><Link href='/buypage'>바로 구매</Link></span>
                </div>
            </div>
        </section>
        </>
    )
}
