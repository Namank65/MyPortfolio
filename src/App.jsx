import { IconContext } from "react-icons/lib";
import logo from "./assets/logo3.png";
import { BsTwitterX } from "react-icons/bs";

function App() {
  return (
    <>
    <IconContext.Provider
      value={{ color: 'white', size: '50px' }}
    >
      <div>
        
        <BsTwitterX/>
        <img src={logo} alt="Logo" className="w-48" />
      </div>
      {/* <h1 className="border text-cyan-50 border-b-2 mt-7">helo</h1> */}
    </IconContext.Provider>
    </>
  );
}

export default App;
