
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import "../css/pagination-swipe.css"
import Image from "next/image";

const images = [
  "/slide-images/banner2.png",
  "/slide-images/banner3.png",
  "/slide-images/banner1.png",
];

export function Slidehome() {
    return(
        <div className="w-full h-[80vh]">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ dynamicBullets: true, clickable: true,}}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="w-full h-full"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index} className="flex justify-center items-center">
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                width={1920}
                height={800}
                className="object-cover h-auto"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    )
}
