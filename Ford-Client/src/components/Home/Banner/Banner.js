import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper";
import banner from "../../../Assets/Banner/banner.png";
import banner1 from "../../../Assets/Banner/banner-2.png";
import "./Banner.css";
const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div class="hero min-h-screen background">
            <div class="hero-content flex-col lg:flex-row-reverse">
              <img className="" src={banner} alt="" />
              <div>
                <h1 class="text-5xl font-bold text-primary">
                  Box Office News!
                </h1>
                <p class="py-6 text-secondary">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button class="btn btn-primary text-white text-md">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div class="hero min-h-screen background">
            <div class="hero-content flex-col lg:flex-row-reverse">
              <img className="w-9/12" src={banner1} alt="" />
              <div>
                <h1 class="text-5xl font-bold text-primary">
                  Box Office News!
                </h1>
                <p class="py-6 text-secondary">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button class="btn btn-primary text-white text-md">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;


