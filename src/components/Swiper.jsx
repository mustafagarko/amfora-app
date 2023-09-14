import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/navigation";
import "../index.css";
import "swiper/css/pagination";

export default ({ item }) => {
  return (
    <Swiper
      className="w-full h-full"
      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={() => console.log(item)}
      modules={[Navigation, Pagination]}
      navigation={{
        nextEl: ".arrowNext",
        prevEl: ".arrowPrev",
      }}
      pagination={{ clickable: true }}
      loop={true}
      id="swiper"
    >
      <SwiperSlide>
        <figure>
          <img
            src={item.pic1}
            className="object-cover shadow-lg hover:scale-105 transition-transform"
          ></img>
        </figure>
      </SwiperSlide>
      <SwiperSlide>
        <figure>
          <img
            src={item.pic2}
            className="w-full object-cover h-full shadow-lg hover:scale-105 transition-transform"
          ></img>
        </figure>
      </SwiperSlide>
      <button className="arrowNext" />
      <button className="arrowPrev" />
      {/* <Navigation />
      <Pagination /> */}
    </Swiper>
  );
};
