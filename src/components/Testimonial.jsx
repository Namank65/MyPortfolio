import React from "react";
import clint1 from "../assets/saatvik.webp";
import clint2 from "../assets/Srihari.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import "../swiper.css";
import "swiper/css/navigation";
import "swiper/css";

const Testimonial = () => {
  return (
    <div className="text-white bg-slate-950 relative w-[99.99%] h-screen">
      <h1 className="text-xl md:text-4xl rounded-lg bg-inherit relative m-auto px-5 py-4 border z-10 max-w-max mb-1 md:mb-16 ">
        What my clients are saying?
      </h1>

      <div className="max-w-7xl flex w-full md:w-[80%] justify-center items-center text-black m-auto">
        <Swiper
          navigation={true}
          pagination={true}
          clickable={true}
          modules={[Navigation,Pagination]}
          className="mySwiper py-16"
        >
          <SwiperSlide>
            <div className="flex cursor-grab flex-col md:flex-row gap-5 shadow-2xl shadow-slate-400 rounded-xl justify-center items-center m-auto max-w-[800px] p-8 w-[90%]">
              <div className="max-w-screen-md flex justify-center">
                <img
                  className="w-[40%]  md:w-[90%]  rounded-full hover:scale-110 duration-300 ease-in-out"
                  src={clint1}
                  alt="img"
                />
              </div>

              <div className="text-white md:pt-16 max-w-screen-sm">
                <p className="text-left text-sm md:text-lg my-4 font-light ">
                  “Anurag is a talented, committed individual who will leave no
                  stone unturned in his pursuit to provide with the best. His
                  attention to detail and in-depth experience in the of web
                  development is indeed commendable. He has exhibited exemplary
                  skills in the field, and I hope to see all the great projects
                  coming up!”
                </p>
                <h2 className="text-right p-2 font-semibold italic text-xl md:text-3xl">
                  Satvik Nagpal
                </h2>
                <h5 className="text-right text-sm md:text-base ">Founder, EzyGrad</h5>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex cursor-grab flex-col md:flex-row gap-5 shadow-2xl shadow-slate-400 rounded-xl justify-center items-center m-auto max-w-[800px] p-8 w-[90%]">
              <div className="max-w-screen-md flex justify-center">
                <img
                  className="w-[40%]  md:w-[90%] rounded-full hover:scale-110 duration-300 ease-in-out"
                  src={clint2}
                  alt="img"
                />
              </div>

              <div className="text-white md:pt-16 max-w-screen-sm">
                <p className="text-left text-sm md:text-lg my-4 font-light ">
                  “Anurag is a talented, committed individual who will leave no
                  stone unturned in his pursuit to provide with the best. His
                  attention to detail and in-depth experience in the of web
                  development is indeed commendable. He has exhibited exemplary
                  skills in the field, and I hope to see all the great projects
                  coming up!”
                </p>
                <h2 className="text-right p-2 font-semibold italic text-xl md:text-3xl">
                Srihari Kestur 
                </h2>
                <h5 className="text-right text-sm md:text-base ">Founder, Harigurus</h5>
              </div>
            </div>
          </SwiperSlide>

        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
