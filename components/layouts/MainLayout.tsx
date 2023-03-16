
import { IconType } from '@/types/headerIconDataType'
import { bottomNavMenuType, subNavMenuType } from '@/types/navMenuType'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
//import{ bottomNavData } from 'assets/../datas/navData'
import SignupModal from '../modals/SignupModal'

export default function MainLayout(props: { children: React.ReactNode }) {

  const router = useRouter()
  console.log(router.pathname)

  const [navBottomData, setNavBottomData] = useState<bottomNavMenuType[]>()
  const [headerLeftIconData, setheaderLeftIconData] = useState<IconType[]>()
  const [headerRightIconData, setheaderRightIconData] = useState<IconType[]>()
  const [eventSubNavData, setsubNavBottomData] = useState<subNavMenuType[]>()
  const [bestSubNavData, setBestSubNottomNavData] = useState<subNavMenuType[]>()

  useEffect(() => {
    fetch('http://localhost:3001/nav')
      .then(res => res.json())
      .then(data => setNavBottomData(data))
  }, [])

  useEffect(() => {
    fetch('http://localhost:3001/iconRight')
      .then(res => res.json())
      .then(data => setheaderRightIconData(data))
  }, [])

  useEffect(() => {
    fetch('http://localhost:3001/iconLeft')
      .then(res => res.json())
      .then(data => setheaderLeftIconData(data))
  }, [])

  useEffect(() => {
    fetch('http://localhost:3001/eventsubnav')
      .then(res => res.json())
      .then(data => setsubNavBottomData(data))
  },[])

  useEffect(() => {
    fetch('http://localhost:3001/bestsubnav')
      .then(res => res.json())
      .then(data => setBestSubNottomNavData(data))
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
              {
                headerLeftIconData && headerLeftIconData.map(iconLeft => (  // && 있으면 해라 라는 뜻 그러면 안정적으로 받아들임
                  <li
                    key={iconLeft.id}
                  >
                    <Link href={iconLeft.link}><img src={iconLeft.imgUrl} /></Link>
                  </li>
                ))
              }
            </div>
            <h1><Link href="/">온라인 스토어</Link></h1>
            <nav>
              <ul>
                {
                  headerRightIconData && headerRightIconData.map(iconRight => (  // && 있으면 해라 라는 뜻 그러면 안정적으로 받아들임
                    <li 
                      key={iconRight.id}
                    >
                      <Link href={iconRight.link}><img src={iconRight.imgUrl} /></Link>
                    </li>
                  ))
                }
              </ul>
            </nav>
          </div>
          {
            navBottomData && navBottomData.map(nav => (
              router.pathname === nav.link ? (
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
              ) : ""))
          }
          {
            router.pathname === '/best' ? (
              <div className="header-sub">
                <nav>
                  <ul>
                    {
                      bestSubNavData && bestSubNavData.map(bestnav => (  // && 있으면 해라 라는 뜻 그러면 안정적으로 받아들임
                        <li
                          key={bestnav.id}
                          className={""}
                        >
                          {bestnav.name}
                        </li>
                      ))
                    }
                  </ul>
                </nav>
              </div>
            ) : router.pathname === '/event' ? (
              <div className="header-sub">
                <nav>
                  <ul>
                    {
                      eventSubNavData && eventSubNavData.map(subnav => (
                        <li
                          key={subnav.id}
                          className={""}
                        >{subnav.name}</li>
                      ))
                    }
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
