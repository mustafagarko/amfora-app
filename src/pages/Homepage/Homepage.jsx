import bgHero from "../../assets/heroBg-min.jpg";
// import Footer from "../../components/Footer";
import HomepageItems from "./HomepageItems";
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
          <img src={bgHero} className=" object-cover w-[100vw] h-[100vh]"></img>
          <div className="absolute top-1/2 left-1/2 justify-center items-center transform -translate-x-1/2 -translate-y-1/2 text-center flex flex-col gap-2">
            <h1 className="text-white text-7xl font-sans bg-[#262126] bg-opacity-50 px-2">
              Amfora Wear
            </h1>
            <p className="text-white font-thin bg-[#262126] px-2 w-fit">
              designed for people
            </p>
          </div>
        </figure>
      </div>
      <HomepageItems />
      {/* <Footer /> */}
    </div>
  );
}

export default Homepage;
