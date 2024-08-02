import Header from "./components/Header";
import { IconContext } from "react-icons/lib";
import Hero from "./components/Hero";

const App = () => {
  return (
    <>
      <IconContext.Provider value={{ color: "white", size: "30px" }}>
        <div className="flex flex-col h-screen justify-between">
        <Header />
        <Hero/>
        <div>
        <button className="text-white">Latest Works</button>
       </div>
        </div>
        
      </IconContext.Provider>
    </>
  );
}

export default App;
