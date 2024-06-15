import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import resumeImage from './Images/resume.jpg'; // Assuming this is your resume image file
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { FaTimes } from 'react-icons/fa';

function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  const toggleResumeModal = () => {
    setResumeModalOpen(!resumeModalOpen);
  };

  const closeResumeModal = () => {
    setResumeModalOpen(false);
  };

  return (
    <div>
      <NavBar toggleResumeModal={toggleResumeModal} />
      <Hero />
      <Projects />
      <Skills />  
      
      <Contact />
      <Footer />
      {resumeModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 md:p-8 rounded-lg relative max-w-md w-full">
            <div className="flex justify-end">
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={closeResumeModal}
              >
              <FaTimes></FaTimes>
              </button>
            </div>
            <img
              src={resumeImage}
              alt="Resume"
              className="w-full h-auto rounded-lg"
              style={{ maxHeight: "70vh", maxWidth: "100%" }}
            />
            <a href={resumeImage} download>
              <button className="bg-violet-400 text-white font-semibold py-3 px-6 rounded mt-4 md:mt-6 block w-full">
                Download Resume
              </button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
