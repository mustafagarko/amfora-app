import logo from "../assets/amforalogo.jpeg";

function Footer() {
  return (
    <div className="flex flex-col h-36 z-50 p-4 w-[100vw] bg-[#D2BAA5] justify-between ">
      <div className="flex gap-4">
        <h1 className="text-white font-thin text-2xl">Amfora Wear</h1>
        <img src={logo} className="w-8 h-8 -rotate-45" />
      </div>
      <h1 className="text-white font-thin text-xl">Phone: +7 (234) 567 890</h1>
      <h1 className="text-white font-thin text-xl">
        г. Назрань, республика Ингушетия
      </h1>
    </div>
  );
}

export default Footer;
