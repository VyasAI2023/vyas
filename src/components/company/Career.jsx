import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Career = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "https://st.depositphotos.com/1518767/1390/i/450/depositphotos_13909347-stock-photo-young-employee-standing-upright-in.jpg",
    "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
    "https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []); // Run effect once after initial render

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-white">
        <div className="max-w-[1000px] mx-auto p-4 mt-8">
          <div className="text-center">
            <h2 className="text-5xl text-[rgb(0,223,154)] font-bold mb-4">Careers</h2>
            <hr className="mt-2 w-40 mx-auto border-t-2 border-[#00df9a]" />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-4 max-w-[1000px] mx-auto mt-8">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold text-[rgb(0,223,154)]">CAREERS</p>
            <h1 className="text-4xl font-bold mt-4 text-black">Join the team</h1>
            <p className="text-lg mt-4 text-black">
              Machine learning is the most transformative technology of our lifetime. Your work will shape its adoption.
            </p>
            <a
              href="#Open-Positions"
              className="mt-6 inline-block bg-white text-gray-800 font-semibold py-2 px-4 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100"
            >
              Explore all jobs
            </a>
          </div>
          <div className="relative h-[400px] lg:h-auto">
            {images.map((imageUrl, index) => (
              <img
                key={index}
                className={`rounded-xl absolute inset-0 w-full h-full object-cover ${
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                } transition-opacity duration-500 ease-in-out`}
                src={imageUrl}
                alt={`Career Hero Image ${index + 1}`}
              />
            ))}
          </div>
        </div>
        <div className="home-container tb-padding w-container bg-gray-100 mt-8">
          <div className="career-section-title text-[rgb(0,223,154)] text-xl ml-5">① Who We Are</div>
          <div className="maxw-100 ml-8 mr-8 lg:ml-28 lg:mr-28 mt-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <img
                  src="https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?cs=srgb&dl=pexels-fauxels-3184398.jpg&fm=jpg"
                  loading="lazy"
                  alt="team photo, large group of people"
                  className="career-card-img rounded-xl relative h-[500px] lg:h-auto mb-5"
                />
              </div>
              <div className="split-content-r align-c lg:pl-8">
                <h2 className="text-4xl font-bold mt-4 text-black">Making the World Programmable</h2>
                <p className="text-lg mt-4 text-black">
                  At Vyas, we believe anything that can be seen will be turned into software.
                  Over 250,000 developers build with our tools. We’ve raised 23M from leading
                  investors and over 16k organizations - including over half the Fortune 100 - are
                  building with Vyas tools.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="home-container tb-padding w-container bg-white mt-8">
          <div className="career-section-title text-[rgb(0,223,154)] text-xl ml-5">② What We're Looking For</div>
          <div className="maxw-100 ml-8 mr-8 lg:ml-32 lg:mr-32 mt-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <img
                  src="https://media.istockphoto.com/id/1368965646/photo/multi-ethnic-guys-and-girls-taking-selfie-outdoors-with-backlight-happy-life-style-friendship.jpg?s=612x612&w=0&k=20&c=qYST1TAGoQGV_QnB_vMd4E8jdaQUUo95Sa2JaKSl_-4="
                  loading="lazy"
                  alt="team photo, large group of people"
                  className="career-card-img rounded-xl relative h-[500px] lg:h-auto mb-5"
                />
              </div>
              <div className="split-content-r align-c lg:pl-8">
                <h2 className="text-4xl font-bold mt-4 text-black">"Full-Stack" People</h2>
                <p className="text-lg mt-4 text-black">
                  Own outcomes, not only inputs. Engineers build and drive adoption. Go-To-Market propels revenue and catalyzes product direction. Use (and learn) many skills, not only your core expertise. Our goal is to build a magnetic environment for exceptional talent.
                </p><br/><br/>
                <a
                  href="#Open-Positions"
                  className="bg-[#00df9a] rounded-md font-medium my-6 py-4 px-10 text-black text-center mt-4"
                >
                  See
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="home-container tb-padding w-container bg-gray-100 mt-8">
          <div className="career-section-title text-[rgb(0,223,154)] text-xl ml-5">③ How We Work Together</div>
          <div className="maxw-100 ml-8 mr-8 lg:ml-32 lg:mr-32 mt-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <img
                  src="https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?cs=srgb&dl=pexels-fauxels-3184398.jpg&fm=jpg"
                  loading="lazy"
                  alt="team photo, large group of people"
                  className="career-card-img rounded-xl relative h-[500px] lg:h-auto mb-5"
                />
              </div>
              <div className="split-content-r align-c lg:pl-8">
                <h2 className="text-4xl font-bold mt-4 text-black">Curious, Crafty, Determined</h2>
                <p className="text-lg mt-4 text-black">
                  Our mascot is a raccoon because they have admirable qualities: curious (we’re always wanting to learn new things), willing to get hands dirty (we’re unafraid of hard work), dislike cages (autonomy is important here), crafty (we’re ingenious problem solvers), and often run in groups (we’re a united team).
                </p><br/>
                <a
                  href="#Open-Positions"
                  className="bg-[#00df9a] rounded-md font-medium my-6 py-4 px-10 text-black text-center mt-4"
                >
                  See
                </a><br/><br/>
              </div>
            </div>
          </div>
        </div>

        <div className="home-container tb-padding w-container bg-white mt-8">
          <div className="career-section-title text-[rgb(0,223,154)] text-xl ml-5">④ Where We Work</div>
          <div className="maxw-100 ml-8 mr-8 lg:ml-32 lg:mr-32 mt-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <img
                  src="https://t3.ftcdn.net/jpg/02/06/20/46/360_F_206204662_jbPCY8mk8J1NhUAAvnljlP1KVmGBFwip.jpg"
                  loading="lazy"
                  alt="team photo, large group of people"
                  className="career-card-img rounded-xl relative h-[500px] lg:h-auto mb-5"
                />
              </div>
              <div className="split-content-r align-c lg:pl-8">
                <h2 className="text-4xl font-bold mt-4 text-black">Together Everywhere</h2>
                <p className="text-lg mt-4 text-black">
                  We offer flexible working locations - in-person at our offices in NY and SF or distributed across the globe - while also ensuring the team comes together with defined regularity. We hold 2 all company onsites per year and provide a $4k / yr travel stipend to gather and co-work.
                </p><br/><br/>
                <a
                  href="#Open-Positions"
                  className="bg-[#00df9a] rounded-md font-medium my-6 py-4 px-10 text-black text-center mt-4"
                >
                  See
                </a><br/><br/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Career;
