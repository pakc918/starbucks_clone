import { cartType } from '@/types/cart/cartListType'
import { cartListState } from '@/state/cartListState'
import React, { useEffect, useState } from 'react'
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil'
import Swal from 'sweetalert2'
import axios from 'axios'
import Config from '@/configs/config.export'
import { userLoginState } from '@/state/user/atom/userLoginState'

export default function CartMenu() {

    const { baseUrl } = Config()
    const { accessToken } = useRecoilValue(userLoginState)

    const [cartList, setCartList] = useRecoilState<cartType>(cartListState)
    const [listAllCheck, setListAllCheck] = useState(false)

    // useEffect(() => {
    //     let check = true
    //     let freezeCheck = true
    //     cartList.cartList.find(item => item.check === false) ? check = false : check = true
    //     cartList.cartListFreeze.find(item => item.check === false) ? freezeCheck = false : freezeCheck = true
    //     if (check && freezeCheck) {
    //         setListAllCheck(true)
    //     } else {
    //         setListAllCheck(false)
    //     }
    // }, [cartList])

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

    const resetCart = () => {
        axios.put(`${baseUrl}/api/v1/cart`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }).then(res => {
                console.log('resetcart',res)
                setCartList({
                    cartList: [],
                    cartListFreeze: []
                })
            })
    }



    const swalWithCustumButton = Swal.mixin({
        customClass: {
            actions: 'my-actions',
            cancelButton: 'order-1',
            confirmButton: 'order-2 right-gap',
        }
    })

    const checkCleanAll = () => {
        swalWithCustumButton.fire({
            text: '장바구니에 담긴 모든 상품을 삭제하시겠어요?',
            showCancelButton: true,
            confirmButtonColor: '#00a862',
            cancelButtonColor: '#d33',
            confirmButtonText: '삭제',
            cancelButtonText: '취소',
        }).then((result) => {
            if (result.isConfirmed) {
                resetCart()
            }
        })
    }

    return (
        // <section id="cart-header">
        //     <p className="title">장바구니</p>
        //     <div className="cart-select">
        //         <div className="select-all">
        //             <div className={listAllCheck ? 'sbCheckBoxOn' : 'sbCheckBox'} onClick={() => handleAllCheck(listAllCheck)}></div>
        //             <p className='cart-select-btn'>전체선택</p>
        //         </div>
        //         <div className="select-del">
        //             <p className='cart-select-btn'>선택삭제</p>
        //             <p className='cart-select-btn'>전체삭제</p>
        //         </div>
        //     </div>
        // </section>
        <header className="cart-header">
            <div className="header-bottom">
                <div className="header-bottom-check">
                    <div className="header-bottom-check-left">
                        <input checked = {true} type="checkbox" onClick={() => handleAllCheck(listAllCheck)} id="menu-cb" /><span>전체 선택</span>
                    </div>
                    <div className="header-bottom-check-right">
                        <span className='selec-del'>선택삭제</span> <span>|</span> <span onClick={checkCleanAll}>전체삭제</span>
                    </div>
                </div>
            </div>
        </header>
    )
}
