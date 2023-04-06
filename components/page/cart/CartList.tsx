import CartListSubject from '@/components/ui/CartListSubject';
import { cartListType } from '@/types/cart/cartListType';
import React, { useEffect, useState } from 'react'
import CartItem from './CartItem';
import CartInfo from './CartInfo';
import CartFooter from './CartFooter';

export default function CartList(props: { data: cartListType[] }) {

    const [Items, setItems] = useState<cartListType[]>([])
    const [FrozenItems, setFrozenItems] = useState<cartListType[]>([])

    const [itemAllPrice, setAllPrice] = useState<number>(0)
    const [itemAllCount, setAllCount] = useState<number>(0)

    const [frozenAllPrice, setAllfrozenPrice] = useState<number>(0)
    const [frozenAllCount, setAllfrozenCount] = useState<number>(0)

    useEffect(() => {
        let myItems: cartListType[] = []
        let myFrozenItems: cartListType[] = []
        props.data.map(item => {
            if (item.frozen === 0) {
                myItems.push(item)
            } else {
                myFrozenItems.push(item)
            }
        })
        setItems(myItems)
        setFrozenItems(myFrozenItems)
    }, [props.data])

    useEffect(() => {
        let price = 0
        let amount = 0
        Items.map(item => {
            price += item.price * item.productAmount
        })
        amount = Items.length
        setAllPrice(price)
        setAllCount(amount)
    }, [Items])

    useEffect(() => {
        let price = 0
        let amount = 0
        FrozenItems.map(item => {
            price += item.price * item.productAmount
        })
        amount = FrozenItems.length
        setAllfrozenPrice(price)
        setAllfrozenCount(amount)
    }, [FrozenItems])

    // const [cartItems, setCartItems] = useRecoilState(cartListState);
    // const [listAllCheck, setListAllCheck] = useState(false);
    // const [listFreezeAllCheck, setListFreezeAllCheck] = useState(false);
    // console.log('cartItems',cartItems)

    // useEffect(() => {
    //     let check = true
    //     let freezeCheck = true
    //     cartItems.cartList.find(item => item.check === false) ? check = false : check = true
    //     cartItems.cartListFreeze.find(item => item.check === false) ? freezeCheck = false : freezeCheck = true
    //     setListAllCheck(check)
    //     setListFreezeAllCheck(freezeCheck)
    // }, [cartItems])

    // const handleCartListAllCheck = (check: boolean) => {
    //     setListAllCheck(!check)
    //     setCartItems({
    //         ...cartItems,
    //         cartList: cartItems.cartList.map((item: cartListType) => {
    //             return { ...item, check: !check }
    //         })
    //     })
    // }

    // const handleFreezeCartListAllCheck = (check: boolean) => {
    //     setListFreezeAllCheck(!check)
    //     setCartItems({
    //         ...cartItems,
    //         cartListFreeze: cartItems.cartListFreeze.map((item: cartListType) => {
    //             return { ...item, check: !check }
    //         })
    //     })
    // }

    return (
        <>
            <section id="cart-list">
                {
                    Items.length > 0 ? (
                        <>
                            <CartListSubject title='일반상품' />
                            {
                                Items.map((item: cartListType) => (
                                    <CartItem
                                        key={item.id}
                                        data={item}
                                    />
                                ))
                            }
                            <CartInfo price={itemAllPrice} count={itemAllCount} />
                        </>
                    ) : null
                }

                {
                    FrozenItems.length > 0 ? (
                        <>
                            <CartListSubject title='냉동상품' />
                            {
                                FrozenItems.map((item: cartListType) => (
                                    <CartItem
                                        key={item.id}
                                        data={item}
                                    />
                                ))
                            }
                            <CartInfo price={frozenAllPrice} count={frozenAllCount} />
                        </>
                    ) : null
                }

            <CartFooter itemprice={itemAllPrice} frozenprice={frozenAllPrice} itemcount={props.data.length}/>

            </section>
        </>
    )
}
