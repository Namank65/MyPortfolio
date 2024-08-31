import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../swiper.css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "swiper/css";

const Testimonial = () => {
  return (
    <div className="text-white bg-slate-950 relative w-[99.99%] h-screen">
      <h1 className="text-xl md:text-4xl rounded-lg bg-inherit relative m-auto px-5 py-4 border z-10 max-w-max mb-1 md:mb-16 ">
        What my clients are saying?
      </h1>

      <div className="max-w-7xl flex w-[80%] justify-center items-center text-black m-auto">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper py-16"
        >
          <SwiperSlide>
            <div className="flex cursor-grab flex-col md:flex-row gap-5 shadow-2xl shadow-slate-400 rounded-xl justify-center items-center m-auto max-w-[800px] p-11 w-[80%]">
              <div>
                <img
                  className="rounded-full hover:scale-110 duration-300 ease-in-out"
                  src="https://anuragsinghbam.netlify.app/images/saatvik.webp"
                  alt="img"
                />
              </div>

              <div className="text-white pt-14">
                <p className="text-left my-4 font-light ">
                  “Anurag is a talented, committed individual who will leave no
                  stone unturned in his pursuit to provide with the best. His
                  attention to detail and in-depth experience in the of web
                  development is indeed commendable. He has exhibited exemplary
                  skills in the field, and I hope to see all the great projects
                  coming up!”
                </p>
                <h2 className="text-right p-2 font-semibold italic text-3xl">
                  Satvik Nagpal
                </h2>
                <h5 className="text-right">Founder, EzyGrad</h5>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex cursor-grab flex-col md:flex-row gap-5 shadow-2xl shadow-slate-400  rounded-xl  justify-center items-center m-auto max-w-[800px] p-11 w-[80%]">
              <div className="">
                <img
                  className="rounded-full hover:scale-110 duration-300 ease-in-out"
                  src="https://anuragsinghbam.netlify.app/images/Srihari.webp"
                  alt="img"
                />
              </div>

              <div className="text-white pt-14">
                <p className="text-left my-4 font-light ">
                  “I worked with Anurag to make my website. I am speechless by
                  looking at his work ethic and dedication. Working with him was
                  the best decision I made.”
                </p>
                <h2 className="text-right p-2 font-semibold italic text-3xl ">
                  Srihari Kestur{" "}
                </h2>
                <h5 className="text-right">Founder Harigurus</h5>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
