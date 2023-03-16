import React from 'react'
import { useRecoilState } from 'recoil'
import { cartState } from '@/state/cartState'

export default function cart() {
    const [cart, setCart] = useRecoilState<number>(cartState)
    return (
        <div style={{ marginTop: "200px" }}>
            <button onClick={() => setCart(cart + 1)}>addCart</button>
        </div>
    )
}
