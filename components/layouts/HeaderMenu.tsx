import React, { useState } from 'react'

export default function HeaderMenu(props: { data?: any; handleFilter?: any; }) {

    // const[data, setData] = useState<any>(props.data)

    if (props.data.subcategory !== undefined) {
        console.log(props.data.subcategory)
        // setData(props.data.subcategory)
    }

    return (
        // <div className="header-bottom">
        //     <nav>
        //         <ul>
        //             {
        //                 props.data.subcategory.map((menu: any) => (
        //                     <li
        //                         key={menu.id}
        //                         onClick={() => props.handleFilter(menu.name)}
        //                     >
        //                     { menu.name }
        //                     </li>
        //                 ))
        //             }
        //         </ul>
        //     </nav>
        // </div>
        1
    )
}
