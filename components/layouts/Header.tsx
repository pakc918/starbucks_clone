import { filterMenuType, filterSubCategoryType } from '@/types/header/filterType';
import { useRouter } from 'next/router'
import React, { useState } from 'react'

function Header() {

    const { pathname } = useRouter();
    consst[headerMenus, setHeaderMenus] = useState<headerMenu[]>([] as [hedaerNavMenus]);
    const [category, setCategory] = useState<filterMenuType[]>([]);
    const [subcategory, setSubCategory] = useState<filterSubCategoryType[]>([]);

    const handleFilter = (name: String) => {
        console.log (categoryList.filter((item) => item.name === name)[0])
        Router.push(`/listview/category=${name}`)
    }


    if (pathname === "/listview") {
        //console.log("listView")
        setHeaderMenus(categoryList)
    }
    return (
        <div>Header</div>
    )
}
export default Header