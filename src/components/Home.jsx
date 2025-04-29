import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import DisplayImage from "../assets/mayank.jpg";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div
      id="home"
      className="relative w-full min-h-screen flex flex-col items-center justify-center py-20 bg-gradient-to-b from-[#0a0a0a] to-[#121212] text-gray-300 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute top-10 left-10 w-24 h-24 md:w-36 md:h-36 bg-blue-500 opacity-20 blur-3xl rounded-full animate-pulse pointer-events-none"></div>
      <div className="absolute top-70 left-200 w-24 h-24 md:w-36 md:h-36 bg-blue-200 opacity-20 blur-3xl rounded-full animate-pulse pointer-events-none"></div>
      <div className="absolute top-20 right-10 w-28 h-28 md:w-40 md:h-40 bg-blue-500 opacity-10 blur-3xl rounded-full animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 md:w-32 md:h-32 bg-blue-500 opacity-15 blur-2xl rounded-full animate-spin-slow pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-28 h-28 md:w-40 md:h-40 bg-blue-500 opacity-10 blur-3xl rounded-full animate-pulse pointer-events-none"></div>

      {/* Main Content */}
      <div className="z-10 flex flex-col md:flex-row items-center justify-center w-full max-w-7xl px-6 md:px-10 gap-10 md:gap-20">
        
        {/* Profile Image */}
        <div className="flex justify-center">
          <div className="rounded-full overflow-hidden w-40 h-40 md:w-60 md:h-60 lg:w-72 lg:h-72 shadow-blue-500 shadow-2xl">
            <img
              src={DisplayImage}
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4 md:gap-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-blue-500">
            Mayank Kumar
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl">
            <span className="text-white">
              <Typewriter
                words={[
                  "Frontend Developer",
                  "Software Developer",
                  "Problem Solver",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </p>

          {/* Social Links */}
          <div className="flex gap-6 mt-4">
            <a
              href="https://github.com/mayank-49"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500 transition-transform transform hover:scale-110 animate-bounce"
            >
              <FaGithub className="w-8 h-8 md:w-10 md:h-10" />
            </a>
            <a
              href="https://www.linkedin.com/in/mayank-kumar-52304b277/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500 transition-transform transform hover:scale-110 animate-bounce"
            >
              <FaLinkedin className="w-8 h-8 md:w-10 md:h-10" />
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full mt-16">
        <div className="absolute bottom-10 right-10 transform -translate-x-1/2 w-28 h-28 bg-blue-500 opacity-10 blur-3xl rounded-full animate-pulse"></div>
        <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent absolute bottom-0"></div>
      </div>
    </div>
  );
};

export default Home;
