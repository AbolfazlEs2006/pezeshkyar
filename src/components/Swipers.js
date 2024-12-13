import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Container } from 'react-bootstrap';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/bundle';
import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function Swipers () {
  return (
    <>
    <Container className='sw-container'>
    
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        // pagination={{
          //   clickable: true,
          // }}
          modules={[Pagination]}
          className="mySwiper mt-3"
          >
        <SwiperSlide><> لیزر پوست</></SwiperSlide>
        <SwiperSlide>ماسک صورت</SwiperSlide>
        <SwiperSlide>دندان پزشکی</SwiperSlide>
        <SwiperSlide>ایمپلنت دندان</SwiperSlide>
        <SwiperSlide>درمان آراتروز</SwiperSlide>
        <SwiperSlide>اورتوپد</SwiperSlide>
        <SwiperSlide>تزریق ژل</SwiperSlide>
        <SwiperSlide>پاکسازی </SwiperSlide>
        <SwiperSlide>جوان سازی </SwiperSlide>
      </Swiper>
        </Container>
    </>
  );
}
