import { Icon } from "@iconify/react";

function Navbar() {
  return (
    <nav className="flex z-50 justify-between p-4 fixed inset-0 h-16 bg-white">
      <div className="flex items-center justify-center">
        <button className="underline w-[200px]">Contact us</button>
      </div>
      <div className="flex gap-2 items-center justify-center w-[200px]">
        <Icon icon="game-icons:column-vase" height={24} width={24} />
        <button className="font-sans font-bold text-lg ">AMFORA</button>
      </div>

      <button className="flex gap-2 w-[200px] justify-center items-center">
        <Icon icon="material-symbols:menu" height={24} width={24} />
        <p>MENU</p>
      </button>
    </nav>
  );
}

export default Navbar;
