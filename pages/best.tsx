import { useEffect, useState } from 'react'
import { subNavMenuType } from '@/types/navMenuType'
import SwiperCore, { Pagination } from 'swiper'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/pagination";
import Config from '@/configs/config.export';
import axios from 'axios';
import BestProductListCard from '@/components/ui/BestProductListCard';

export default function Best() {

    const [swiper, setSwiper] = useState<SwiperCore>();
    const [bestsubnav, setBestSubNav] = useState<subNavMenuType[]>();
    const [slideindex, setSlideIndex] = useState<number>(0)
    const { baseUrl } = Config();

    useEffect(() => {
        axios(`${baseUrl}/api/v1/categoryLarge/all`)
            .then(res => res.data.data)
            .then(data => setBestSubNav(data))
    }, [baseUrl])

    return (
        <>
            <div className='header-top' />
            <div style={{ marginTop: '50px', position: 'fixed', width: '100%', zIndex: '2', background: 'white' }}>
                <div className="header-sub">
                    <nav>
                        <ul>
                            {bestsubnav && bestsubnav.map((nav) => (
                                <li
                                    key={nav.id}
                                    className={slideindex === nav.id - 1 ? "active" : ""}
                                    onClick={() => swiper ? swiper.slideTo(nav.id - 1) : ""}
                                >
                                    {nav.name}
                                </li>
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
                    bestsubnav && bestsubnav.map((nav) => (
                        <>
                            <SwiperSlide>
                                <section className="best-product" key={nav.id}>
                                    <div className="best-product-list">
                                        <BestProductListCard categoryLarge={nav.name} />
                                    </div>
                                </section>
                            </SwiperSlide>
                        </>
                    ))
                }
            </Swiper>
        </>
    )
}
