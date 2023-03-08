import { bottomNavMenuType } from '@/types/navMenuType'
import Head from 'next/head'
import Link from 'next/link'
import  { useRouter } from 'next/router'
import React, {useEffect, useState } from 'react'
//import{ bottomNavData } from '../../datas/navData'

export default function MainLayout(props: { children: React.ReactNode}) {

    const router = useRouter()
    console.log (router.pathname)

    const [ navBottomData, setNavBottomData ] = useState<bottomNavMenuType[]>()

    useEffect( () => {
        fetch('https://localhost:3001/nav')
            .then(res => res.json())
            .then(data => setNavBottomData(data))
    },[])


    return (
        <>
            <Head>
                <meta name="description" content="StarBucks Clone Site" />
                <meta name="keywords" content="StarBucks, Clone, Site"/>
                <meta name="author" content="SpaLand"/>
                <link rel="stylesheet" href="../css/style.css"/>
                <title>StarBucks Clone Site</title>
            </Head>
            <div className="container">
                <header>
                    <div className="header-top">
                        <div className="menu-icon">
                        <a href="menu.html"><img src="../images/icons/menu.svg" alt="" /></a>
                        </div>
                        <h1><a href="index.html">온라인 스토어</a></h1>
                        <nav>
                        <ul>
                            <li><a href="search.html"><img src="../images/icons/search.svg" /></a></li>
                            <li><a href="cart.html"><img src="../images/icons/shopping-cart.svg" /></a></li>
                            <li><a href="mypage.html"><img src="../images/icons/user.svg" /></a></li>
                        </ul>
                        </nav>
                    </div>
                    <div className="header-bottom">
                        <nav>
                            <ul>
                                {
                                    navBottomData && navBottomData.map( nav  => (  // && 있으면 해라 라는 뜻 그러면 안정적으로 받아들임
                                        <li
                                            key={nav.id}
                                            className={router.pathname === nav.link ? "active" : ""}
                                        >
                                            <Link href={nav.link}>{nav.name}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </nav>
                    </div>
                    </header>
                    <section id="event-banner">
                        <div className="event-banner">
                            <div className="event-banner__item">
                                <div className="event-banner__item__img">
                                    <img src="../images/banner/banner01.png" width="100%" height="100%" alt="" />
                                </div>
                            </div>
                        </div>
                    </section>                    
                    <section id="recommand-md">
                    <div>
                        <h2>TREND TAG</h2>
                        <div className="recommand-product-list3">
                        <div className="recommand-product-item2">
                            <div className="recommand-product-item__img">
                            <img src="../images/products/05.png" alt="바리스타 춘식" />
                            </div>
                            <div className="recommand-product-item__info">
                            <p className="item-title2">바리스타 춘식</p>
                            </div>
                        </div>
                        <div className="recommand-product-item2">
                            <div className="recommand-product-item__img">
                            <img src="../images/products/08.png" alt="리드"/>
                            </div>
                            <div className="recommand-product-item__info">
                            <p className="item-title2">리드</p>
                            </div>
                        </div>
                        <div className="recommand-product-item2">
                            <div className="recommand-product-item__img">
                            <img src="../images/products/09.png" alt="리유저블"/>
                            </div>
                            <div className="recommand-product-item__info">
                            <p className="item-title2">리유저블</p>
                            </div>
                        </div>
                        <div className="recommand-product-item2">
                            <div className="recommand-product-item__img">
                            <img src="../images/products/10.png" alt="케이스"/>
                            </div>
                            <div className="recommand-product-item__info">
                            <p className="item-title2">케이스</p>
                            </div>
                        </div>
                        <div className="recommand-product-item2">
                            <div className="recommand-product-item__img">
                            <img src="../images/products/11.png" alt="핸디 데스크"/>
                            </div>
                            <div className="recommand-product-item__info">
                            <p className="item-title2">핸디 데스크</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </section>
                    <section id="recommand-md">
                    <div>
                        <h2>Cherry Blossom🌸</h2>
                        <div className="recommand-product-list">
                        <div className="recommand-product-item">
                            <div className="recommand-product-item__img">
                            <img src="../images/products/12.png" alt="23 SS 체리 튤립 로맨틱 워터보틀 384ml"/>
                            </div>
                            <div className="recommand-product-item__info">
                            <p className="item-new">New</p>
                            <p className="item-title">23 SS 체리 튤립 로맨틱 워터보틀 384ml</p>
                            <p className="item-price"><span>33,000</span>원</p>
                            </div>
                        </div>
                        <div className="recommand-product-item">
                            <div className="recommand-product-item__img">
                            <img src="../images/products/01.png" alt="23 SS 체리 밸류 로맨틱 텀블러 355ml"/>
                            </div>
                            <div className="recommand-product-item__info">
                            <p className="item-new">New</p>
                            <p className="item-title">23 SS 체리 밸류 로맨틱 텀블러 355ml</p>
                            <p className="item-price"><span>32,000</span>원</p>
                            </div>
                        </div>
                        <div className="recommand-product-item">
                            <div className="recommand-product-item__img">
                            <img src="../images/products/13.png" alt="23 SS 체리블라썸 엘마 로맨틱 텀블러 473ml"/>
                            </div>
                            <div className="recommand-product-item__info">
                            <p className="item-new">New</p>
                            <p className="item-title">23 SS 체리블라썸 엘마 로맨틱 텀블러 473ml</p>
                            <p className="item-price"><span>34,000</span>원</p>
                            </div>
                        </div>
                        <div className="recommand-product-item">
                            <div className="recommand-product-item__img">
                            <img src="../images/products/14.png" alt=""/>
                            </div>
                            <div className="recommand-product-item__info">
                            <p className="item-new">New</p>
                            <p className="item-title">23 SS 체리 트로이 꼴라쥬 텀블러 473ml</p>
                            <p className="item-price"><span>34,000</span>원</p>
                            </div>
                        </div>
                        <div className="recommand-product-item">
                            <div className="recommand-product-item__img">
                            <img src="../images/products/15.png" alt="23 체리 플로런스 로맨틱 텀블러 473ml"/>
                            </div>
                            <div className="recommand-product-item__info">
                            <p className="item-new">New</p>
                            <p className="item-title">23 체리 플로런스 로맨틱 텀블러 473ml</p>
                            <p className="item-price"><span>19,000</span>원</p>
                            </div>
                        </div>
                        <div className="recommand-product-item">
                            <div className="recommand-product-item__img">
                            <img src="../images/products/16.png" alt="23 체리 아이코닉 글리터 텀블러 473ml"/>
                            </div>
                            <div className="recommand-product-item__info">
                            <p className="item-new">New</p>
                            <p className="item-title">23 체리 아이코닉 글리터 텀블러 473ml</p>
                            <p className="item-price"><span>23,000</span>원</p>
                            </div>
                        </div>
                        <div className="recommand-product-item">
                            <div className="recommand-product-item__img">
                            <img src="../images/products/17.png" alt="23 체리블라썸 아치 페탈 텀블러 473ml"/>
                            </div>
                            <div className="recommand-product-item__info">
                            <p className="item-new">New</p>
                            <p className="item-title">23 체리블라썸 아치 페탈 텀블러 473ml</p>
                            <p className="item-price"><span>18,000</span>원</p>
                            </div>
                        </div>
                        <div className="recommand-product-item">
                            <div className="recommand-product-item__img">
                            <img src="../images/products/18.png" alt="23 체리블라썸 팝핸들 로맨틱 콜드컵 473ml"/>
                            </div>
                            <div className="recommand-product-item__info">
                            <p className="item-new">New</p>
                            <p className="item-title">23 체리블라썸 팝핸들 로맨틱 콜드컵 473ml</p>
                            <p className="item-price"><span>22,000</span>원</p>
                            </div>
                        </div>
                        <div className="recommand-product-item">
                            <div className="recommand-product-item__img">
                            <img src="../images/products/19.png" alt="23 체리블라썸 플라워 머그앤소서 237ml"/>
                            </div>
                            <div className="recommand-product-item__info">
                            <p className="item-new">New</p>
                            <p className="item-title">23 체리블라썸 플라워 머그앤소서 237ml</p>
                            <p className="item-price"><span>34,000</span>원</p>
                            </div>
                        </div>
                        <div className="recommand-product-item">
                            <div className="recommand-product-item__img">
                            <img src="../images/products/20.png" alt="23 체리블라썸 회전목마 머그앤리드 355ml"/>
                            </div>
                            <div className="recommand-product-item__info">
                            <p className="item-new">New</p>
                            <p className="item-title">23 체리블라썸 회전목마 머그앤리드 355ml</p>
                            <p className="item-price"><span>27,000</span>원</p>
                            </div>
                        </div>
                        <div className="recommand-product-item">
                            <div className="recommand-product-item__img">
                            <img src="../images/products/21.png" alt="23 체리블라썸 로맨틱 문 무드등"/>
                            </div>
                            <div className="recommand-product-item__info">
                            <p className="item-new">New</p>
                            <p className="item-title">23 체리블라썸 로맨틱 문 무드등</p>
                            <p className="item-price"><span>32,000</span>원</p>
                            </div>
                        </div>
                        <div className="recommand-product-item">
                            <div className="recommand-product-item__img">
                            <img src="../images/products/22.png" alt="23 체리블라썸 로맨틱 문 장우산"/>
                            </div>
                            <div className="recommand-product-item__info">
                            <p className="item-new">New</p>
                            <p className="item-title">23 체리블라썸 로맨틱 문 장우산</p>
                            <p className="item-price"><span>23,000</span>원</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </section>
                    <section id="recommand-md">
                    <div>
                        <h2>Cherry Blossom💜</h2>
                        <div className="recommand-product-list">
                        <div className="recommand-product-item">
                            <div className="recommand-product-item__img">
                            <a href="item.html"><img src="https://shop-phinf.pstatic.net/20230213_282/1676250820294ccH77_JPEG/77386648106178298_1928937226.jpg?type=m510" style={{width:"150px", height: "150px"}} alt="23 SS 체리 콕시클 라벤더 콜드컵 591ml"/></a>
                            </div>
                            <div className="recommand-product-item__info">
                            <p className="item-new">New</p>
                            <p className="item-title">23 SS 체리 콕시클 라벤더 콜드컵 591ml</p>
                            <p className="item-price"><span>55,000</span>원</p>
                            </div>
                        </div>
                        <div className="recommand-product-item">
                            <div className="recommand-product-item__img">
                            <img src="../images/products/02.png" alt=""/>
                            </div>
                            <div className="recommand-product-item__info">
                            <p className="item-title">23 체리블라썸 JOG 보온병 250ml</p>
                            <p className="item-price"><span>37,000</span>원</p>
                            </div>
                        </div>
                        <div className="recommand-product-item">
                            <div className="recommand-product-item__img">
                            <img src="../images/products/02.png" alt=""/>
                            </div>
                            <div className="recommand-product-item__info">
                            <p className="item-title">23 체리블라썸 JOG 보온병 250ml</p>
                            <p className="item-price"><span>37,000</span>원</p>
                            </div>
                        </div>
                        <div className="recommand-product-item">
                            <div className="recommand-product-item__img">
                            <img src="../images/products/02.png" alt=""/>
                            </div>
                            <div className="recommand-product-item__info">
                            <p className="item-title">23 체리블라썸 JOG 보온병 250ml</p>
                            <p className="item-price"><span>37,000</span>원</p>
                            </div>
                        </div>
                        <div className="recommand-product-item">
                            <div className="recommand-product-item__img">
                            <img src="../images/products/02.png" alt=""/>
                            </div>
                            <div className="recommand-product-item__info">
                            <p className="item-title">23 체리블라썸 JOG 보온병 250ml</p>
                            <p className="item-price"><span>37,000</span>원</p>
                            </div>
                        </div>
                        <div className="recommand-product-item">
                            <div className="recommand-product-item__img">
                            <img src="../images/products/02.png" alt=""/>
                            </div>
                            <div className="recommand-product-item__info">
                            <p className="item-title">23 체리블라썸 JOG 보온병 250ml</p>
                            <p className="item-price"><span>37,000</span>원</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </section>
                    <section id="recommand-md">
                    <div>
                        <h2>Starbucks Cake🍰</h2>
                        <div className="recommand-product-list">
                        <div className="recommand-product-item">
                            <div className="recommand-product-item__img">
                            <img src="../images/products/03.png" alt="부드러운 티라미수 롤케이크"/>
                            </div>
                            <div className="recommand-product-item__info">
                            <p className="item-new">New</p>
                            <p className="item-title">부드러운 티라미수 롤케이크</p>
                            <p className="item-price"><span>37,000</span>원</p>
                            </div>
                        </div>
                        <div className="recommand-product-item">
                            <div className="recommand-product-item__img">
                            <img src="../images/products/03.png" alt=""/>
                            </div>
                            <div className="recommand-product-item__info">
                            <p className="item-title">부드러운 티라미수 롤케이크</p>
                            <p className="item-price"><span>37,000</span>원</p>
                            </div>
                        </div>
                        <div className="recommand-product-item">
                            <div className="recommand-product-item__img">
                            <img src="../images/products/03.png" alt=""/>
                            </div>
                            <div className="recommand-product-item__info">
                            <p className="item-title">부드러운 티라미수 롤케이크</p>
                            <p className="item-price"><span>37,000</span>원</p>
                            </div>
                        </div>
                        <div className="recommand-product-item">
                            <div className="recommand-product-item__img">
                            <img src="../images/products/03.png" alt=""/>
                            </div>
                            <div className="recommand-product-item__info">
                            <p className="item-title">부드러운 티라미수 롤케이크</p>
                            <p className="item-price"><span>37,000</span>원</p>
                            </div>
                        </div>
                        <div className="recommand-product-item">
                            <div className="recommand-product-item__img">
                            <img src="../images/products/03.png" alt=""/>
                            </div>
                            <div className="recommand-product-item__info">
                            <p className="item-title">부드러운 티라미수 롤케이크</p>
                            <p className="item-price"><span>37,000</span>원</p>
                            </div>
                        </div>
                        <div className="recommand-product-item">
                            <div className="recommand-product-item__img">
                            <img src="../images/products/03.png" alt=""/>
                            </div>
                            <div className="recommand-product-item__info">
                            <p className="item-title">부드러운 티라미수 롤케이크</p>
                            <p className="item-price"><span>37,000</span>원</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </section>
                    <section id="recommand-md">
                    <div>
                        <h2>Online Only📌</h2>
                        <div className="recommand-product-list">
                        <div className="recommand-product-item">
                            <div className="recommand-product-item__img">
                            <img src="../images/products/07.png" alt="파스텔 핑크 텀블러 473ml"/>
                            </div>
                            <div className="recommand-product-item__info">
                            <p className="item-title">파스텔 핑크 텀블러 473ml</p>
                            <p className="item-price"><span>16,000</span>원</p>
                            </div>
                        </div>
                        <div className="recommand-product-item">
                            <div className="recommand-product-item__img">
                            <img src="../images/products/07.png" alt=""/>
                            </div>
                            <div className="recommand-product-item__info">
                            <p className="item-title">파스텔 핑크 텀블러 473ml</p>
                            <p className="item-price"><span>16,000</span>원</p>
                            </div>
                        </div>
                        <div className="recommand-product-item">
                            <div className="recommand-product-item__img">
                            <img src="../images/products/07.png" alt=""/>
                            </div>
                            <div className="recommand-product-item__info">
                            <p className="item-title">파스텔 핑크 텀블러 473ml</p>
                            <p className="item-price"><span>16,000</span>원</p>
                            </div>
                        </div>
                        <div className="recommand-product-item">
                            <div className="recommand-product-item__img">
                            <img src="../images/products/07.png" alt=""/>
                            </div>
                            <div className="recommand-product-item__info">
                            <p className="item-title">파스텔 핑크 텀블러 473ml</p>
                            <p className="item-price"><span>16,000</span>원</p>
                            </div>
                        </div>
                        <div className="recommand-product-item">
                            <div className="recommand-product-item__img">
                            <img src="../images/products/07.png" alt=""/>
                            </div>
                            <div className="recommand-product-item__info">
                            <p className="item-title">파스텔 핑크 텀블러 473ml</p>
                            <p className="item-price"><span>16,000</span>원</p>
                            </div>
                        </div>
                        <div className="recommand-product-item">
                            <div className="recommand-product-item__img">
                            <img src="../images/products/07.png" alt=""/>
                            </div>
                            <div className="recommand-product-item__info">
                            <p className="item-title">파스텔 핑크 텀블러 473ml</p>
                            <p className="item-price"><span>16,000</span>원</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className="container">
                {props.children}
            </div>
        </>
    )
}
