import React from "react";
import camera from "../../Assets/portfolio/photograph.png";
import food from "../../Assets/portfolio/food.png";
import car from "../../Assets/portfolio/car.png";
import mobile from "../../Assets/portfolio/mobile.png";
import watch from "../../Assets/portfolio/watch.png";
import personal from "../../Assets/portfolio/personal.png";
import "./Portfolio.css";
import Timeline from "./Timeline";
import Skills from "./Skills";
const Portfolio = () => {
  return (
    <div>
      <div class="hero mt-40">
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-lg bg">
            <h1 class="mb-5 text-5xl font-bold text-primary">Hello there</h1>
            <p class="mb-5">
              <h1 className="text-3xl font-semibold text-secondary">
                I'm Abi Abdullah
              </h1>
              <p className="text-4xl font-bold text-primary py-4">
                Junior Frontend Developer
              </p>
              <p className="text-md font-bold text-secondary">
                My Goal is to be a good full-stackdeveloper. I hope i can make
                it by the blessing of Almighty and through my hardwork
              </p>
            </p>
            <button class="btn btn-primary text-white text-xl rounded-md capitalize px-6">
              Expolre
            </button>
          </div>
        </div>
      </div>
      <Skills></Skills>
      <Timeline></Timeline>
    </div>
  );
};

export default Portfolio;
