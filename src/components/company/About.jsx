import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const About = () => {
  return (
    <div>
      <Navbar /><br/><br/>
      <div className="max-w-[1000px] mx-auto p-4">
      <div className="text-center">
  <h2 className="text-5xl text-[rgb(0,223,154)] font-bold mb-4">Our Company</h2>
  <hr className="mt-2 w-40 mx-auto border-t-2 border-[#00df9a]" />
</div>

        <br/>
        <p className="text-2xl mb-6 text-white">
        Vyas empowers developers to build their own computer vision applications, no matter their skillset or experience. We streamline the process between labeling your data and training your model.
<br/><br/>
After building our own applications, we learned firsthand how tedious it can be to train and deploy a computer vision model. We found ourselves writing excess code to format our data. It was difficult to collaborate, and benchmarking machine learning tools was a lot of work.
‍<br/><br/>
That’s why we launched vyas in January 2023. We believe every developer should have computer vision available in their toolkit. Our mission is to remove any barriers that might prevent them from succeeding.
        </p>
        <br/><br/>
      </div>
      <Footer />
    </div>
  );
};

export default About;
