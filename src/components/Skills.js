import React from "react";
import cpp from '../Images/Cpp.png';
import java from '../Images/java.jpeg';
import NodeJs from "../Images/NodeJs.svg";
import react from "../Images/React.png";
import tailwind from "../Images/Tailwind.png";
import express from '../Images/Express.png';
import mongo from '../Images/MongoDB.svg';
import javascript from '../Images/Javascript.svg';
import github from '../Images/Github.svg';
import git from '../Images/Git.svg';
import redux from '../Images/Redux.svg';
import python from '../Images/python.jpeg';

const Skills = () => {
  return (
    <section className="max-w-screen-xl mx-auto py-20 relative bg-gradient-to-r from-gray-300 to-gray-500" id="my-skills">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('./Images/Skills-BG.jpg')" }}></div>
      <div className="relative z-10 text-center text-white">
        <h1 className="text-6xl font-extrabold mb-8 font-mono text-[#161D29]">Skills</h1>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-10 sm:gap-12 py-6 pl-1 pr-1">
          <div className="flex justify-center items-center p-4 bg-white rounded-lg">
            <img src={cpp} alt="C++" className="w-24 h-24 animate-bounce" />
          </div>
          <div className="flex justify-center items-center p-4 bg-white rounded-lg">
            <img src={java} alt="Java" className="w-24 h-24 animate-bounce" />
          </div>
          <div className="flex justify-center items-center p-4 bg-white rounded-lg">
            <img src={NodeJs} alt="Node.js" className="w-24 h-24 animate-bounce" />
          </div>
          <div className="flex justify-center items-center p-4 bg-white rounded-lg">
            <img src={react} alt="React" className="w-24 h-24 animate-bounce" />
          </div>
          <div className="flex justify-center items-center p-4 bg-white rounded-lg">
            <img src={tailwind} alt="Tailwind CSS" className="w-24 h-24 animate-bounce" />
          </div>
          <div className="flex justify-center items-center p-4 bg-white rounded-lg">
            <img src={express} alt="Express.js" className="w-24 h-24 animate-bounce" />
          </div>
          <div className="flex justify-center items-center p-4 bg-white rounded-lg">
            <img src={mongo} alt="MongoDB" className="w-24 h-24 animate-bounce" />
          </div>
          <div className="flex justify-center items-center p-4 bg-white rounded-lg">
            <img src={javascript} alt="JavaScript" className="w-24 h-24 animate-bounce" />
          </div>
          <div className="flex justify-center items-center p-4 bg-white rounded-lg">
            <img src={github} alt="GitHub" className="w-24 h-24 animate-bounce" />
          </div>
          <div className="flex justify-center items-center p-4 bg-white rounded-lg">
            <img src={git} alt="Git" className="w-24 h-24 animate-bounce" />
          </div>
          <div className="flex justify-center items-center p-4 bg-white rounded-lg">
            <img src={redux} alt="Redux" className="w-24 h-24 animate-bounce" />
          </div>
          <div className="flex justify-center items-center p-4 bg-white rounded-lg">
            <img src={python} alt="Python" className="w-24 h-24 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
