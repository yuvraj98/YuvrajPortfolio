import React from "react";
import  { FaYoast, FaFilePdf } from "react-icons/fa";

const NavBar = ({ toggleResumeModal }) => {
  return (
    <nav className="bg-gradient-to-r from-gray-800 to-gray-600 p-4 h-24 w-auto flex justify-center relative">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-semibold">
          <FaYoast></FaYoast>
        </div>
        <div className="absolute text-5xl text-slate-300 left-48 font-bold transition-all duration-300 select-none animate-slideInFromLeft">
          Welcome
        </div>
        <div className="space-x-5">
          <a href="#" className="text-white cursor-pointer hover:font-semibold transition-all duration-200 ease-in animate-fadeInUp">
            Home
          </a>
          <a href="#my-project" className="text-white cursor-pointer hover:font-semibold transition-all duration-200 ease-in animate-fadeInUp">
            Projects
          </a>
          <a href="#my-skills" className="text-white cursor-pointer hover:font-semibold transition-all duration-200 ease-in animate-fadeInUp">
            Skills
          </a>
          <a href="#contact-me" className="text-white cursor-pointer hover:font-semibold transition-all duration-200 ease-in animate-fadeInUp">
            Contact
          </a>
          <div className="absolute right-12 top-8">
            <a onClick={toggleResumeModal} className="w-12 h-12 bg-violet-400 hover:bg-violet-600 text-white font-semibold flex items-center justify-center rounded-full cursor-pointer">
              <FaFilePdf></FaFilePdf>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
