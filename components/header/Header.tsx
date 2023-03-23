import React, { ChangeEvent, EventHandler, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
// component
import LoginModal from "../../pages/product/Login";
import SignupModal from "../modals/Signup";
// recoil
import { useRecoilValue } from "recoil";
import { cartState } from "../../state/cartState";

import { headerMenu } from "@/types/starbucksTypes";
import { filterMenuType, filterSubCategoryType, filterType, sizeType, smallCategoryType } from "@/types/header/filterType";

import { headerNavMenus, headerIcons, categoryList } from "../../datas/starbucksStaticDatas";
import axios from "axios";

function Header() {

    const router = useRouter();
    const { pathname, query } = useRouter();
    const productPath = pathname.split("/")[1];
    const cartCnt = useRecoilValue(cartState)

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [isSignupModalOpen, setIsSignupModalOpen] = useState<boolean>(false);
    const [headerMenus, setHeaderMenus] = useState<headerMenu[]>(headerNavMenus);
    const [category, setCategory] = useState<filterMenuType[]>();
    const [sizeList, setSizeList] = useState<sizeType[]>();

    const [subCategory, setSubCategory] = useState<smallCategoryType[]>();
    const [filterList, setFilterList] = useState<filterType[]>([])


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

    useEffect(() => {
        console.log("filterList", filterList)
        let url = ''

        filterList.map((filter) => (
            filter.checked ? url += `&${filter.name}=${filter.value}` : ''
        ))
        router.push(`/listview?category=${query.category}${url}`, undefined, { shallow: true })
    }, [filterList])

    const handleFilter = (name: String) => {
        setFilterList([])
        router.push(`/listview?category=${name}`)
    }

    const handleSubFilter = (event: ChangeEvent<HTMLInputElement>) => {
        let checker = filterList.find((filter) => filter.value === event.target.value)
        if (checker?.checked === true && event.target.checked === false) {
            let newList = filterList.filter((filter) => filter.value !== event.target.value)
            setFilterList(newList)
        } else {
            setFilterList([...filterList, { name: event.target.name, value: event.target.value, checked: event.target.checked }])
        }
    }


    // const handleSubFilter = (subCategoryName:String) => {
    //   router.push(`/listview?category=${query.category}&subCategory=${subCategoryName}`, undefined, { shallow: true })
    // }

    // const hanelSizeFilter = () => {
    //   router.push(`/listview?category=${query.category}&subCategory=${query.subCategory}&size=${query.size}`, undefined, { shallow: true })
    // }



    // console.log(isModalOpen)
    return (
        <>
            <LoginModal
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
            />
            <SignupModal
                isSignupModalOpen={isSignupModalOpen}
                setIsSignupModalOpen={setIsSignupModalOpen}
            />
            <header>
                <div className="header-top">
                    <div className="menu-icon" onClick={() => setIsModalOpen(true)}>
                        <Image
                            src="/assets/images/icons/menu.svg"
                            alt="menu"
                            width={20}
                            height={20}
                        />
                    </div>
                    <h1>
                        <Link href="/">온라인 스토어</Link>
                    </h1>
                    <nav>
                        <ul>
                            {headerIcons.map((icon) => (
                                icon.name === 'mypage' ?
                                    <li
                                        onClick={() => setIsSignupModalOpen(true)}
                                        key={icon.id}
                                    >
                                        <Image
                                            src={icon.icon}
                                            alt={icon.name}
                                            width={20}
                                            height={20}
                                        />
                                    </li>

                                    :

                                    icon.name === 'cart' ?

                                        <li key={icon.id}>
                                            <Link href={icon.link}>
                                                <p className="cart-badge">{cartCnt}</p>
                                                <Image
                                                    src={icon.icon}
                                                    alt={icon.name}
                                                    width={20}
                                                    height={20}
                                                />
                                            </Link>
                                        </li>

                                        :
                                        <li key={icon.id}>
                                            <Link href={icon.link}>
                                                <Image
                                                    src={icon.icon}
                                                    alt={icon.name}
                                                    width={20}
                                                    height={20}
                                                />
                                            </Link>
                                        </li>
                            ))}
                        </ul>
                    </nav>
                </div>
                {pathname === "/product" ? (
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
                ) : null
                }

                {pathname === "/listview" ?
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
                    : null
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
                        : null
                }
            </header>
        </>
    );
}

export default Header;
