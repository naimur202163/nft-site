import React from "react";
import { Swiper } from 'swiper/react';
import f1 from '../../../images/f-1.jpg'
import f2 from '../../../images/f-2.jpg'
import f3 from '../../../images/f-3.jpg'
import f4 from '../../../images/f-3.jpg'
import f5 from '../../../images/f-5.png'
import f6 from '../../../images/f-6.webp'
import f7 from '../../../images/f-7.jpg'
import f8 from '../../../images/f8.webp'
import f9 from '../../../images/f4.jpg'
import f10 from '../../../images/f-9.jpg'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import  { Pagination, Navigation } from "swiper";
import './style.css'
import { SwiperSlide } from 'swiper/react';
export default function CategorySlider() {
  return (
    <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl my-20">
      <div>
        <Swiper
          slidesPerView={9}
          spaceBetween={10}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div>
              
            </div>
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
