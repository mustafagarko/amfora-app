import { Icon } from "@iconify/react";
import mailbox from "../../assets/mailbox.jpeg";
import Footer from "../../components/Footer";
import logo from "../../assets/amforalogo.jpeg";

function ContactUs() {
  return (
    <section className="mt-10 h-[100vh]">
      <figure className="relative w-full h-full">
        <img src={mailbox} className="fixed h-full z-10 w-full"></img>
        <h1 className="text-6xl z-20 left-1/2 transform -translate-x-1/2 top-[30vh] text-white uppercase absolute">
          Связаться с нами
        </h1>
        <div className="flex gap-2 flex-col bg-white z-20 absolute w-full h-1/2 top-1/2">
          <div className="flex justify-center">
            <img src={logo} className="w-16 h-16 transform -translate-y-1/2" />
          </div>
          <div className="px-14 flex  justify-between items-center">
            <div className="flex gap-2 items-center">
              <Icon icon={"skill-icons:instagram"} width={45} height={45} />
              <h1 className="font-thin text-3xl"> @amfora </h1>
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
