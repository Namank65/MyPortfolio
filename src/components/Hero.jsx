import React from 'react';
import { BsTwitterX } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import MainLogo from "../assets/MainLogo2.png";

 
 const Hero = () => {
   return (
     <div className='flex'>
      <img src={MainLogo} alt="" />
       <ul className='space-y-5'>
        <li><FaGithub/></li>
        <li><FaLinkedin/></li>
        <li><BsTwitterX/></li>
        <li><SiGmail/></li>
        <li><GrInstagram/></li>
       </ul>
     </div>
   )
 }
 
 export default Hero
 