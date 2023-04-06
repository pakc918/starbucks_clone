import { categoryList, menuListDepth2, menuListDepth3, menuListDepth4 } from "@/datas/navData";
import { filterDataType, MenuDataType } from '@/types/filter/filterTypes';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { seacrchKeyword } from "@/types/search/searchKeywords";
import axios from "axios";
import SearchFilterMenuList from "../ui/SearchFilterMenuList";
import Config from "@/configs/config.export";

export default function SearchProductCategory() {
    const router = useRouter();

    const [filterData, setFilterDatas] = useState<filterDataType[]>([]);
    const [menuList, setMenuList] = useState<MenuDataType[]>([]);
    const [menuList2, setMenuList2] = useState<MenuDataType[]>([]);
    const [menuList3, setMenuList3] = useState<MenuDataType[]>([]);
    const query = router.query.query || '';
    const [searchresults, setSearchResults] = useState<seacrchKeyword[]>([]);
    const { baseUrl } = Config();

    useEffect(() => {
        console.log("필터링데이터", filterData);
        let queryUrl = "";
        filterData.forEach((item) => {
            queryUrl += `&${item.key}=${item.value}`;
        });
        router.push(`/searchresult?category=${router.query.category}${queryUrl}`);
        // console.log(menuList);
    }, [filterData, router]);

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

    useEffect(() => {
        const fetchSearchResults = async () => {
            try {
                const response = await axios.get(`${baseUrl}/api/v1/product/get?query=${query}`);
                const products = response.data;
                setSearchResults(products);
                
                
            } catch (error) {
                console.error(error);
            }
        };

        if (query) {
            fetchSearchResults();
        }
    }, [query, baseUrl]);


    return (
        <>
            <div className="header-bottom" style={{ marginTop: 70 }}>
                <div className="ft-top">
                    <p className="ft-information">&quot;{query}&quot;의 검색결과</p>
                </div>
            </div>
            <SearchFilterMenuList
                data={categoryList}
                filterFile={filterData}
                setFilter={setFilterDatas}
            />
            {
                menuList.length > 0 && (
                    <SearchFilterMenuList
                        data={menuList}
                        filterFile={filterData}
                        setFilter={setFilterDatas}
                    />
                )}
            {
                menuList2.length > 0 && (
                    <SearchFilterMenuList
                        data={menuList2}
                        filterFile={filterData}
                        setFilter={setFilterDatas}
                    />
                )
            }
            {
                menuList3.length > 0 && (
                    <SearchFilterMenuList
                        data={menuList3}
                        filterFile={filterData}
                        setFilter={setFilterDatas}
                    />
                )
            }
        </>
    )
}
