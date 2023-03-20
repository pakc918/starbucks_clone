import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import CartHeader from '@/components/page/cart/CartHeader'
import CartFooter from '@/components/page/cart/CartFooter'
import CartInfo from '@/components/page/cart/CartInfo'
import CartMenu from '@/components/page/cart/CartMenu'
import { cartListState } from '@/state/cartListState'
import { cartType, cartListType } from '@/types/cart/cartListType'
import axios from 'axios'
import CartList from '@/components/page/cart/CartList'

const setCartList = useSetRecoilState<cartType>(cartListState);

useEffect(() => {
    axios.get(`http://localhost:3001/cartListByUser`)
        .then((res) => {
            console.log(res.data)
            setCartList({
                cartListFreeze: res.data.filter((item: cartListType) => item.bigCategoryId === 1),
                cartList: res.data.filter((item: cartListType) => item.bigCategoryId !== 1)
            })
        }).catch((err) => {
            console.log(err)
        })
}, [])

export default function cart() {

    return (
        <>
            {/* <section className="empty-cart">
                <img src="https://cdn-icons-png.flaticon.com/512/2838/2838895.png" />
                <p>장바구니가 비어있습니다.</p>
            </section> */}
            <CartHeader />
            <CartMenu />
            <CartList />
            <CartInfo />
            <CartFooter />
            
        </>
    )
}
