import camel1 from "../../assets/camel1.jpeg";
import camel2 from "../../assets/camel2.jpeg";
import camel3 from "../../assets/camel3.jpeg";

import { useState } from "react";

const items = [
  {
    id: `111111`,
    pic1: camel1,
    title: `Camel Abdul`,
    price: 150,
    description: `Brand new camel! Only 2 left in stock`,
  },
  {
    id: `222222`,
    pic1: camel2,
    title: `Camel Mahmoud`,
    price: 20,
    description: `This camel is dying so here comes the huge discount!`,
  },
  {
    id: `333333`,
    pic1: camel3,
    title: `Six Pack`,
    price: 600,
    description: `Buy 5 get 1 free!`,
  },
];

function HomepageItems() {
  const [isHovered, setIsHovered] = useState(``);
  return (
    <div className="flex gap-16 justify-between p-8 w-full h-[100vh]">
      {items.map((item, i) => {
        return (
          <div key={item.id} className="flex flex-col gap-6 ">
            <div className="w-full h-1/2 object-cover shadow-lg flex flex-col gap-8">
              <img
                src={item.pic1}
                className="w-full  h-full shadow-lg hover:scale-105 transition-transform"
              ></img>
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-thin">{item.title}</p>
              <p className="font-bold">{item.price}$</p>
              <p className="font-thin">{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default HomepageItems;
