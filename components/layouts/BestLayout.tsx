import { bottomNavMenuType } from '@/types/navMenuType'
import { subNavMenuType } from '@/types/navMenuType'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

export default function MainLayout(props: { children: React.ReactNode }) {

    const router = useRouter()
    console.log(router.pathname)

    const [navBottomData, setNavBottomData] = useState<bottomNavMenuType[]>()
    const [navSubData, setNavSubData] = useState<subNavMenuType[]>()

    useEffect(() => {
        fetch('http://localhost:3001/nav')
            .then(res => res.json())
            .then(data => setNavBottomData(data))
    }, [])

    useEffect(() => {
        fetch('http://localhost:3001/nav')
            .then(res => res.json())
            .then(data => setNavSubData(data))
    }, [])

    return (
        <>
            <Head>
                <meta name="description" content="StarBucks Clone Site" />
                <meta name="keywords" content="StarBucks, Clone, Site" />
                <meta name="author" content="SpaLand" />
                <link rel="stylesheet" href="assets/css/style.css" />
                <title>StarBucks Clone Site</title>
            </Head>
            <div className="container">
                <header>
                    <div className="header-top">
                        <div className="menu-icon">
                            <a href="menu.html"><img src="assets/images/icons/menu.svg" alt="" /></a>
                        </div>
                        <h1><a href="index.html">온라인 스토어</a></h1>
                        <nav>
                            <ul>
                                <li><a href="search.html"><img src="assets/images/icons/search.svg" /></a></li>
                                <li><a href="cart.html"><img src="assets/images/icons/shopping-cart.svg" /></a></li>
                                <li><a href="mypage.html"><img src="assets/images/icons/user.svg" /></a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="header-bottom">
                        <nav>
                            <ul>
                                {
                                    navBottomData && navBottomData.map(nav => (  // && 있으면 해라 라는 뜻 그러면 안정적으로 받아들임
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
                    <div className="best-header-sub">
                        <div className="header-sub">
                            <nav>
                                <ul>
                                    {
                                        navSubData && navSubData.map(nav => (  // && 있으면 해라 라는 뜻 그러면 안정적으로 받아들임
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
                    </div>
                </header>
            </div>
            <div className="container">
                <section className="best-product">
                    <div className="best-product-list">
                        <div className="product-item">
                            <p className="count">1</p>
                            <div className="item_img">
                                <img src="https://shop-phinf.pstatic.net/20230215_64/1676424666767CNRjg_JPEG/77560500579518181_629284917.jpg?type=m510"/>
                            </div>
                            <div className="item_info">
                                <p className="item-new">New</p>
                                <p>부드러운 티라미수 롤케이크</p>
                                <p className="item-price"><span>19,900원</span></p>
                            </div>
                        </div>
                        <div className="product-item2">
                            <p className="count">2</p>
                            <div className="item_img">
                                <img src="https://shop-phinf.pstatic.net/20221230_87/1672371248920KrduT_JPEG/73507032581228289_908311394.jpg?type=m510"/>
                            </div>
                            <div className="item_info">
                                <p>부드러운 고구마 생크림 케이크</p>
                                <p className="item-price"><span>33,000원</span></p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="best-product2">
                    <div className="best-product-list">
                        <div className="product-item">
                            <p className="count">3</p>
                            <div className="item_img">
                                <img src="https://shop-phinf.pstatic.net/20221230_294/1672371457399tDq2z_JPEG/73507241105091598_1599621290.jpg?type=m510"/>
                            </div>
                            <div className="item_info">
                                <p>블루베리 치즈 케이크</p>
                                <p className="item-price"><span>19,900원</span></p>
                            </div>
                        </div>
                        <div className="product-item2">
                            <p className="count">4</p>
                            <div className="item_img">
                                <img src="https://shop-phinf.pstatic.net/20221230_152/1672371405306IVKOz_JPEG/73507189011853712_324497504.jpg?type=m510"/>
                            </div>
                            <div className="item_info">
                                <p>더블 초콜릿 케이크</p>
                                <p className="item-price"><span>33,000원</span></p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="best-product3">
                    <div className="best-product-list">
                        <div className="product-item">
                            <p className="count">5</p>
                            <div className="item_img">
                                <img src="https://shop-phinf.pstatic.net/20230215_274/1676424690223Q4bek_JPEG/77560524030735209_1274866820.jpg?type=m510"/>
                            </div>
                            <div className="item_info">
                                <p>별의 별 케이크</p>
                                <p className="item-price"><span>25,000원</span></p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
