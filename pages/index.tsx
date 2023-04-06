import Head from 'next/head'
import { NextPageWithLayout } from './_app'
import RecommandWidget from '@/components/widgets/RecommandWidget'
import { useEffect, useState } from 'react'
import { eventListType, mainEventListType } from '@/types/fetchDataType'
import Config from '@/configs/config.export'
import axios from 'axios'
import Homebanner from '@/components/widgets/Homebanner'


const Home: NextPageWithLayout = () => {

  const {baseUrl} = Config();

  const [eventListData, setEventListData] = useState<eventListType[]>();
  useEffect(() => {
    axios(`${baseUrl}/api/v1/event/all`)
      .then(res => res.data.data)
      .then(data => setEventListData(data))
  }, [baseUrl])

  return (
    <>
      <Homebanner/>
      {
        eventListData && eventListData.map(event => (
          <RecommandWidget
            key={event.id}
            title={event.name}
          />
        ))
      }

    </>
  )
}

export default Home
