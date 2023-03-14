import { bottomNavMenuType } from '@/types/navMenuType'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
//import{ bottomNavData } from 'assets/../datas/navData'

export default function MainLayout(props: { children: React.ReactNode }) {

  const router = useRouter()
  console.log(router.pathname)

  const [navBottomData, setNavBottomData] = useState<bottomNavMenuType[]>()

  useEffect(() => {
    fetch('http://localhost:3001/nav')
      .then(res => res.json())
      .then(data => setNavBottomData(data))
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
            <h1><Link href="/">온라인 스토어</Link></h1>
            <nav>
              <ul>
                <li><Link href="/search"><img src="assets/images/icons/search.svg" /></Link></li>
                <li><a href="cart.html"><img src="assets/images/icons/shopping-cart.svg" /></a></li>
                <li><a href="mypage.html"><img src="assets/images/icons/user.svg" /></a></li>
              </ul>
            </nav>
          </div>
          {
            navBottomData && navBottomData.map(nav => (
              router.pathname === nav.link ?
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
                : ""))
          }
          {
            router.pathname === '/best' ? (
              <div className="header-sub">
                <nav>
                  <ul>
                    <li className="active">케이크</li>
                    <li>텀블러/보온병</li>
                    <li>머그/컵</li>
                    <li>라이프스타일</li>
                    <li>티/커피용품</li>
                    <li>세트</li>
                  </ul>
                </nav>
              </div>
            ) :
              ""
          }
          {
            router.pathname === '/event' ? (
              <div className="header-sub">
                <nav>
                  <ul>
                    <li className="active">케이크</li>
                    <li>바리스타 춘식</li>
                    <li>핸디 데스크</li>
                    <li>별★ 적립 혜택</li>
                  </ul>
                </nav>
              </div>
            ) :
              ""
          }
        </header>
      </div>
      <div className="container">
        {props.children}
      </div>
    </>
  )
}
