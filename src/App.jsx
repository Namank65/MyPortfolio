import Header from "./components/Header";
import { IconContext } from "react-icons/lib";
import Hero from "./components/Hero";

const App = () => {
  return (
    <>
      <IconContext.Provider value={{ color: "white", size: "30px" }}>
        <div className="flex flex-col h-screen justify-between">
          <Header />
          <Hero />
          <div className="flex justify-center">
            <button className="text-white py-2 px-4 font-extrabold rounded-md bg-gradient-to-l from-[#8c52ff] to-[#341671]">Latest Works</button>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
};

export default App;
