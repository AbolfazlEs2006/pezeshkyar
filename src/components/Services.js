import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Container } from 'react-bootstrap';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import FavoriteIcon from '@mui/icons-material/Favorite';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/bundle';

import './Services.css';
// import required modules
import { Pagination } from 'swiper/modules';

export default function App() {

  return (
    <>
    <Container>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
            clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mt-5 mb-5 Services-swiper"
        >
        <SwiperSlide className='services-swip'>
            <div>
                <div>
                        <img src='./img/thooth_prev_ui.png' />
                    <div>
                        <h1>دندان پزشکی</h1>
                        <p>بهترین مواد اولیه</p>
                    </div>
                </div>
                <div>
                    <p>
                    لورم ایپسوم متن ساختگی با
                     تولید سادگی ناا تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهایمفهوم از صنعت چاپ و با
                    </p>
                </div>
                <button> مشاهده بیشتر <i><KeyboardArrowLeftIcon /></i></button>
            </div>
        </SwiperSlide>
        <SwiperSlide className='services-swip'>
            <div>
                <div>
                    <img src='./img/Heartout.webp' />
                    <div>
                        <h1>قلب و عروق</h1>
                        <p>بهترین مواد اولیه</p>
                    </div>
                </div>
                <div>
                    <p>
                    لورم ایپسوم متن ساختگی با
                     تولید سادگی ناا تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهایمفهوم از صنعت چاپ و با
                    </p>
                </div>
                <button> مشاهده بیشتر <i><KeyboardArrowLeftIcon /></i></button>
            </div>
        </SwiperSlide>
        <SwiperSlide className='services-swip'>
        <div>
                <div>
                        <img src='./img/virus.webp' />
                    <div>
                        <h1>تست کرونا فوری</h1>
                        <p>تست در سریع ترین زمان</p>
                    </div>
                </div>
                <div>
                    <p>
                    لورم ایپسوم متن ساختگی با
                     تولید سادگی ناا تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهایمفهوم از صنعت چاپ و با
                    </p>
                </div>
                <button> مشاهده بیشتر <i><KeyboardArrowLeftIcon /></i></button>
            </div>
        </SwiperSlide>
        <SwiperSlide className='services-swip'>
        <div>
                <div>
                        <img src='./img/Microscope.webp' />
                    <div>
                        <h1>چکاپ فوری</h1>
                        <p>مورد اعتماد تمام بیمه ها</p>
                    </div>
                </div>
                <div>
                    <p>
                    لورم ایپسوم متن ساختگی با
                     تولید سادگی ناا تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهایمفهوم از صنعت چاپ و با
                    </p>
                </div>
                <button> مشاهده بیشتر <i><KeyboardArrowLeftIcon /></i></button>
            </div>
        </SwiperSlide>
      </Swiper>
    </Container>
    </>
  );
}
