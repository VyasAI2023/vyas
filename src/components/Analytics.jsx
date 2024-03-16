import React from "react";
import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          className="w-[500px] mx-auto my-4"
          src={Laptop}
          alt="laptop logo"
        />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold ">DATA SETS</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Search, curate, and manage visual data
          </h1>
          <p>
            Bring images and video from your own buckets in 40+ annotation and
            image formats via API. <br />
            Filter, tag, segment, preprocess, and augment image data by
            metadata, train/test split, or location of image <br />
            Track multiple versions of datasets for experimentation. <br />
            Use text-based semantic search and CLIP vectors to find similar data
            and anomalies.
          </p>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
