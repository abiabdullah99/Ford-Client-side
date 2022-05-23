import React from "react";
import firebase from "../../Assets/mySkills/firebase (2).png";
import react from "../../Assets/mySkills/react.png";
import html from "../../Assets/mySkills/html.png";
import css from "../../Assets/mySkills/css.png";
import nodejs from "../../Assets/mySkills/nodejs.png";
import tailwind from "../../Assets/mySkills/tailwind-css.png";
import bootstrap from "../../Assets/mySkills/bootstrap.png";
import github from "../../Assets/mySkills/node-js.png";
import Javascript from "../../Assets/mySkills/js.png";
import figma from "../../Assets/mySkills/figma.png";
const Skills = () => {
  const skills = [
    {
      id: 1,
      name: "Html 5",
      img: html,
    },
    {
      id: 2,
      name: "Css 3",
      img: css,
    },
    {
      id: 3,
      name: "Bootstrap",
      img: bootstrap,
    },
    {
      id: 4,
      name: "Tailwind",
      img: tailwind,
    },
    {
      id: 5,
      name: "Javascript",
      img: Javascript,
    },
    {
      id: 6,
      name: "Github",
      img: github,
    },
    {
      id: 7,
      name: "React Js",
      img: react,
    },
    {
      id: 8,
      name: "Firebase",
      img: firebase,
    },
    {
      id: 9,
      name: "Node Js",
      img: nodejs,
    },
    {
      id: 12,
      name: "Figma",
      img: figma,
    },
  ];
  return (
    <>
      <h1 className="text-center text-4xl font-bold text-primary mt-20">My Skills</h1>
      <div className="grid  md:grid-cols-3 gap-4 grid-cols-2 lg:grid-cols-4 w-9/12 mx-auto">
        {skills.map((item) => (
          <div key={item.id}>
            <div className="flex-col  mt-20 shadow-primary shadow-md py-8 px-14 w-9/12 mx-auto h-44">
              <div>
                <img className="w-20 h-20" src={item.img} alt="" />
              </div>
              <div>
                <h1 className="mt-2 text-lg text-secondary pl-2 font-semibold">
                  {item.name}
                </h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Skills;
