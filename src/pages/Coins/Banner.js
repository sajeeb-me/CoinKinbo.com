import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./CSS/Banner.css";
import { Autoplay, Parallax, Pagination, Navigation } from "swiper";
import BannerImage from '../../assets/images/banner.jpg'


const Banner = () => {
    return (
        <div className="mt-10 px-4 lg:px-32">
            <Swiper
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}
                speed={1000}
                parallax={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Parallax, Pagination, Navigation]}
                className="mySwiper"
            >
                <div
                    slot="container-start"
                    className="parallax-bg"
                    style={{
                        backgroundImage: `url(${BannerImage})`,
                    }}
                    data-swiper-parallax="-23%"
                ></div>
                <SwiperSlide className="px-12 py-20 lg:py-28 lg:px-20">
                    <div className="text-3xl lg:text-6xl font-semibold lg:w-1/2 mb-2 lg:mb-5" data-swiper-parallax="-300">
                        Buy top rated Crypto from us!
                    </div>
                    <div className="text-xs lg:text-sm font-thin lg:tracking-widest" data-swiper-parallax="-300">
                        We are successfully serving best rate since 2020.
                    </div>
                </SwiperSlide>
                <SwiperSlide className="px-12 py-20 lg:py-28 lg:px-20">
                    <div className="text-3xl lg:text-6xl font-semibold lg:w-1/2 mb-2 lg:mb-5" data-swiper-parallax="-300">
                        The first ever instant service!
                    </div>
                    <div className="text-xs lg:text-sm font-thin lg:tracking-widest" data-swiper-parallax="-300">
                        We are successfully serving best rate since 2020.
                    </div>
                </SwiperSlide>
                <SwiperSlide className="px-12 py-20 lg:py-28 lg:px-20">
                    <div className="text-3xl lg:text-6xl font-semibold lg:w-1/2 mb-2 lg:mb-5" data-swiper-parallax="-300">
                        Best rate in your Country!
                    </div>
                    <div className="text-xs lg:text-sm font-thin lg:tracking-widest" data-swiper-parallax="-300">
                        We are successfully serving best rate since 2020.
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;