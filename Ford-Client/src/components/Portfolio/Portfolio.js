import React from "react";
import "./Portfolio.css";
import Timeline from "./Timeline";
import Skills from "./Skills";
import MyProject from "./MyProject";
import { BsFacebook, BsTwitter, BsInstagram, BsBehance } from "react-icons/bs";

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
              <p class="py-2 text-secondary text-xl">
                I am Study Diploma In Computer Engineer
              </p>
              <p class="py-2 text-primary text-xl">
                My Email: Abiabdullah120469@gmail.com
              </p>
            </p>
            <div className="flex gap-5 mt-8 ml-4 text-primary justify-center">
              <BsFacebook className=" text-3xl font-bold" />
              <BsTwitter className=" text-3xl font-bold" />
              <BsInstagram className=" text-3xl font-bold text-pr" />
              <BsBehance className=" text-3xl font-bold text-pr" />
            </div>
          </div>
        </div>
      </div>
      <Skills></Skills>
      <MyProject></MyProject>
      <Timeline></Timeline>
    </div>
  );
};

export default Portfolio;
