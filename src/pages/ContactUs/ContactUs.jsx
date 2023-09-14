import { Icon } from "@iconify/react";
import logo from "../../assets/amforalogo.jpeg";
import bgPic from "../../assets/item1-min.jpg";

function ContactUs() {
  return (
    <section className="page mt-10 h-[100vh] " id="page">
      <figure className=" w-full h-full relative">
        <img
          src={bgPic}
          className="fixed object-cover h-full z-10 w-full"
        ></img>
        <h1 className="text-6xl z-20 left-1/2 transform -translate-x-1/2 top-[25vh] text-white uppercase absolute text-center">
          Связаться с нами
        </h1>
        <div className="flex gap-2 flex-col bg-white z-20 absolute w-full h-1/2 top-1/2">
          <div className="flex justify-center">
            <img
              src={logo}
              className="w-16 h-16 transform -translate-y-1/2 -rotate-45"
            />
          </div>
          <div className="px-14 flex md:flex-row flex-col gap-6 justify-between items-center">
            <div className="flex gap-2 items-center">
              <Icon icon={"skill-icons:instagram"} width={45} height={45} />
              <h1 className="font-thin text-3xl"> @amfora.wear </h1>
            </div>
            <div className="flex gap-2 items-center">
              <Icon icon={"logos:whatsapp-icon"} width={45} height={45} />
              <h1 className="font-thin text-3xl"> +7 123 456 789 </h1>
            </div>
            <div className="flex gap-2 items-center">
              <Icon icon={"logos:telegram"} width={45} height={45} />
              <h1 className="font-thin text-3xl"> @amfora </h1>
            </div>
          </div>
        </div>
      </figure>
    </section>
  );
}

export default ContactUs;
