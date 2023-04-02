import { useEffect, useState } from 'react'
import { subNavMenuType } from '@/types/navMenuType'
import SwiperCore, { Pagination } from 'swiper'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/pagination";

export default function best() {

    const [swiper, setSwiper] = useState<SwiperCore>();
    const [bestsubnav, setBestSubNav] = useState<subNavMenuType[]>();
    const [slideindex, setSlideIndex] = useState<number>(0)

    useEffect(() => {
        fetch(`http://localhost:3001/bestsubnav`)
            .then(res => res.json())
            .then(data => setBestSubNav(data))
    }, [])

    return (
        <>
            {/* {
                bestListData && bestListData.map(best => (
                    <BestWidget
                        key={best.id}
                        bestId={best.bestId}
                    />
                ))
            } */}
            <div className='header-top' />
            <div style={{ marginTop: '50px', position: 'fixed', width: '100%', zIndex: '2', background: 'white' }}>
            <div className="header-sub">
                <nav>
                    <ul>
                        {bestsubnav && bestsubnav.map((best) => (
                            <li
                                key={best.id}
                                className={slideindex === best.id - 1 ? "active" : ""}
                                onClick={() => swiper ? swiper.slideTo(best.id - 1) : ""}
                            >
                                {best.name}
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
            >
                <SwiperSlide>
                    <section className="best-product">
                        <div className="best-product-list">
                            {/* 아이템 불러올 자리 */}
                            <div className="product-item">
                                <p className="count">1</p>
                                <div className="item_img">
                                    <img src="https://shop-phinf.pstatic.net/20230215_64/1676424666767CNRjg_JPEG/77560500579518181_629284917.jpg?type=m510" />
                                </div>
                                <div className="item_info">
                                    <p className="item-new">New</p>
                                    <p>부드러운 티라미수 롤케이크</p>
                                    <p className="item-price"><span>19,900원</span></p>
                                </div>
                            </div>
                            <div className="product-item">
                                <p className="count">2</p>
                                <div className="item_img">
                                    <img src="https://shop-phinf.pstatic.net/20221230_87/1672371248920KrduT_JPEG/73507032581228289_908311394.jpg?type=m510" />
                                </div>
                                <div className="item_info">
                                    <p>부드러운 고구마 생크림 케이크</p>
                                    <p className="item-price"><span>33,000원</span></p>
                                </div>
                            </div>
                            <div className="product-item">
                                <p className="count">3</p>
                                <div className="item_img">
                                    <img src="https://shop-phinf.pstatic.net/20221230_87/1672371248920KrduT_JPEG/73507032581228289_908311394.jpg?type=m510" />
                                </div>
                                <div className="item_info">
                                    <p>부드러운 고구마 생크림 케이크</p>
                                    <p className="item-price"><span>33,000원</span></p>
                                </div>
                            </div>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide>2</SwiperSlide>
                <SwiperSlide>3</SwiperSlide>
                <SwiperSlide>4</SwiperSlide>
                <SwiperSlide>5</SwiperSlide>
                <SwiperSlide>6</SwiperSlide>
            </Swiper>
        </>
    )
}
