import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper";

const Team = () => {
  const team = [
    {
      id: 1,
      name: "Nancy Oliver",
      img: "https://hellloexpert.com/wp/endus/wp-content/uploads/2020/11/team-1.jpg",
      post: "Senior Engineer",
    },
    {
      id: 2,
      name: "Haris Roauf",
      img: "https://hellloexpert.com/wp/endus/wp-content/uploads/2020/11/team-2.jpg",
      post: "Product Manager",
    },
    {
      id: 3,
      name: "Alex Holder",
      img: "https://hellloexpert.com/wp/endus/wp-content/uploads/2020/11/team-44.jpg",
      post: "Senior Engineer",
    },
    {
      id: 4,
      name: "Noor Ahmed",
      img: "https://img.freepik.com/free-photo/smiling-professional-female-asian-engineer-architect-helmet-business-suit-showing-house-maket-tape-measure-ready-starting-home-renovation-construction-works-white-background_1258-62983.jpg?w=996",
      post: "Senior Officer",
    },
    {
      id: 5,
      name: "Traves Head",
      img: "https://img.freepik.com/free-photo/construction-worker-uniform-helmet-holding-hands-waist-looking-confident-front-view_176474-38678.jpg?t=st=1653190682~exp=1653191282~hmac=30c0e01ef3a17a30f3b89de5adc9a23f51be96ce4eaa12b4f04126ac529fc4a7&w=996",
      post: "Manager",
    },
  ];
  return (
    <>
      <h1 className="mt-40 text-center text-3xl capitalize text-secondary font-semibold">
        our awesome and expert <br />{" "}
        <span className="text-primary">Team Members</span>
      </h1>
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 1500,
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
          {team.map((item) => (
            <SwiperSlide>
              <div class="card w-10/12 mx-auto shadow-primary shadow-md h-[400px] rounded mt-20 mb-12">
                <figure>
                  <img src={item.img} alt="Shoes" className="h-72 w-60 py-4" />
                </figure>
                <div class="card-body text-secondary text-center">
                  <h2 class="text-xl font-semibold text-center">{item.name}</h2>
                  <p>{item.post}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </>
      </Swiper>
    </>
  );
};

export default Team;
