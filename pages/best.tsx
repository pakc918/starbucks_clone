import Head from 'next/head'
import { NextPageWithLayout } from './_app'
import MAinLayout from '@/components/layouts/MainLayout'
import BestWidget from '@/components/widgets/BestWidget'
import { useEffect, useState } from 'react'
import { bestProductListType } from '@/types/fetchDataType'

const Home: NextPageWithLayout = () => {

    const [bestListData, setbestListData] = useState<bestProductListType[]>();

    useEffect(() => {
        fetch(`http://localhost:3001/best-event-list`)
            .then(res => res.json())
            .then(data => setbestListData(data))
    }, [])

    return (
        <>
            {
                bestListData && bestListData.map(best => (
                    <BestWidget
                        key={best.id}
                        bestId={best.bestId}
                    />
                ))
            }
        </>
    )
}

export default Home