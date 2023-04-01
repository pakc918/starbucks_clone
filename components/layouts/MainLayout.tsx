import { bottomNavMenuType, subNavMenuType } from '@/types/navMenuType'
import Link from 'next/link'
import Image from "next/image"
import { useRouter } from 'next/router'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';

import { filterMenuType, filterSubCategoryType, filterType, sizeType, smallCategoryType } from "@/types/header/filterType";
import { headerNavMenus, headerIcons, categoryList } from "@/datas/starbucksStaticDatas";
import { headerMenu } from '@/types/starbucksTypes'

//recoil
import { useRecoilValue } from "recoil";
import { useRecoilState, useSetRecoilState } from 'recoil'
import { cartState } from "../../state/cartState";


import { LoginRes } from '@/types/UserRequest/Response'
import { userIsLoginState, userLoginState } from '@/state/user/atom/userLoginState'
import axios from 'axios'
import Swal from 'sweetalert2'
import ProductCategory from '../widgets/ProductCategory'

//import{ bottomNavData } from 'assets/../datas/navData'
//import SignupModal from '../modals/SignupModal'


export default function MainLayout(props: { children: React.ReactNode }) {

  const [cookies, removecookie] = useCookies(["id"]);
  const router = useRouter();
  console.log(router.pathname)
  console.log()

  const { pathname, query } = useRouter();
  const productPath = pathname.split("/")[1];
  const cartCnt = useRecoilValue(cartState)

  const [navBottomData, setNavBottomData] = useState<bottomNavMenuType[]>()

  const [bestSubNavData, setBestSubNottomNavData] = useState<subNavMenuType[]>()
  const [eventSubNavData, setsubNavBottomData] = useState<subNavMenuType[]>()
  const [headerMenus, setHeaderMenus] = useState<headerMenu[]>(headerNavMenus);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [category, setCategory] = useState<filterMenuType[]>();
  const [sizeList, setSizeList] = useState<sizeType[]>();

  const [subCategory, setSubCategory] = useState<smallCategoryType[]>();
  const [filterList, setFilterList] = useState<filterType[]>([])
  const [isLogin, setIsLogin] = useRecoilState<LoginRes>(userLoginState);


  //[[...""]] => 파일명 : 데이터 값이 없어도 나타나게 함.
  //비교 해야할 값이 숫자면 Number()로 감싸주기

  // 각자의 백엔드 카테고리 url을 적기.
  // useEffect(() => {
  //   axios.get("카테고리-url")
  //   .then((res) =>{
  //     let myData: MenuDataType[] = []
  //     res.data.data.subCategories.forEach((item : headerMenu) => {
  //       myData.push({
  //         id: item.id,
  //         name: item.name,
  //         key:"category"
  //       })
  //     })
  //     setFilterData(myData)
  //   })
  // },[])

  useEffect(() => {
    const myLogin = localStorage.getItem("accessToken");

    if(myLogin && !isLogin.isLogin){
      console.log("로그인 되어있음")
      setIsLogin({
        userNickname: localStorage.getItem("userNickname") || "",
        accessToken: localStorage.getItem("accessToken") || "",
        // refreshToken 사용할때 주석 해제
        // refreshToken: localStorage.getItem("refreshToken") || "",
        isLogin: true
      })
    }
  }, [])

  const [isactive, setIsactive] = useState<boolean>(false)

  useEffect(() => {
    fetch('http://localhost:3001/nav')
      .then(res => res.json())
      .then(data => setNavBottomData(data))
  }, [])

  useEffect(() => {
    fetch('http://localhost:3001/bestsubnav')
      .then(res => res.json())
      .then(data => setBestSubNottomNavData(data))
  }, [])

  useEffect(() => {
    fetch('http://localhost:3001/eventsubnav')
      .then(res => res.json())
      .then(data => setsubNavBottomData(data))
  }, [])

  //logout handler 추가
  const logout = async () => {
    axios.post('http://10.10.10.196:8080/api/v1/users/logout')
    Swal.fire({
      title: '로그아웃 하시겠습니까?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: `확인`,
      denyButtonText: `취소`,
    }).then((res) => {
      // axios.defaults.headers.common[
      //   "Authorization"
      // ] = `Bearer ${isLogin.accessToken}`;
      if (res.isConfirmed) {
        setIsLogin({
          userNickname: "",
          accessToken: "",
          // refreshToken 사용할때 주석 해제
          // refreshToken: "",
          isLogin: false
        })
        localStorage.removeItem("accessToken");
        // refreshToken 사용할때 주석 해제
        // localStorage.removeItem("refreshToken");
        localStorage.removeItem("userNickname");
        let timerInterval: string | number | NodeJS.Timer | undefined;
        Swal.fire({
          html: '로그아웃 중...',
          timer: 1000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
        },
          willClose: () => { 
            clearInterval(Number(timerInterval));
          },
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log('I was closed by the timer');
        }
      });
        location.reload();
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "로그아웃에 실패하였습니다.",
          customClass: {
              confirmButton: 'swal-confirm-button'
          }
      });
      }
    })
    // axios.post('LOGOUT-url', {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     headers: { Authorization: `Bearer ${token}` }
    //   },
    // })
    //   .then((res) => {
    //     removecookie('token', '', { path: '/' });
    //     localStorage.removeItem("token");
    //     localStorage.removeItem("refreshToken");
    //   });
  }

  useEffect(() => {
    axios.get(`http://localhost:3001/size`)
      .then((res) => {
        setSizeList(res.data)
      }).catch((err) => {
        console.log(err)
      })
  }, [])

  useEffect(() => {
    console.log(query.category)
    axios.get(`http://localhost:3001/smallCategory?bigCategory=${query.category}`)
      .then((res) => {
        console.log(res.data)
        setSubCategory(res.data)
      }).catch((err) => {
        console.log(err)
      })
  }, [query.category])

  // useEffect(() => {
  //   console.log("filterList", filterList)
  //   let url = ''

  //   filterList.map((filter) => (
  //     filter.checked ? url += `&${filter.name}=${filter.value}` : ''
  //   ))
  //   router.push(`/listview?category=${query.category}${url}`, undefined, { shallow: true })
  // }, [filterList])

  // const handleFilter = (name: String) => {
  //   setFilterList([])
  //   router.push(`/listview?category=${name}`)
  // }

  const handleSubFilter = (event: ChangeEvent<HTMLInputElement>) => {
    let checker = filterList.find((filter) => filter.value === event.target.value)
    if (checker?.checked === true && event.target.checked === false) {
      let newList = filterList.filter((filter) => filter.value !== event.target.value)
      setFilterList(newList)
    } else {
      setFilterList([...filterList, { name: event.target.name, value: event.target.value, checked: event.target.checked }])
    }
  }

  return (
    <>
      <div className="container">
        <header>
          <div className="header-top">
            <div className="menu-icon" onClick={() => setIsModalOpen(true)}>
              {
                <img src='assets/images/icons/menu.svg' />
              }
            </div>
            <h1><Link href="/">온라인 스토어</Link></h1>
            <nav>
              <ul>
                {
                  headerIcons.map((icon) => (  // && 있으면 해라 라는 뜻 그러면 안정적으로 받아들임
                    icon.name === 'mypage' ?
                      <li key={icon.id}>
                        {isLogin.isLogin ? // boolean으로 처리하려면 변수명을 IS"" 추가한다.
                          (
                              <img src={"/assets/images/icons/logout.png"} onClick={logout} />
                          )
                          :
                          (<Link href={"/login"}><img src={icon.icon} /></Link>)
                        }
                      </li>
                      :
                      icon.name === 'cart' ?
                        <li key={icon.id}>
                          <Link href={icon.link}>
                            <img src={icon.icon} />
                          </Link>
                        </li>
                        :
                        icon.name === 'search' ?
                          <li key={icon.id}>
                            <Link href={icon.link}>
                              <img src={icon.icon} />
                            </Link>
                          </li>
                          : ""
                  ))}
              </ul>
            </nav>
          </div>
          {/* {pathname === "/product" ? (
            <div className="header-bottom">
              <nav>
                <ul>
                  {
                    headerMenus.map((menu) => (
                      <li
                        key={menu.id}
                        className={pathname === menu.link ? "active" : ""}
                      >
                        <Link href={menu.link}>{menu.name}</Link>
                      </li>
                    ))
                  }
                </ul>
              </nav>
            </div>
          ) : ""
          }

          {pathname === "/searchreult" ?
            <div className="header-bottom">

              <nav>
                <ul>
                  {categoryList.map((menu) => (
                    <li
                      key={menu.id}
                      onClick={() => handleFilter(menu.name)}
                    >
                      {menu.name}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            : ""
          }
          {
            subCategory &&

            <div className="header-bottom">
              <nav>
                <ul>
                  {
                    subCategory.map((menu, idx) => (
                      <li key={idx}>
                        <input type='checkbox' name="subCategory" value={`${menu.name}`} onChange={handleSubFilter} />
                        <label>{menu.name}</label>
                      </li>
                    ))
                  }
                </ul>
              </nav>
            </div>
          }
          {
            sizeList && (query.category === "머그/컵" || query.category === "텀블러/보온병") ?

              <div className="header-bottom">
                <nav>
                  <ul>
                    {
                      sizeList.map((menu, idx) => (
                        <li key={idx}>
                          <input type='checkbox' name="size" value={`${menu.name}`} onChange={handleSubFilter} />
                          <label>{menu.name}</label>
                        </li>
                      ))
                    }

                  </ul>
                </nav>
              </div>
              : ""
          } */}
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
                      bestSubNavData && bestSubNavData.map(bestsubnav => (  // && 있으면 해라 라는 뜻 그러면 안정적으로 받아들임
                        <li
                          key={bestsubnav.id}
                          className={router.pathname === bestsubnav.link ? "active" : ""}
                        >
                          <Link href={bestsubnav.link}>{bestsubnav.name}</Link>
                        </li>
                      ))
                    }
                  </ul>
                </nav>
              </div>
            ) :
              ""
          }
          {/* {
            router.pathname === '/event' ? (
              <div className="header-sub">
                <nav>
                  <ul>
                    {
                      eventSubNavData && eventSubNavData.map(eventsubnav => (
                        <li
                          key={eventsubnav.id}
                          className={router.pathname === eventsubnav.link && isactive ? "active" : ""}
                        >{eventsubnav.name}</li>
                      ))
                    }
                  </ul>
                </nav>
              </div>
            ) :
              ""
          } */}
          {
            router.pathname === '/listview' ? (
              <ProductCategory />
            ) : ""
          }
        </header>
      </div >
      <div className="container">
        {props.children}
      </div>
    </>
  )
}
