import { categoryList, menuListDepth2, menuListDepth3, menuListDepth4 } from "@/datas/navData";
import { filterDataType, MenuDataType } from '@/types/filter/filterTypes';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import FilterMenuList from '../ui/FilterMenuList'

export default function ProductCategory() {
    const router = useRouter();

    const [filterData, setFilterDatas] = useState<filterDataType[]>([]);
    const [menuList, setMenuList] = useState<MenuDataType[]>([]);
    const [menuList2, setMenuList2] = useState<MenuDataType[]>([]);
    const [menuList3, setMenuList3] = useState<MenuDataType[]>([]);

    useEffect(() => {
        console.log("필터링데이터", filterData);
        let queryUrl = "";
        filterData.forEach((item) => {
            queryUrl += `&${item.key}=${item.value}`;
        });
        router.push(`/listview?category=${router.query.category}${queryUrl}`);
        // console.log(menuList);
    }, [filterData]);

    useEffect(() => {
        setMenuList(
            menuListDepth2.find((item) => item.name === router.query.category)
                ?.data || []
        ); // 1번 메뉴의 서브메뉴
    }, [router]);

    useEffect(() => {
        setMenuList2(
            menuListDepth3.find((item2) => item2.name === router.query.category)
                ?.data || []
        ); // 1번 메뉴의 서브메뉴2
    }, [router]);

    useEffect(() => {
        setMenuList3(
            menuListDepth4.find((item3) => item3.name === router.query.category)
                ?.data || []
        ); // 1번 메뉴의 서브메뉴3
    }, [router]);


    return (
        <>
            <FilterMenuList
                data={categoryList}
                filterFile={filterData}
                setFilter={setFilterDatas}
            />
            {
                menuList.length > 0 && (
                    <FilterMenuList
                        data={menuList}
                        filterFile={filterData}
                        setFilter={setFilterDatas}
                    />
                )}
            {
                menuList2.length > 0 && (
                    <FilterMenuList
                        data={menuList2}
                        filterFile={filterData}
                        setFilter={setFilterDatas}
                    />
                )
            }
            {
                menuList3.length > 0 && (
                    <FilterMenuList
                        data={menuList3}
                        filterFile={filterData}
                        setFilter={setFilterDatas}
                    />
                )
            }
        </>
    )
}
