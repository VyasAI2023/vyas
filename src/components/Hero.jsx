import React from "react";
import { ReactTyped } from "react-typed";
import { useNavigate } from "react-router-dom";
import video from '../assets/3129671-uhd_3840_2160_30fps.mp4';

const Hero = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/main');
  };

  return (
    <div className="relative text-white h-screen overflow-hidden">
      <video autoPlay loop muted className="absolute w-full h-full object-cover z-0">
        <source src={video} type="video/mp4" />
      </video>
      <div className="video-overlay z-1"></div>
      <div className="flex items-center justify-center h-full z-10">
        <div className="text-center max-w-[800px] mx-auto content z-20">
          <p className="text-[#00df9a] font-bold p-2 z-20">GROWING WITH VYAS.AI</p>
          <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 z-20">
            Grow with AI.
          </h1>
          <div className="flex justify-center items-center z-20">
            <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4 z-20">
              Fast, flexible financing for
            </p>
            <ReactTyped
              className="text-xl md:text-5xl sm:text-4xl font-bold md:pl-4 pl-2 text-gray-500 z-20"
              strings={["MLaaS", "Models", "SaaS"]}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
          </div>
          <p className="md:text-2xl text-xl font-bold text-gray-500 z-20">
            Everything you need to build and deploy ML Models
          </p>
          <button 
            className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black z-20"
            onClick={handleGetStarted}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
