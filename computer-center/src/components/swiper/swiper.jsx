import React from 'react';
// Import Swiper React components
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import style from "../swiper/Swiper.module.css";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';
// import required modules


import hero from "../../assets/Images/hero.jpg";
 import hero1  from "../../assets/Images/hero1.jpg";
 import hero2  from "../../assets/Images/hero2.jpg";
 import hero3  from "../../assets/Images/hero3.jpg";
 import hero4  from "../../assets/Images/hero4.jpg";
 import hero5  from "../../assets/Images/hero5.jpg";
function MySwiper() {
  return (
    <>
      <SwiperComponent
        spaceBetween={30}
        loop={true} // Enable loop for smooth transitions
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        className={style.mySwiper}
      >
        <SwiperSlide><div className={style.img}><img src={hero} alt="" /></div></SwiperSlide>
        <SwiperSlide><div className={style.img}><img src={hero1} alt="" /></div></SwiperSlide>
        <SwiperSlide><div className={style.img}><img src={hero2} alt="" /></div></SwiperSlide>
        <SwiperSlide><div className={style.img}><img src={hero3} alt="" /></div></SwiperSlide>
        <SwiperSlide><div className={style.img}><img src={hero4} alt="" /></div></SwiperSlide>
        <SwiperSlide><div className={style.img}><img src={hero5} alt="" /></div></SwiperSlide>

      </SwiperComponent>
    </>
  );
}

export default MySwiper;
