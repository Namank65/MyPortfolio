import Header from "./components/Header";
import { IconContext } from "react-icons/lib";
import Hero from "./components/Hero";
import { FaArrowDownLong } from "react-icons/fa6";
// import particlesJS from "particles.js";

const App = () => {

  /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
// particlesJS.load('particles-js', '../particles.json', function() {
//   console.log('callback - particles.js config loaded');
// });
  return (
    <>
      <IconContext.Provider value={{ color: "white", size: "30px" }}>
        <div className="flex flex-col h-screen justify-between">
          <Header />
          <Hero />
          <div className="flex justify-center text-white mb-10">
          <button className="py-1 sm:py-2 px-2 sm:px-8 font-medium sm:font-bold rounded-md bg-gradient-to-l from-[#8c52ff] to-[#341671] hover:from-[#7641de] hover:scale-110 duration-150 group">Latest Works <FaArrowDownLong className=" ml-9 sm:ml-[5rem] lg:ml-9 absolute group-hover:-bottom-8 ease-in-out duration-150"/></button>
          </div>
          <particlesJS/>
        </div>
      </IconContext.Provider>
    </>
  );
};

export default App;
