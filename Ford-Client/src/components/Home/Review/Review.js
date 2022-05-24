import React from "react";
import UseReview from "../../../Hooks/UseReview";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper";
const Review = () => {
  const [review] = UseReview();
  const reverse = [...review].reverse()
  return (
    <>
      <h1 className="mt-40 text-center text-3xl capitalize text-primary font-semibold">
        What Our Patients Says
      </h1>
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper w-10/12"
      >
        <>
          {reverse.map((item) => (
            <SwiperSlide>
              <div class="card w-11/12 bg-base-100 shadow-md rounded mb-16 mt-20 h-64 shadow-primary">
                <div class="card-body text-secondary">
                  <p className="text-justify">{item.description}</p>
                  <div class="card-actions justify-between mt-5 items-center">
                    <img
                      className="rounded-full w-24 h-24 ring ring-primary ring-offset-primary ring-offset-2"
                      src={item.img}
                      alt=""
                    />
                    <div>
                      <h2 class="card-title text-primary">{item.name}</h2>
                      <p>{item.address}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </>
      </Swiper>
    </>
  );
};

export default Review;
