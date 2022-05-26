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
                <h1 class="text-5xl font-bold text-primary">Electric Drill</h1>
                <p class="py-6 text-secondary">
                  An electric drill is a drill which is driven by an electric
                  motor. The invention of the electric drill is credited to
                  Arthur James Arnot and William Blanch
                </p>
                <button class="btn btn-primary text-lg text-white text-md">
                  Expolre
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
                <h1 class="text-5xl font-bold text-primary">Chain Saw</h1>
                <p class="py-6 text-secondary">
                  TOPWE CN-5803 58cc 2200W 2-Stroke professional China chainsaw
                  Chain Saw gasoline pole chainsaw
                </p>
                <button class="btn text-lg btn-primary text-white text-md">
                  Expolre
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
