import React from "react";
import nubiFashion from "../assets/Nubi_Fashion.png";
import NetShow from "../assets/NetShow.png";
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
    "#Jwt",
  ];

  return (
    <div className="mt-8 pb-20 md:pb-40 text-white bg-slate-950 relative w-[99.99%] cursor-default">
      <h1 className="text-4xl bg-inherit relative m-auto px-4 py-2 md:border-b z-10 max-w-max mb-16 md:border-t-0">
        Latest Works
      </h1>

      <div className="flex md:flex-row flex-col gap-20 items-center mb-20 m-auto w-[90%] max-w-7xl">
        <div className="w-full">
          <div className="flex items-start md:justify-normal justify-center ">
            <a href="https://nubifashon.web.app/" className="group">
              <div className="flex justify-center items-center">
                <div className="h-[1px] absolute left-1/4 right-1/2 bg-red-600"></div>
                <div className="w-4 h-4 absolute bg-slate-950 z-10 left-1/2 -translate-x-1/2 md:block hidden rounded-full border-[3px] border-red-600 hover:scale-125 duration-200 ease-in-out"></div>
                <img
                  src={nubiFashion}
                  alt="ProjectImg"
                  className="max-w-[400px] w-full hover:scale-110 hover:transition-all duration-200 ease-in-out flex justify-center relative drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
                />
              </div>

              <p className="relative ease-jump w-40 shadow-xl shadow-green-400 opacity-0 group-hover:opacity-100 md:group-hover:-top-80 group-hover:-top-52 -top-56 hover:transition-all duration-200 px-2 py-1 bg-green-400 text-black rounded-md after:content-[''] after:bg-green-400 after:w-4 after:h-4 after:absolute after:rotate-45 after:left-[50%] after:-bottom-2 after:-translate-x-2 text-center left-1/2 -translate-x-1/2">
                <span className="relative z-10">Nubi Fashion</span>
              </p>
            </a>
          </div>
        </div>

        <div className="flex flex-col items-start w-full">
          <h3 className="text-4xl mb-1">Nubi Fashion</h3>
          <span className="text-xl py-4">(Ecommerce)</span>
          <p className="text-justify">
          Nubi Fashion is a one-stop-shop for all type of Fashion and branded cloths
            traditional or fancy. Built the complete site from scratch.
          </p>
          <div className="flex flex-wrap w-11/12 gap-4 mt-4 md:gap-3 mb-0">
            {skills.map((s, i) => (
              <Skills key={i} data={s} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col-reverse gap-20 items-center m-auto w-[90%] max-w-7xl">
        <div className="flex flex-col items-start w-full">
          <h3 className="text-4xl mb-1">Net Show</h3>
          <span className="text-xl py-4">(streaming)</span>
          <p className="text-justify">
          Net Show is a one-stop-shop for all movies and TV shows, made with the help of tmdb api. Built the complete site from scratch.
          </p>
          <div className="flex flex-wrap w-11/12 gap-4 mt-4 md:gap-3 mb-0">
            {skills.map((s, i) => (
              <Skills key={i} data={s} />
            ))}
          </div>
        </div>
        <div className="w-full">
          <div className="flex md:justify-normal justify-center">
            <a href="https://netshow-794dd.web.app/" className="group md:ml-auto ml-0">
              <div className="flex justify-center items-center">
                <div className="h-[1px] absolute left-1/2 right-1/4 bg-red-600"></div>
                <div className="w-4 h-4 absolute bg-slate-950 z-10 left-1/2 -translate-x-1/2 md:block hidden rounded-full border-[3px] border-red-600 hover:scale-125 duration-200 ease-in-out"></div>
                <img
                  src={NetShow}
                  alt="ProjectImg"
                  className="max-w-[400px] w-full hover:scale-110 hover:transition-all duration-200 ease-in-out flex justify-center relative drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
                />
              </div>

              <p className="relative ease-jump w-40 shadow-xl shadow-green-400 opacity-0 group-hover:opacity-100 md:group-hover:-top-72 group-hover:-top-52 -top-56 hover:transition-all duration-300 px-2 py-1 bg-green-400 text-black rounded-md after:content-[''] after:bg-green-400 after:w-4 after:h-4 after:absolute after:rotate-45 after:left-[50%] after:-bottom-2 after:-translate-x-2 text-center left-1/2 -translate-x-1/2">
                <span className="relative z-10">Net Show</span>
              </p>
            </a>
          </div>
        </div>
      </div>
      <div className="w-[2px] md:block hidden absolute rounded-xl bg-red-500 top-0 bottom-0 left-1/2 -translate-x-1/2"></div>
    </div>
  );
};

export default LatestWorksPage;
