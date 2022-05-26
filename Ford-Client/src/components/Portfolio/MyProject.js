import React from "react";
import camera from "../../Assets/portfolio/photograph.png";
import car from "../../Assets/portfolio/car.png";
import mobile from "../../Assets/portfolio/mobile.png";
import watch from "../../Assets/portfolio/watch.png";
import personal from "../../Assets/portfolio/personal.png";
const MyProject = () => {
  return (
    <>
      <h1 className="text-center mt-40 text-4xl font-bold text-primary">
        My Latest Projects
      </h1>
      <div className="grid grid-cols-1 mt-20  md:grid-cols-2 lg:grid-cols-3 w-10/12 md:w-8/12 mx-auto">
        <div className="mx-auto mb-10">
          <img className="w-72 h-72 rounded-xl mb-4" src={watch} alt="" />
          <a
            className="text-xl font-semibold text-center text-primary ml-8"
            href="https://watch-mania-hero.netlify.app/"
          >
            Live Site
          </a>
        </div>
        <div className="mx-auto mb-10">
          <img className="w-72 h-72 rounded-xl mb-4" src={car} alt="" />
          <a
            className="text-xl font-semibold text-center text-primary ml-8"
            href="https://auto-royal-client.web.app/"
          >
            Live Site
          </a>
        </div>
        <div className="mx-auto mb-10">
          <img className="w-72 h-72 rounded-xl mb-4" src={camera} alt="" />
          <a
            className="text-xl font-semibold text-center text-primary ml-8"
            href="https://picturesque-photographer.web.app/"
          >
            Live Site
          </a>
        </div>
      </div>
    </>
  );
};

export default MyProject;
