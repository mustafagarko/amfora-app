import item1 from "../../assets/item1-min.jpg";
import item2 from "../../assets/item2-min.jpg";
import item3 from "../../assets/item3-min.jpg";
import item1_2 from "../../assets/item1-2.jpg";
import item2_2 from "../../assets/item2-2.jpg";

import item3_2 from "../../assets/item3-2.jpg";

import Swiper from "../../components/Swiper";

import { useState } from "react";

const items = [
  {
    id: `111111`,
    pic1: item1,
    pic2: item1_2,
    title: `Платье такое-то такое-то 1`,
    price: 15990,
    description: `Brand new camel! Only 2 left in stock`,
  },
  {
    id: `222222`,
    pic1: item2,
    pic2: item2_2,
    title: `Платье такое-то такое-то 2`,
    price: 16990,
    description: `This camel is dying so here comes the huge discount!`,
  },
  {
    id: `333333`,
    pic1: item3,
    pic2: item3_2,
    title: `Платье такое-то такое-то 3`,
    price: 17490,
    description: `Buy 5 get 1 free!`,
  },
];

function HomepageItems() {
  return (
    <section>
      <h1 className="text-6xl text-center  pt-[3vh] font-semibold gradient">
        Новая коллекция
      </h1>

      <div className="flex md:flex-row flex-col justify-between  md:w-screen w-full md:h-[80vh] h-[160vh]  px-[2vw] pt-[4vh] mb-[2vh]">
        {items.map((item, i) => {
          return (
            <div
              className="md:w-[30vw] md:h-full flex flex-row md:flex-col gap-4 shadow-xl "
              key={item.id}
            >
              <Swiper item={item} />

              <div className="flex flex-col gap-1 px-4">
                <p className="font-light text-xl">{item.title}</p>
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
