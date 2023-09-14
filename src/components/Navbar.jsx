import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import logo from "../assets/amforalogo.jpeg";

function Navbar() {
  const [menuOpened, setMenuOpened] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const page = document.getElementById(`page`);

    document.body.style.overflow = menuOpened ? `hidden` : ``;

    page.style.filter = menuOpened ? `blur(4px)` : ``;
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setMenuOpened(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuOpened]);

  const handleMenu = function (e) {
    e.preventDefault();
    setMenuOpened(!menuOpened);
  };
  return (
    <nav
      ref={navbarRef}
      className="flex z-50 justify-between p-4 fixed inset-0 h-16 bg-white blur-none "
    >
      <div className="flex items-center justify-center">
        <Link to="/contact-us">
          <button className="underline w-[200px]">Contact us</button>
        </Link>
      </div>
      <Link to={`/`}>
        <div className="flex gap-4 items-center justify-center w-[200px]">
          <img src={logo} className="w-8 h-8 transform  -rotate-45" />{" "}
          <button className="font-sans font-bold text-lg ">AMFORA</button>
        </div>
      </Link>

      <button
        onClick={(e) => handleMenu(e)}
        className="flex gap-2 w-[200px] justify-center items-center"
      >
        <Icon icon="material-symbols:menu" height={24} width={24} />
        <p>MENU</p>
      </button>
      <div
        className={`right-0 absolute w-[25vw] h-[100vh] bg-white transition-transform duration-1000 transform px-4 pt-4 flex flex-col gap-4 ${
          menuOpened ? "translate-x-0" : "translate-x-[100%]"
        }`}
      >
        <h1
          onClick={(e) => {
            e.preventDefault();
            setMenuOpened(!menuOpened);
          }}
          className="font-thin text-2xl hover:font-bold cursor-pointer"
        >
          &larr; Close
        </h1>
        <h1 className="font-thin text-2xl hover:font-bold cursor-pointer">
          Здесь
        </h1>

        <h1 className="font-thin text-2xl hover:font-bold cursor-pointer">
          Тоже{" "}
        </h1>
        <h1 className="font-thin text-2xl hover:font-bold cursor-pointer">
          Что-то будет{" "}
        </h1>
      </div>
    </nav>
  );
}

export default Navbar;
