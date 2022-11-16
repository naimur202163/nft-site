import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../../images/slider-1.webp";
import img2 from "../../../images/slider-2.webp";
import img3 from "../../../images/slider-3.webp";
import img4 from "../../../images/slider-4.webp";

// import required modules
import { Pagination } from "swiper";

export default function Slider() {
  return (
    <div className="mx-auto">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={0}
        loop={"true"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="w-[100%]" src={img1} alt="jd" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-[100%]" src={img2} alt="jd" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-[100%]" src={img3} alt="jd" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-[100%]" src={img4} alt="jd" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
