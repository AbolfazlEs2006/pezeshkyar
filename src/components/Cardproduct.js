import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Container } from 'react-bootstrap';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/bundle';
import Allproduct from './Allproduct';

import { Link } from 'react-router-dom';

// import required modules
import { Pagination } from 'swiper/modules';
import './Product.css'

export default function ProductCard () {
  return (
    <>
        <Container>
      <Swiper
        slidesPerView={3}
        spaceBetween={60}
        pagination={{
            clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mt-3 mb-5 Services-swiper swiper-product"
        >
            {Allproduct.map(product => (
                <SwiperSlide className='Product-swip' key={product.id}>
                    <Link to={`/product/${product.id}`}>
                    <div>
                        <div>
                                <img src={product.img} />
                            <div>
                                <h1>{product.title}</h1>
                                <p>{product.des}</p>
                            </div>
                        </div>
                        <div className='add-product'>
                        <button>
                            <LocalGroceryStoreOutlinedIcon />
                            </button>
                            <h4>{product.price}</h4>
                        </div>
                    </div>
                    </Link>
                </SwiperSlide>
            ))}
      </Swiper>
    </Container></>
  )
}
