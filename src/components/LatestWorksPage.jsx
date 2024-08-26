import React from "react";
import projectImg from "../assets/Portfolio.webp";
import Skills from "./Skills";

const LatestWorksPage = () => {

  const skills = [
    "#javascript",
    "#react.js",
    "#redux",
    "#node.js",
    "#express.js",
    "#mongoDB",
    "#cloudinary",
    "#html",
    "#css",
    "#tailwind",
    "#github",
    "#Jwt",
  ];

  return (
    <div className=" mt-8 text-white bg-slate-950 absolute w-[99.99%] ">
      <h1 className="text-4xl m-auto px-4 py-2 border rounded-md max-w-max border-t-0">
        Latest Works
      </h1>

      <div className="flex gap-20 items-center mb-12 m-auto w-[90%] max-w-7xl">
        <div className="w-full">
          <div className="flex items-start">
          <a href="#">
            <img
              src={projectImg}
              alt="ProjectImg"
              className="max-w-[400px] w-full"
            />
          </a>
          </div>
          
        </div>

        <div className="flex flex-col items-start w-full">
          <h3 className="text-4xl mb-4 mt-8">Somthing</h3>
          <span className="text-xl py-4">(SomeOne)</span>
          <p className="text-justify">HariGurus is a one-stop-shop for all Hindu religious, customs and traditional requirements. Built the complete site from scratch.</p>
          <div className="flex flex-wrap w-11/12 gap-4 mt-4 md:gap-3 mb-0">
            {skills.map((s, i) => (
              <Skills key={i} data={s} />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default LatestWorksPage;
