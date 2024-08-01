import Header from "./components/Header";
import { IconContext } from "react-icons/lib";
import Hero from "./components/Hero";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <IconContext.Provider value={{ color: "white", size: "30px" }}>
        <Header />
        {/* <Link to={"https://github.com/"}>aoifhaiofhiasifocnhas</Link> */}
        <div>
        <Hero/>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default App;
