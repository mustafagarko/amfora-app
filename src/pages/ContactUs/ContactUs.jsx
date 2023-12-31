import { Icon } from "@iconify/react";
import logo from "../../assets/amforalogo.jpeg";
import bgPic from "../../assets/item1-min.jpg";
import { useEffect } from "react";

function ContactUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="relative page mt-10 h-[100vh] " id="page">
      <figure className="w-full h-full">
        <img src={bgPic} className="object-cover h-full z-10 w-full"></img>
        <h1 className="md:text-6xl text-5xl z-20 left-1/2 transform -translate-x-1/2 top-[25vh] text-white uppercase absolute text-center bg-gray-500 bg-opacity-30">
          Связаться с нами
        </h1>
        <div className="flex gap-2 flex-col bg-white z-20 absolute w-full h-[50vh] bottom-0">
          <div className="flex justify-center">
            <img
              src={logo}
              className="w-16 h-16 transform -translate-y-1/2 -rotate-45"
            />
          </div>
          <div className="px-14 flex md:flex-row flex-col gap-6 justify-between items-center">
            <a
              href={`https://ig.me/m/amfora.wear`}
              className="flex gap-2 items-center"
            >
              <Icon icon={"skill-icons:instagram"} width={45} height={45} />
              <h1 className="font-thin text-3xl"> @amfora.wear </h1>
            </a>
            <a
              href={`https://wa.me/+79962751073`}
              className="flex gap-2 items-center"
            >
              <Icon icon={"logos:whatsapp-icon"} width={45} height={45} />
              <h1 className="font-thin text-3xl"> WhatsApp</h1>
            </a>
            <a href="tel:+79962751073" className="flex gap-2 items-center">
              <Icon
                icon={"ic:baseline-phone"}
                className="text-green-500"
                width={45}
                height={45}
              />
              <h1 className="font-thin text-3xl"> Позвонить </h1>
            </a>
          </div>
        </div>
      </figure>
    </section>
  );
}

export default ContactUs;
