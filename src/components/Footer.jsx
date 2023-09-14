import amforaLogo from "../assets/amforaLogo.png";
import logo from "../assets/amforalogo.jpeg";

function Footer() {
  return (
    <div className="flex md:flex-row flex-col h-[25vh] absolute z-30 w-[100vw] bg-[#D2BAA5] justify-between mt-[5vh]">
      <div className=" p-4 flex flex-col md:gap-0 gap-4 justify-between">
        <div className="flex gap-4">
          <h1 className="text-white font-thin text-2xl">Amfora LLC</h1>
          <img src={logo} className="w-8 h-8 -rotate-45" />
        </div>
        <h1 className="text-white font-thin text-xl">
          Phone: +1 (234) 567 890
        </h1>
        <h1 className="text-white font-thin text-xl">
          All rights reserved tuda syuda
        </h1>
      </div>
    </div>
  );
}

export default Footer;
