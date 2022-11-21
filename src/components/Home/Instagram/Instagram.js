import React from "react";
import "./style.css";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
const data = [
  {
    id: 1,
    img: "https://i.ibb.co/QmW4Z43/4.jpg",
  },
  {
    id: 2,
    img: "https://i.ibb.co/HrKw889/2.jpg",
  },
  {
    id: 3,
    img: "https://i.ibb.co/y41t9wY/3.jpg",
  },
  {
    id: 4,
    img: "https://i.ibb.co/QmW4Z43/4.jpg",
  },
  {
    id: 5,
    img: "https://i.ibb.co/zRDB3VY/6.jpg",
  },
  {
    id: 6,
    img: "https://i.ibb.co/HrKw889/2.jpg",
  },
];
export default function Instagram() {
  return (
    <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl my-5">
      <Swiper className="mySwiper" spaceBetween={10} slidesPerView={5}>
        <div className="gird grid-cols-4">
          {data.map((item) => (
            <div>
              <SwiperSlide>
                <img className="rounded-md" src={item.img} />
              </SwiperSlide>
            </div>
          ))}
        </div>
      </Swiper>
    </div>
  );
}
