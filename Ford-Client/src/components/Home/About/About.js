import React from "react";
import about from "../../../Assets/Banner/aboutus.png";
const About = () => {
  return (
    <div>
      <div class="hero justify-center lg:px-20 mt-40 px-10 w-full md:w-11/12">
        <div class="hero-content flex-col lg:flex-row lg:ml-20">
          <img src={about}  class="md:w-9/12 w-full" alt="" />
          <div className="md:pl-10 mt-10">
            <p className="text-secondary">Let Me Introduce</p>
            <h1 class="text-5xl font-bold text-primary">Our Company</h1>
            <p class="py-6 text-secondary text-justify">
              For over 29 years, the Industify family has been building
              relationships and projects that last. We build safe environments
              and eco-friendly solutions in the communities in which we work.
              Most importantly, we build strong relationships that allow us to
              build anything, anywhere. No matter the job, we go beyond
              building.
            </p>
            <button class="btn btn-primary text-white text-lg capitalize rounded">
              More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
