import { Icon } from "@iconify/react";
import mailbox from "../../assets/mailbox.jpeg";
import Footer from "../../components/Footer";
import logo from "../../assets/amforalogo.jpeg";

function ContactUs() {
  return (
    <section className="mt-10 h-[100vh]">
      <figure className="relative w-full h-full">
        <img src={mailbox} className="fixed h-full z-10 w-full"></img>
        <div className="flex gap-2 flex-col bg-white z-20 absolute w-full h-1/2 top-1/2">
          <div className="flex justify-center">
            <img src={logo} className="w-16 h-16 transform -translate-y-1/2" />
          </div>
          <div className="pl-8 flex  justify-between">
            <div className="flex gap-2">
              <Icon icon={"skill-icons:instagram"} width={25} height={25} />
              <h1 className="font-thin"> @amfora </h1>
            </div>
            <div className="flex gap-2">
              <Icon icon={"logos:whatsapp-icon"} width={25} height={25} />
              <h1 className="font-thin"> +7 123 456 789 </h1>
            </div>
            <div className="flex gap-2">
              <Icon icon={"logos:telegram"} width={25} height={25} />
              <h1 className="font-thin"> @amfora </h1>
            </div>
          </div>
        </div>

        <h1>Phone: +7 123 456 789</h1>
        <></>
      </figure>
    </section>
  );
}

export default ContactUs;
