import { cartListState } from '@/state/cartListState';
import { cartListType } from '@/types/cart/cartListType';
import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil';
import CartItem from './CartItem';

export default function CartList() {

    const [cartItems, setCartItems] = useRecoilState(cartListState);
    const [listAllCheck, setListAllCheck] = useState(false);
    const [listFreezeAllCheck, setListFreezeAllCheck] = useState(false);
    console.log(cartItems)

    useEffect(() => {
        let check = true
        let freezeCheck = true
        cartItems.cartList.find(item => item.check === false) ? check = false : check = true
        cartItems.cartListFreeze.find(item => item.check === false) ? freezeCheck = false : freezeCheck = true
        setListAllCheck(check)
        setListFreezeAllCheck(freezeCheck)
    }, [cartItems])


    const handleCartListAllCheck = (check: boolean) => {
        setListAllCheck(!check)
        setCartItems({
            ...cartItems,
            cartList: cartItems.cartList.map((item: cartListType) => {
                return { ...item, check: !check }
            })
        })
    }

    const handleFreezeCartListAllCheck = (check: boolean) => {
        setListFreezeAllCheck(!check)
        setCartItems({
            ...cartItems,
            cartListFreeze: cartItems.cartListFreeze.map((item: cartListType) => {
                return { ...item, check: !check }
            })
        })
    }

    return (
        <section id="cart-list">
            {/* <div className="select">
                <div className="select-items">
                    <div className={listAllCheck ? 'sbCheckBoxOn' : 'sbCheckBox'} onClick={() => handleCartListAllCheck(listAllCheck)}></div>
                    <p className='cart-select-btn'>일반상품</p>
                </div>
            </div> */}
            <div>
            <div className="cart-product-category">
                <div className="cart-product-category-detail">
                    <input checked = {listAllCheck ? true : false} type="checkbox" id="section-cb"  onClick={() => handleCartListAllCheck(listAllCheck)}/><span>일반 상품</span>
                </div>
            </div>
            {
                cartItems.cartList.map((item: cartListType) => (
                    <CartItem
                        key={item.cartId}
                        data={item}
                    />
                ))
            }
            </div>

            {cartItems.cartListFreeze ? (
                <>
                    {/* <div className="select">
                        <div className="select-items">
                            <div className={listFreezeAllCheck ? 'sbCheckBoxOn' : 'sbCheckBox'} onClick={() => handleFreezeCartListAllCheck(listFreezeAllCheck)}></div>
                            <p className='cart-select-btn'>냉동상품</p>
                        </div>
                    </div> */}
                    <div>
                    <div className="cart-product-category">
                        <div className="cart-product-category-detail">
                            <input checked = {listFreezeAllCheck ? true : false} type="checkbox" id="section-cb" onClick={() => handleFreezeCartListAllCheck(listFreezeAllCheck)}/><span>냉동 상품</span>
                        </div>
                    </div>
                    {
                        cartItems.cartListFreeze.map((item: cartListType) => (
                            <CartItem
                                key={item.cartId}
                                data={item}
                            />
                        ))
                    }
                    </div>
                </>
            )
                : null
            }

        </section>
    )
}
