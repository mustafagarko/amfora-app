import { items } from "../../components/DataItems";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { Icon } from "@iconify/react";

export default function ItemPage() {
  const { uuid } = useParams();
  const [item] = items.filter((item) => item.id === uuid);
  const navigate = useNavigate();
  const otherItems = items.filter((item) => item.id !== uuid);
  const [showModal, setShowModal] = useState(false);

  function handleClick(e) {
    e.preventDefault();
    setShowModal(!showModal);
  }

  return (
    <section className="`w-screen md:h-screen h-[120vh] " id="page">
      <section
        onClick={(e) => {
          if (showModal && e.target.id !== `modal`) setShowModal(false);
        }}
        className={`w-full h-full ${showModal ? `blur-lg` : ``}`}
      >
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            navigate(`/`);
          }}
          className="absolute top-[10%] left-[3%] rounded-full border-[1px] p-3 z-40 border-black md:bg-transparent bg-white"
        >
          <Icon icon="fluent-mdl2:back" width={25} height={25} />
        </button>
        <div className="md:w-[80vw] w-[90%] md:h-[80vh] h-[120vh] shadow-2xl absolute top-[53%] left-1/2 -translate-x-1/2 md:-translate-y-1/2 -translate-y-[35%] flex md:flex-row flex-col justify-between">
          <figure className="h-[80vh] md:w-[40%] w-full">
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
          <div
            className={`md:w-[1px] w-full md:h-[90%] h-[1px] md:my-[2.5%]`}
            style={{ backgroundColor: item.colorCode }}
          />
          <div className="md:w-[50%] w-full h-full flex flex-col justify-between">
            <div className="w-full h-full flex flex-col gap-2 py-[3vh]">
              <div className="flex md:flex-col md:gap-0 gap-4 flex-row items-center md:items-start">
                <h1 className="text-4xl">{item.title}</h1>
                <p className="text-xl underline underline-offset-2">
                  {item.price.toString().slice(0, 2) +
                    ` ` +
                    `${item.price.toString().slice(2)} `}
                  ₽
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <p>Цвета:</p>
                <div className="flex gap-2">
                  {otherItems.map((item) => {
                    return (
                      <button
                        key={item.id}
                        style={{ backgroundColor: item.colorCode }}
                        className={`w-8 h-8 rounded-full `}
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
              <p>{item.description}</p>
              <p>Материал: {item.material}</p>
            </div>
            <div className="mb-[4vh]">
              <button
                style={{ backgroundColor: item.colorCode }}
                className={`w-[140px] h-[50px]  text-white uppercase font-light active:scale-95`}
                onClick={(e) => handleClick(e)}
              >
                Купить
              </button>
            </div>
          </div>
        </div>
      </section>
      <div
        id="modal"
        className={
          showModal
            ? `md:w-[50vw] md:h-[50vh] w-[80vw] h-[60vh] bg-white fixed top-1/2 left-1/2  -translate-y-1/2 -translate-x-1/2 z-40 shadow-lg border-2 border-[#F3E4DC] flex flex-col gap-20 p-10`
            : `hidden`
        }
      >
        <p className="text-center text-3xl gradient">Выберите способ связи</p>
        <div className="flex md:flex-row flex-col h-full justify-between">
          <a
            href={`https://ig.me/m/amfora.wear`}
            className="flex flex-row-reverse md:flex-col gap-4 items-center justify-center"
          >
            <p className="gradient">Instagram</p>
            <Icon icon={"skill-icons:instagram"} width={45} height={45} />
          </a>
          <a
            href={`https://wa.me/+79373773423?text=Здравствуйте!+Заинтересовал+данный+товар+-+https://amfora-app.vercel.app/item/${item.id}`}
            className="flex  flex-row-reverse md:flex-col gap-4 items-center justify-center"
          >
            <p className="gradient">WhatsApp</p>
            <Icon icon={"logos:whatsapp-icon"} width={45} height={45} />
          </a>
          <a
            href="tel:+79176773047"
            className="flex flex-row-reverse md:flex-col gap-4 items-center justify-center"
          >
            <p className="gradient">Позвонить</p>
            <Icon
              icon={"ic:baseline-phone"}
              className="text-green-500"
              width={45}
              height={45}
            />
          </a>
        </div>
        <button
          className="w-fit h-fit"
          onClick={(e) => {
            setShowModal(!showModal);
          }}
        >
          <Icon
            icon="material-symbols:close"
            className="absolute top-5 right-5 w-8 h-8"
          />
        </button>
      </div>
    </section>
  );
}
