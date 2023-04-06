import React, { useEffect, useState } from 'react'
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper'

import "swiper/css";
import "swiper/css/pagination";
import EventProductListCard from '@/components/ui/EventProductListCard';
import axios from 'axios';
import Config from '@/configs/config.export';
import { eventListType } from '@/types/fetchDataType';
import ImageSizeReturn from '@/components/ui/ImageSizeReturn';
export default function Event()  {

  const { baseUrl } = Config();

  const [slideindex, setSlideIndex] = useState<number>(0)
  const [eventSubNavData, setsubNavBottomData] = useState<eventListType[]>()
  const [swiper, setSwiper] = useState<SwiperCore>();

  useEffect(() => {
    axios(`${baseUrl}/api/v1/event/all`)
      .then((res) => res.data)
      .then(data => setsubNavBottomData(data.data))
  }, [baseUrl])
  console.log('asd', eventSubNavData)

  return (
    <>
      <div className='header-top' />
      <div style={{ marginTop: '50px', position: 'fixed', width: '100%', zIndex: '2', background: 'white' }}>
        <div className="header-sub">
          <nav>
            <ul>
              {
                eventSubNavData && eventSubNavData.map((nav) => (
                  
                    <li
                      key={nav.id}
                      className={slideindex === nav.id - 1 ? "active" : ""}
                      onClick={() => swiper ? swiper.slideTo(nav.id - 1) : ""}
                    >{nav.name}</li>
                  
                ))
              }
            </ul>
          </nav>
        </div>
      </div>

      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        onSlideChange={(swiper) => (setSlideIndex(swiper.activeIndex))}
        onSlideChangeTransitionStart={() => (scrollTo(0, 0))}
        onSwiper={setSwiper}
        style={{ marginTop: '107px' }}
        autoHeight={true}
      >
        {
          eventSubNavData && eventSubNavData.map((item) => (
            <SwiperSlide key={item.id}>
              <section className="special_section_image" >
                <ImageSizeReturn imgUrl={item.imgUrl} imgAlt={item.imgAlt} />
              </section>
              <section className="special_section_product">
                <div className="special-recommand-product-list">
                  <EventProductListCard key={item.id} productTitle={item.name} />
                </div>
              </section>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  )
}
