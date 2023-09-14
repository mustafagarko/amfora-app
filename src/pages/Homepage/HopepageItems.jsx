import { items } from "../../components/DataItems";
import Swiper from "../../components/Swiper";
import ItemPage from "../ItemPage/ItemPage";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function HomepageItems() {
  const navigate = useNavigate();
  return (
    <section>
      <h1 className="text-6xl text-center  pt-[3vh] font-semibold gradient">
        Новая коллекция
      </h1>

      <div className="flex md:flex-row flex-col justify-between  md:w-screen w-full md:h-[80vh] h-[160vh]  px-[2vw] pt-[4vh] mb-[2vh]">
        {items.map((item, i) => {
          return (
            <div
              className="md:w-[30vw] md:h-full flex flex-row md:flex-col md:gap-4 gap-2 shadow-xl cursor-pointer "
              key={item.id}
              onClick={() => {
                navigate(`item/${item.id}`);
              }}
            >
              <Swiper item={item} className="md:w-full w-[70%]" />

              <div className="flex flex-col md:gap-1 md:px-4 md:w-full w-[30%]">
                <p className="font-light md:text-xl text-sm hover:underline">
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
