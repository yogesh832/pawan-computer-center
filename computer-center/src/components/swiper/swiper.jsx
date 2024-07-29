import React from 'react';
// Import Swiper React components
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import style from "../swiper/Swiper.module.css";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
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
        <SwiperSlide><span className={style.img}><IoCallOutline /></span></SwiperSlide>
        <SwiperSlide><span className={style.img}><MdOutlineEmail /></span></SwiperSlide>
        <SwiperSlide><span className={style.img}><IoLogoYoutube /></span></SwiperSlide>
        <SwiperSlide><span className={style.img}><FaTwitter /></span></SwiperSlide>
        <SwiperSlide><span className={style.img}><FaTelegram /></span></SwiperSlide>
        <SwiperSlide><span className={style.img}><FaLinkedinIn /></span></SwiperSlide>
        <SwiperSlide><span className={style.img}><FaLinkedinIn /></span></SwiperSlide>
        <SwiperSlide><span className={style.img}><IoCallOutline /></span></SwiperSlide>
        <SwiperSlide><span className={style.img}><FaInstagram /></span></SwiperSlide>
      </SwiperComponent>
    </>
  );
}

export default MySwiper;
