import React from "react";
import about from "../../../Assets/Banner/aboutus.png";
const About = () => {
  return (
    <div>
      <div class="hero">
        <div class="hero-content flex-col lg:flex-row">
          <img src={about} alt="" class="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 class="text-5xl font-bold">Box Office News!</h1>
            <p class="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
