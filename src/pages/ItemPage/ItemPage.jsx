import { items } from "../../components/DataItems";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { Icon } from "@iconify/react";

export default function ItemPage() {
  const { uuid } = useParams();
  const [item] = items.filter((item) => item.id === uuid);
  const navigate = useNavigate();
  const otherItems = items.filter((item) => item.id !== uuid);
  //   useEffect(() => {
  //     console.log(uuid);
  //     console.log(item);
  //   }, []);

  return (
    <section className="w-screen h-screen" id="page">
      <button
        onClick={(e) => {
          e.preventDefault();
          navigate(`/`);
        }}
        className="absolute top-[10%] left-[3%] rounded-full border-[1px] p-2 border-black"
      >
        <Icon icon="fluent-mdl2:back" width={25} height={25} />
      </button>
      <div className="w-[80vw] h-[80vh] shadow-2xl absolute top-[53%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-between">
        <figure className="h-full w-[40%]">
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
            <SwiperSlide>
              <figure>
                <img
                  src={item.pic1}
                  className="object-cover hover:scale-105 transition-transform"
                ></img>
              </figure>
            </SwiperSlide>
            <SwiperSlide>
              <figure>
                <img
                  src={item.pic2}
                  className="object-cover  hover:scale-105 transition-transform"
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
        </figure>
        <div className={`w-[1px] h-[90%] my-[2.5%] bg-[${item.colorCode}]`} />
        <div className="w-[50%] h-full flex flex-col py-[3vh]">
          <h1 className="text-4xl">{item.title}</h1>
          <p>
            {item.price.toString().slice(0, 2) +
              ` ` +
              `${item.price.toString().slice(2)} `}
            ₽
          </p>
          <div className="flex flex-col gap-2">
            <p>Цвета</p>
            <div className="flex gap-2">
              {otherItems.map((item) => {
                return (
                  <button
                    className={`w-8 h-8 rounded-full bg-[${item.colorCode}] `}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(`/item/${item.id}`);
                    }}
                  >
                    <Icon
                      icon="ph:circle-thin"
                      className="w-8 h-8 text-white"
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
