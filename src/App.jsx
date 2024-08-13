import Header from "./components/Header";
import { IconContext } from "react-icons/lib";
import Hero from "./components/Hero";
import { FaArrowDownLong } from "react-icons/fa6";
import ParticlesComponent from "./components/Particles";

const App = () => {
  return (
    <>
      <ParticlesComponent />
        <div className="flex flex-col h-[80vh] sm:h-[88vh] justify-between">
          <Header />
          <Hero />
          <div className="flex justify-center text-white ">
            <button className="py-1 absolute sm:py-2 px-2 sm:px-8 font-medium sm:font-bold rounded-md bg-gradient-to-l from-[#8c52ff] to-[#341671]  hover:scale-110 duration-150 group">
              Latest Works{" "}
              <FaArrowDownLong className=" text-white size-5  ml-9 sm:ml-[5rem] lg:ml-[2.35rem] absolute group-hover:-bottom-8 ease-in-out duration-150 mt-2 sm:mt-4" />
            </button>
          </div>
        </div>
    </>
  );
};

export default App;
