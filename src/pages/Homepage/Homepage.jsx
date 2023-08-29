import desert from "../../assets/desert.jpeg";
import HomepageItems from "./HopepageItems";
function Homepage() {
  return (
    <div>
      <div className=" ">
        <figure className="relative ">
          <img src={desert} className="object-cover w-[100vw] h-[100vh]"></img>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center flex flex-col gap-2">
            <h1 className="text-white text-5xl font-sans">
              Some random header
            </h1>
            <p className="text-white font-thin">
              brief introduction / this and that / please buy our dress
            </p>
          </div>
        </figure>
      </div>
      <HomepageItems />
    </div>
  );
}

export default Homepage;
