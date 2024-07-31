import { IconContext } from "react-icons/lib";
import logo from "./assets/logo3.png";
import { BsTwitterX } from "react-icons/bs";
import { FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";

function App() {
  return (
    <>
    <IconContext.Provider
      value={{ color: 'white', size: '30px' }}
    >
      <div>
        <img src={logo} alt="Logo" className="w-48" />
        <BsTwitterX/>
        <FaLinkedin/>
        <FaPhone/>
        <IoMdMail/>
        <GrInstagram/>
      </div>
      {/* <h1 className="border text-cyan-50 border-b-2 mt-7">helo</h1> */}
    </IconContext.Provider>
    </>
  );
}

export default App;