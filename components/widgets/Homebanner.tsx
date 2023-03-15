// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination'
import { Autoplay, Pagination } from 'swiper';

export default () => {
    return (
        <>
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
                    <img src="https://sui.ssgcdn.com/cmpt/banner/202303/2023030915075182882556571355_608.jpg
" width="409px" height="329px" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://sui.ssgcdn.com/cmpt/banner/202302/2023021414492406572929669292_156.jpg
" width="409px" height="329px" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://sui.ssgcdn.com/cmpt/banner/202211/2022112112452862354469556446_969.jpg
" width="409px" height="329px" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://sui.ssgcdn.com/cmpt/banner/202301/2023012616190885231624724162_694.jpg
" width="409px" height="329px" alt="" />
                </SwiperSlide>
            </Swiper>
        </>
    );
};
