import Head from 'next/head'
import { NextPageWithLayout } from './_app'
import MainLayout from '@/components/layouts/MainLayout'
import RecommandWidget from '@/components/widgets/RecommandWidget'
import { useEffect, useState } from 'react'
import { mainEventListType } from '@/types/fetchDataType'
import Homebanner from '@/components/widgets/Homebanner'


const Home: NextPageWithLayout = () => {

  const [eventListData, setEventListData] = useState<mainEventListType[]>();
  useEffect(() => {
    fetch('http://localhost:3001/main-event-list')
    .then(res => res.json())
    .then(data => setEventListData(data))
  },[])

  return (
    <>
      <Head>
        <title>StarBucks Clone Site</title>
      </Head>
      <section id="event-banner">
        <div className="event-banner">
          <div className="event-banner__item">
            <div className="event-banner__item__img">
              <Homebanner />
            </div>
          </div>
        </div>
      </section>
      {
        eventListData && eventListData.map( event => (
          <RecommandWidget
            key={event.id}
            title = {event.title}
            eventId = {event.eventId}
          />
        ))
      }
      
    </>
  )
}

export default Home
