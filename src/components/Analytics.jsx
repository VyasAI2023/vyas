import React from 'react';
import { useNavigate } from 'react-router-dom';
import videoBackground from '../assets/9694226-hd_1920_1080_25fps.mp4'; // Adjust the path if necessary

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

const Analytics = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/login');
  };

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
        <div className="max-w-[1240px] mx-auto px-4 py-16 grid md:grid-cols-2 gap-8">
          <div className="flex justify-center items-center mb-8 md:mb-0">
            <img
              className="w-full md:max-w-[500px] filter brightness-75"
              src="https://icon-library.com/images/computer-icon-png-black/computer-icon-png-black-4.jpg"
              alt="computer icon"
            />
          </div>
          <div className="flex flex-col justify-center text-black">
            <p className="text-[#00df9a] font-bold text-3xl mb-4">DATA SETS</p>
            <h1 className="md:text-5xl sm:text-3xl text-2xl font-bold mb-4">
              Search, curate, and manage visual data
            </h1>
            <p className="mb-4">
              Bring images and video from your own buckets in 40+ annotation and image formats
              via API. <br />
              Filter, tag, segment, preprocess, and augment image data by metadata, train/test
              split, or location of image <br />
              Track multiple versions of datasets for experimentation. <br />
              Use text-based semantic search and CLIP vectors to find similar data and anomalies.
            </p>
            <button
              className="bg-[#00df9a] text-white w-[200px] rounded-md font-medium py-3"
              onClick={() => {
                scrollToTop();
                handleGetStarted();
              }}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
