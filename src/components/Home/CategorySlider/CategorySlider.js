import React from "react";
import "swiper/css";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/pagination";
import { Pagination } from "swiper";

const data = [
  {
    id: 1,
    img: "https://i.ibb.co/Z2hJPxb/woman.jpg",
    title: "Woman",
  },
  {
    id: 2,
    img: "https://i.ibb.co/pw72Xbx/man.jpg",
    title: "Man",
  },
  {
    id: 3,
    img: "https://i.ibb.co/VJtqhMn/sports.jpg",
    title: "Watch",
  },
  {
    id: 4,
    img: "https://i.ibb.co/sP9MRpb/watch.jpg",
    title: "Watch",
  },
  {
    id: 5,
    img: "https://i.ibb.co/vq6DSkx/kid.jpg",
    title: "Kid",
  },
  {
    id: 6,
    img: "https://i.ibb.co/VJtqhMn/sports.jpg",
    title: "Sports",
  },
  {
    id: 7,
    img: "https://i.ibb.co/vkc2RYB/sunglass.jpg",
    title: "Sunglass",
  },
  {
    id: 8,
    img: "https://i.ibb.co/4T9KM4t/bags.jpg",
    title: "Bags",
  },
];
export default function CategorySlider() {
  return (
    <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
      <div>
        <h2 className="font-bold  text-3xl my-5 ">Shop By Category</h2>
      </div>
      <div>
        <Swiper
          slidesPerView={6}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          loop="true"
          modules={[Pagination]}
          className="mySwiper"
        >
          {data.map((item) => (
            <div>
              <SwiperSlide className="my-4">
                <img
                  className="h-full w-full rounded-md hover:bg-black hover:opacity-70"
                  src={item.img}
                />
                <h2 className="text-center font-bold  font-opens text-xl my-2">
                  {item.title}
                </h2>
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
