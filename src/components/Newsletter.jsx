import React from "react";
import { Link } from "react-router-dom";
import videoBackground from '../assets/13235248-uhd_3840_2160_24fps.mp4';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

const Newsletter = () => {
  return (
    <div className="relative overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        style={{ zIndex: '-1' }}
      >
        <source src={videoBackground} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10">
        <div className="max-w-[1240px] mx-auto px-4 py-16 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 my-4 text-white">
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
              Want tips & tricks to optimize your flow?
            </h1>
            <p>Sign up to our newsletter and stay up to date.</p>
          </div>
          <div className="my-4">
            <div className="flex flex-col sm:flex-row items-center justify-between w-full">
              <input
                className="p-3 flex w-full rounded-md bg-white text-black"
                type="email"
                placeholder="Enter Email"
              />
              <button className="bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3">
                Notify Me
              </button>
            </div>
            <p className="text-white">
              We care about the protection of your data. Read our{" "}
              <Link onClick={scrollToTop} to='/policy' className="text-[#00df9a]">Privacy Policy.</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
