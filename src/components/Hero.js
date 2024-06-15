import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import Yuvi from "../Images/Yuviii.jpg";
import dp1 from "../Images/undraw_startup_life_re_8ow9.svg";
import xflame1 from '../Images/x-flame-1.png';
import xflame2 from '../Images/x-flame-2.png';
import { FaInstagram, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks, SiCodechef } from 'react-icons/si';

const Hero = () => {
  const [showProfilePanel, setShowProfilePanel] = useState(false);

  const toggleProfilePanel = () => {
    setShowProfilePanel(!showProfilePanel);
  };

  return (
    <section className="relative bg-sky-100 mx-auto w-full h-[780px] flex flex-row justify-center items-center gap-x-28 animate-fadeInUp bg-cover bg-center overflow-x-hidden" style={{ backgroundImage: "url('/Images/Hero-Bg.jpg')" }}>
      <img src={xflame1} alt="" className="absolute top-1 right-4 w-32" />
      <img src={xflame2} alt="" className="absolute w-52 bottom-0 left-0" />
      <div className="absolute text-8xl text-slate-300 right-5 font-bold transition-all duration-300 select-none bottom-5">Yuvraj Chavan</div>

      <div className="max-w-[780px] animate-slide mt-0 overflow-hidden pl-18 pb-16 ">
        <div className="w-[390px] h-[390px] rounded-full overflow-hidden mx-auto border-4 border-slate-700 relative group shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
          <img src={Yuvi} alt="Your Image" className="w-full h-full object-cover rounded-full group-hover:ring-4 ring-slate-500 transition duration-300 animate-bigSmile" />
        </div>
      </div>

      <div className="flex flex-col justify-center ml-5 gap-8">
        <div className="text-4xl text-indigo-800 font-mono font-medium">Hi! Yuvraj Chavan</div>
        <div className="text-3xl leading-9">
          I am a <span className="font-bold text-amber-900 role">
            <Typewriter
              words={[
                "GFG Student Chapter President.",
                "Google DSC DSA Lead.",
                "MERN Developer.",
                "Problem Solver.",
                "Fresher.",
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={50}
              deleteSpeed={40}
              delaySpeed={1000}
            />
          </span>
        </div>
        <div className="mt-4 w-[70%] font-medium text-lg">
          Final-year B.Tech CS student at JSPM's Rajarshi Shahu College of Engineering, Pune, skilled in <br></br> Web development, Machine Learning, System Design, Algorithms, Competitive Programming, and Leadership.
        </div>
        <div className="flex flex-row justify-between relative">
          <div className="w-24 h-35 bg-violet-400 hover:bg-violet-800 text-white font-semibold py-2 px-4 mt-36 rounded inline-block transition duration-300 ease-in-out cursor-pointer">Hire me</div>
          <img src={dp1} alt="" className="w-[200px] h-[300px] absolute left-32 mb-24" />
        </div>
      </div>

      {/* Social Media Links */}
      <div className="absolute top-4 right-4 flex flex-col space-y-4">
        <a href="https://www.instagram.com/yuvraj_chavan_13?igsh=YWM0MnJrem9lMGo1" className="text-black hover:text-gray-400 transition-colors duration-300 w-8 h-6">
          <FaInstagram size={24} />
        </a>
        <a href="https://www.linkedin.com/in/yuvraj-chavan-64ba441a4/" className="text-black hover:text-gray-400 transition-colors duration-300">
          <FaLinkedin size={24} />
        </a>
        <a href="https://twitter.com/twitter_id" className="text-black hover:text-gray-400 transition-colors duration-300">
          <FaTwitter size={24} />
        </a>
        <a href="https://github.com/yuvraj98" className="text-black hover:text-gray-400 transition-colors duration-300">
          <FaGithub size={24} />
        </a>
      </div>

    
      
        
      <div className="absolute botto-4 right-4 flex flex-col space-y-4">
        <a href="https://leetcode.com/u/Yuvi13/" className="text-black hover:text-gray-400 transition-colors duration-300 w-8 h-6">
              <SiLeetcode size={24} />
            </a>
            <a href="https://www.geeksforgeeks.org/user/rajchavhflw/" className="text-black hover:text-gray-400 transition-colors duration-300 w-8 h-6">
              <SiGeeksforgeeks size={24} />
            </a>
            <a href="https://www.codechef.com/users/yuvrajcsn11" className="text-black hover:text-gray-400 transition-colors duration-300 w-8 h-6">
              <SiCodechef size={24} />
            </a>
      </div>
      
    </section>
  );
};

export default Hero;
