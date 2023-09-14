import bgHero from "../../assets/heroBg-min.jpg";
// import Footer from "../../components/Footer";
import HomepageItems from "./HopepageItems";
import { useState, useEffect } from "react";
function Homepage() {
  // const [menuOpened, setMenuOpened] = useState(false);
  // useEffect(() => {
  //   document.body.style.overflow = menuOpened ? `hidden` : ``;
  // }, [menuOpened]);

  return (
    <div className="page" id="page">
      <div>
        {/* <figure className={menuOpened ? `relative  blur-sm` : `relative`}> */}
        <figure className="relative">
          <img src={bgHero} className="object-cover w-[100vw] h-[100vh]"></img>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center flex flex-col gap-2">
            <h1 className="text-white text-5xl font-sans">
              Some random header
            </h1>
            <p className="text-white font-thin">
              brief introduction / this and that / please buy our dress
            </p>
          </div>
          {/* <div
            className={
              menuOpened
                ? `absolute z-40 inset-0 w-[100vw] h-[100vh]  bg-transparent blur-xl overflow-y-hidden`
                : `hidden`
            }
          /> */}
        </figure>
      </div>
      <HomepageItems />
      {/* <Footer /> */}
    </div>
  );
}

export default Homepage;
