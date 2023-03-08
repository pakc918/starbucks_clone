import Head from 'next/head'
import { NextPageWithLayout } from './_app'
import MainLayout from '@/components/layouts/MainLayout'
import RecommandWidget from '@/components/widgets/RecommandWidget'
import { useEffect, useState } from 'react'
import { mainEventListType } from '@/types/fetchDataType'

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
        <title>Home</title>
      </Head>
      <section id="event-banner">
        <div className="event-banner">
          <div className="event-banner__item">
            <div className="event-banner__item__img">
              <img src="../images/banner/banner01.png" width="100%" height="100%" alt="" />
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
      
      <section id="recommand-md">
        <div>
          <h2>TREND TAG</h2>
          <div className="recommand-product-list3">
            <div className="recommand-product-item2">
              <div className="recommand-product-item__img">
                <img src="assets/images/products/05.png" alt="바리스타 춘식" />
              </div>
              <div className="recommand-product-item__info">
                <p className="item-title2">바리스타 춘식</p>
              </div>
            </div>
            <div className="recommand-product-item2">
              <div className="recommand-product-item__img">
                <img src="assets/images/products/08.png" alt="리드" />
              </div>
              <div className="recommand-product-item__info">
                <p className="item-title2">리드</p>
              </div>
            </div>
            <div className="recommand-product-item2">
              <div className="recommand-product-item__img">
                <img src="assets/images/products/09.png" alt="리유저블" />
              </div>
              <div className="recommand-product-item__info">
                <p className="item-title2">리유저블</p>
              </div>
            </div>
            <div className="recommand-product-item2">
              <div className="recommand-product-item__img">
                <img src="assets/images/products/10.png" alt="케이스" />
              </div>
              <div className="recommand-product-item__info">
                <p className="item-title2">케이스</p>
              </div>
            </div>
            <div className="recommand-product-item2">
              <div className="recommand-product-item__img">
                <img src="assets/images/products/11.png" alt="핸디 데스크" />
              </div>
              <div className="recommand-product-item__info">
                <p className="item-title2">핸디 데스크</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
