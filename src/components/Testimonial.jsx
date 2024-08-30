import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../swiper.css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "swiper/css";

const Testimonial = () => {
  return (
    <div className="text-white bg-slate-950 relative w-[99.99%] h-96">
      <h1 className="text-4xl rounded-lg bg-inherit relative m-auto px-5 py-4 border z-10 max-w-max mb-16">
        What my clients are saying?
      </h1>

      <div className="max-w-7xl flex w-[60%] items-center text-black h-96 m-auto">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <div className="flex items-center m-auto max-w-[800px] p-8 w-[80%]">

            <div className="size-80">
              <img
                className="rounded-full"
                src="https://anuragsinghbam.netlify.app/images/saatvik.webp"
                alt="img"
                />
            </div>

            <div className="text-black">
              <p>
                “I can bet that it's too hard to find professional developers
                like Anurag. He could peek inside my mind and made the site
                exactly as I wanted. Much appreciated”
              </p>
                <h2>SJIVBsd</h2>
                <h5>SJIVBsd</h5>
            </div>
                </div>
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
