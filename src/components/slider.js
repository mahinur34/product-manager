"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import slides from "@/helpers/data/slider.json";
import Image from "next/image";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


export const Slider = () => {
    return (
        <Swiper
            spaceBetween={50} //aralarında ne kadar boşluk olsun
            slidesPerView={1} //ekranda kaç tane gözüksün
            autoplay={{
                delay: 2500, //2.5 sn
                disableOnInteraction: false, //fare üzerine geldiğinde hareket etme durumu
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true} //sağlı sollu ok işaretleri
            modules={[Autoplay, Pagination, Navigation]}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {slides.map((slide) => (
                <SwiperSlide key={slide.id} style={{ height: "500px" }}>
                    <Image
                        src={`/images/${slide.image}`}
                        fill
                        alt="Slide"
                        style={{ objectFit: "cover" }} //image yi bulunduğu yere oturtur
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};