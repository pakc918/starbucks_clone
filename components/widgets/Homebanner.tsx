// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination'
import { Autoplay, Pagination } from 'swiper';
import Image from 'next/image';
import ImageSizeReturn from '../ui/ImageSizeReturn';

export default function Homebanner () {
    return (
        <section id="event-banner">
            <div className="event-banner">
                <div className="event-banner__item">
                    <div className="event-banner__item__img">
                        <Swiper
                            pagination={true}
                            modules={[Pagination, Autoplay]}
                            spaceBetween={30}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                        >
                            <SwiperSlide>
                                <div style={{width:"100%", height:"auto"}}>
                                    <ImageSizeReturn imgUrl="https://sui.ssgcdn.com/cmpt/banner/202303/2023030915075182882556571355_608.jpg" imgAlt='발렌타인'/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div style={{width:"100%", height:"auto"}}>
                                    <ImageSizeReturn imgUrl="https://sui.ssgcdn.com/cmpt/banner/202302/2023021414492406572929669292_156.jpg" imgAlt='벚꽃'/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div style={{width:"100%", height:"auto"}}>
                                    <ImageSizeReturn imgUrl="https://sui.ssgcdn.com/cmpt/banner/202211/2022112112452862354469556446_969.jpg" imgAlt='바쁜 일상'/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div style={{width:"100%", height:"auto"}}>
                                    <ImageSizeReturn imgUrl="https://sui.ssgcdn.com/cmpt/banner/202301/2023012616190885231624724162_694.jpg" imgAlt='밸런타인'/>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
};
