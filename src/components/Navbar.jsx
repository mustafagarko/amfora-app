import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import logo from "../assets/amforalogo.jpeg";
import { useNavigate } from "react-router-dom";

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
      className="flex z-50 justify-between p-4 fixed inset-0 h-16 bg-white blur-none"
    >
      <div className="md:flex items-center justify-center md:visible hidden">
        <Link to="/contact-us">
          <button className="underline w-[200px]">Связаться с нами</button>
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
        <p>Меню</p>
      </button>
      <ul
        className={`right-0 absolute md:w-[25vw] w-screen h-[100vh] bg-white transition-transform duration-1000 transform px-4 pt-4 flex flex-col gap-4 ${
          menuOpened ? "translate-x-0" : "translate-x-[100%]"
        }`}
      >
        <li>
          <h1
            onClick={(e) => {
              e.preventDefault();
              setMenuOpened(!menuOpened);
            }}
            className="font-thin text-2xl hover:font-bold cursor-pointer underline underline-offset-8"
          >
            &larr; Закрыть
          </h1>
        </li>
        <li>
          <Link
            to={`contact-us`}
            onClick={() => {
              setMenuOpened(!menuOpened);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <h1 className="font-thin text-2xl hover:font-bold cursor-pointer">
              Контакты
            </h1>
          </Link>
        </li>
        <li>
          <Link
            to={`/`}
            onClick={() => {
              setMenuOpened(!menuOpened);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <h1 className="font-thin text-2xl hover:font-bold cursor-pointer">
              На главную
            </h1>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
