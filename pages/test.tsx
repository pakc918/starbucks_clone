import React, { useEffect, useState } from 'react'

export default function test() {

    const [list,setList] = useState<string>()

    useEffect(()=>{
        fetch(`http://10.10.10.104:8080/api/v1/product/get/all`)
        .then(res=>res.json())
        .then(data=>setList(data[0].name))
    },[])

    console.log('asd',list)

    return (
        <>
        <div style={{marginTop:"200px"}}>{list}</div>
        </>
    )
}
