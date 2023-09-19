import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default ({ item }) => {
  return (
    <Swiper
      className="w-full h-full"
      spaceBetween={0}
      slidesPerView={1}
      modules={[Navigation, Pagination]}
      navigation={{
        nextEl: ".arrowNext",
        prevEl: ".arrowPrev",
      }}
      pagination={{
        clickable: true,
      }}
      loop={true}
      id="swiper"
    >
      <SwiperSlide className="w-full h-full">
        <figure className="w-full h-full">
          <img
            src={item.pic1}
            className="object-cover w-full h-full md:hover:scale-105 transition-transform"
          ></img>
        </figure>
      </SwiperSlide>
      <SwiperSlide className="w-full h-full">
        <figure className="w-full h-full">
          <img
            src={item.pic2}
            className="object-cover w-full h-full  md:hover:scale-105 transition-transform"
          ></img>
        </figure>
      </SwiperSlide>
      <button
        className="arrowNext"
        onClick={(e) => {
          e.stopPropagation();
        }}
      />
      <button
        className="arrowPrev"
        onClick={(e) => {
          e.stopPropagation();
        }}
      />
    </Swiper>
  );
};
