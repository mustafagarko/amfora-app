import { items } from "../../components/DataItems";
import Swiper from "../../components/Swiper";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function HomepageItems() {
  const navigate = useNavigate();
  return (
    <section>
      <h1 className="text-6xl text-center  pt-[3vh] font-semibold gradient">
        Новая коллекция
      </h1>

      <div className="flex md:flex-row flex-col justify-between  md:w-screen w-full md:h-[80vh] h-fit gap-10  px-[2vw] pt-[4vh] mb-[2vh]">
        {items.map((item, i) => {
          return (
            <div
              className="relative md:w-[30vw] md:h-full flex flex-row md:flex-col md:gap-4 gap-2 shadow-xl cursor-pointer "
              key={item.id}
              onClick={() => {
                navigate(`item/${item.id}`);
              }}
            >
              <Swiper item={item} className="w-full" />
              <div className="absolute left-0 w-full bg-white h-24 bottom-0 opacity-50 z-30 md:hidden p-2">
                <p className="font-light text-4xl  hover:underline">
                  {item.title}
                </p>
                <p className=" text-2xl pb-1">
                  {item.price.toString().slice(0, 2) +
                    ` ` +
                    `${item.price.toString().slice(2)} `}
                  ₽
                </p>
              </div>
              <div className="md:flex hidden flex-col gap-1 px-4 md:w-full">
                <p className="font-light text-xl  hover:underline">
                  {item.title}
                </p>
                <p className=" pb-1">
                  {item.price.toString().slice(0, 2) +
                    ` ` +
                    `${item.price.toString().slice(2)} `}
                  ₽
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default HomepageItems;
