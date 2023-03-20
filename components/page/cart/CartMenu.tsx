import { cartType } from '@/types/cart/cartListType'
import { cartListState } from '@/state/cartListState'
import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'

export default function CartMenu() {

    const [cartList, setCartList] = useRecoilState<cartType>(cartListState)
    const [listAllCheck, setListAllCheck] = useState(false)

    useEffect(() => {
        let check = true
        let freezeCheck = true
        cartList.cartList.find(item => item.check === false) ? check = false : check = true
        cartList.cartListFreeze.find(item => item.check === false) ? freezeCheck = false : freezeCheck = true
        if (check && freezeCheck) {
            setListAllCheck(true)
        } else {
            setListAllCheck(false)
        }
    }, [cartList])

    const handleAllCheck = (check: boolean) => {
        setListAllCheck(!check)
        setCartList({
            ...cartList,
            cartList: cartList.cartList.map(item => {
                return { ...item, check: !check }
            }),
            cartListFreeze: cartList.cartListFreeze.map(item => {
                return { ...item, check: !check }
            })
        })
    }

    return (
        <section id="cart-header">
            <p className="title">장바구니</p>
            <div className="cart-select">
                <div className="select-all">
                    <div className={listAllCheck ? 'sbCheckBoxOn' : 'sbCheckBox'} onClick={() => handleAllCheck(listAllCheck)}></div>
                    <p className='cart-select-btn'>전체선택</p>
                </div>
                <div className="select-del">
                    <p className='cart-select-btn'>선택삭제</p>
                    <p className='cart-select-btn'>전체삭제</p>
                </div>
            </div>
        </section>
    )
}
