"use client"
import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import { ProductCard } from './product-card';

export const RelatedProducts = ({data}) => { //dışarıdan data alacak
  return (
  <div>

    <Swiper
    spaceBetween={0}
    slidesPerView={10}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
    breakpoints={{
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
    }}v
  >
    {data.map((item)=>(
        <SwiperSlide key={item.id}>
            <ProductCard product={item}/>
        </SwiperSlide>
    ))}
    
    
  </Swiper>
  </div>
  )
}
