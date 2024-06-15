import React from "react";
import { FaInstagram, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks, SiCodechef } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black to-gray-800 py-12">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="text-white mb-4 sm:mb-0">
          <span>© 2024 Yuvraj Chavan. All rights reserved.</span>
        </div>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-16">
          <div className="flex flex-col items-center sm:items-start">
            <h2 className="text-white text-lg mb-2">Social Media</h2>
            <div className="flex space-x-6">
              <a href="https://www.instagram.com/yuvraj_chavan_13?igsh=YWM0MnJrem9lMGo1" className="text-white hover:text-gray-400 transition-colors duration-300">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.linkedin.com/in/yuvraj-chavan-64ba441a4/" className="text-white hover:text-gray-400 transition-colors duration-300">
                <FaLinkedin size={24} />
              </a>
              <a href="https://github.com/yuvraj98" className="text-white hover:text-gray-400 transition-colors duration-300">
                <FaGithub size={24} />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <h2 className="text-white text-lg mb-2">Coding Profiles</h2>
            <div className="flex space-x-6">
              <a href="https://leetcode.com/u/Yuvi13/" className="text-white hover:text-gray-400 transition-colors duration-300">
                <SiLeetcode size={24} />
              </a>
              <a href="https://www.geeksforgeeks.org/user/rajchavhflw/" className="text-white hover:text-gray-400 transition-colors duration-300">
                <SiGeeksforgeeks size={24} />
              </a>
              <a href="https://www.codechef.com/users/yuvrajcsn11" className="text-white hover:text-gray-400 transition-colors duration-300">
                <SiCodechef size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
