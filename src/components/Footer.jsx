import amforaLogo from "../assets/amforaLogo.png";

function Footer() {
  return (
    <div className="flex h-[25vh] bg-gray-500 justify-between">
      <div className=" p-4 flex flex-col justify-between">
        <h1 className="text-white font-thin text-2xl">Amfora LLC</h1>
        <h1 className="text-white font-thin text-xl">
          {" "}
          Phone: +1 (234) 567 890
        </h1>
        <h1 className="text-white font-thin text-xl">
          All rights reserved tuda syuda
        </h1>
      </div>
      <img src={amforaLogo} className="w-36 p-4 h-full" />
    </div>
  );
}

export default Footer;
