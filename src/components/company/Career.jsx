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
      <div className="min-h-screen">
        <div className="max-w-[1000px] mx-auto p-4 mt-8">
          <div className="text-center">
            <h2 className="text-5xl text-[rgb(0,223,154)] font-bold mb-4">Careers</h2>
            <hr className="mt-2 w-40 mx-auto border-t-2 border-[#00df9a]" />
          </div>
        </div><br/><br/>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-4 max-w-[1000px] mx-auto">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold text-[rgb(0,223,154)]">CAREERS</p>
            <h1 className="text-4xl font-bold mt-4 text-white">Join the team</h1>
            <p className="text-lg mt-4 text-white">
              Machine learning is the most transformative technology of our lifetime. Your work will shape its adoption.
            </p>
            <a
              href="#Open-Positions"
              className="mt-6 inline-block bg-white text-gray-800 font-semibold py-2 px-4 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100"
            >
              Explore all jobs
            </a>
          </div>
          <div className="relative h-[700px] lg:h-auto">
  {images.map((imageUrl, index) => (
    <img
      key={index}
      className={`rounded-2xl absolute top-0 left-0 w-full h-full object-cover ${
        index === currentImageIndex ? "opacity-100" : "opacity-0"
      } transition-opacity duration-500 ease-in-out`}
      src={imageUrl}
      alt={`Career Hero Image ${index + 1}`}
    />
  ))}
</div>

        </div>
        <br/><br/>
        <div className="career-card-section bg-gray-100 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <p className="text-sm font-semibold text-[rgb(0,223,154)]">WHO WE ARE</p>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Making the World Programmable
              </h2>
              <p className="text-lg mt-4 text-gray-600">
                At Roboflow, we believe anything that can be seen will be turned into software.
                Over 250,000 developers build with our tools. We’ve raised 23M from leading
                investors and over 16k organizations - including over half the Fortune 100 - are
                building with Roboflow’s tools.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-4 mx-auto bg-white">
  <div className="relative h-[500px] lg:h-auto">
    <img
      src="https://cdn.prod.website-files.com/5f6bc60e665f54545a1e52a5/6570d777e02c5a4b87579040_careers-card-2.webp"
      loading="lazy"
      id="w-node-_94cd05ae-aae5-5323-ef41-95384da19b30-318ce6fb"
      sizes="(max-width: 479px) 95vw, (max-width: 767px) 97vw, 500px"
      alt="Roboflow team photo in San Diego, large group of people"
      srcSet="
        https://cdn.prod.website-files.com/5f6bc60e665f54545a1e52a5/6570d777e02c5a4b87579040_careers-card-2-p-500.webp 500w,
        https://cdn.prod.website-files.com/5f6bc60e665f54545a1e52a5/6570d777e02c5a4b87579040_careers-card-2-p-800.webp 800w,
        https://cdn.prod.website-files.com/5f6bc60e665f54545a1e52a5/6570d777e02c5a4b87579040_careers-card-2-p-1080.webp 1080w,
        https://cdn.prod.website-files.com/5f6bc60e665f54545a1e52a5/6570d777e02c5a4b87579040_careers-card-2.webp 1200w"
      className="career-card-img rounded-2xl"
    />
  </div>
  <div className="flex flex-col justify-center">
    <p className="text-sm font-semibold text-[rgb(0,223,154)]">② What We're Looking For</p>
    <h1 className="text-4xl font-bold mt-4 text-black">"Full-Stack" People</h1>
    <p className="text-lg mt-4 text-black">
      Own outcomes, not only inputs. Engineers build and drive adoption. Go-To-Market propels revenue and catalyzes product direction. Use (and learn) many skills, not only your core expertise. Our goal is to build a magnetic environment for exceptional talent.
    </p>
    <a
      href="#Open-Positions"
      className="bg-[#00df9a] w-[50px] rounded-md font-medium my-6 mx-auto py-3 text-black text-center"
    >
      see
    </a>
  </div>
</div>


        {/* <div className="home-container tb-padding w-container">
          <div className="career-section-title text-white">② What We're Looking For</div>
          <div className="maxw-100">
            <div className="w-layout-grid split-content-grid lg:grid-cols-2 gap-8">
              <div id="w-node-_94cd05ae-aae5-5323-ef41-95384da19b2f-318ce6fb" className="relative">
                <img
                  src="https://cdn.prod.website-files.com/5f6bc60e665f54545a1e52a5/6570d777e02c5a4b87579040_careers-card-2.webp"
                  loading="lazy"
                  id="w-node-_94cd05ae-aae5-5323-ef41-95384da19b30-318ce6fb"
                  sizes="(max-width: 479px) 95vw, (max-width: 767px) 97vw, 500px"
                  alt="Roboflow team photo in San Diego, large group of people"
                  srcSet="
                    https://cdn.prod.website-files.com/5f6bc60e665f54545a1e52a5/6570d777e02c5a4b87579040_careers-card-2-p-500.webp 500w,
                    https://cdn.prod.website-files.com/5f6bc60e665f54545a1e52a5/6570d777e02c5a4b87579040_careers-card-2-p-800.webp 800w,
                    https://cdn.prod.website-files.com/5f6bc60e665f54545a1e52a5/6570d777e02c5a4b87579040_careers-card-2-p-1080.webp 1080w,
                    https://cdn.prod.website-files.com/5f6bc60e665f54545a1e52a5/6570d777e02c5a4b87579040_careers-card-2.webp 1200w"
                  className="career-card-img"
                />
              </div>
              <div className="split-content-r lg:text-right">
                <h2 className="text-white">"Full-Stack" People</h2>
                <p className="rf-subhead text-white w-full lg:w-[600px]">
                  Own outcomes, not only inputs. Engineers build and drive adoption. Go-To-Market propels revenue and catalyzes product direction. Use (and learn) many skills, not only your core expertise. Our goal is to build a magnetic environment for exceptional talent.
                </p>
                <a href="#" className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 py-3 text-black inline-block">
                  Apply here
                </a>
              </div>
            </div>
          </div>
        </div> */}
<hr/>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-4 mx-auto bg-gray-100">
  <div className="flex flex-col justify-center">
    <p className="text-sm font-semibold text-[rgb(0,223,154)]"> How We Work Together</p>
    <h1 className="text-4xl font-bold mt-4 text-black">Curious, Crafty, Determined</h1>
    <p className="text-lg mt-4 text-black">
      Our mascot is a raccoon because they have admirable qualities: curious (we’re always wanting to learn new things), willing to get hands dirty (we’re unafraid of hard work), dislike cages (autonomy is important here), crafty (we’re ingenious problem solvers), and often run in groups (we’re a united team).
    </p>
    <a
      href="#Open-Positions"
      className="bg-[#00df9a] w-[50px] rounded-md font-medium my-6 mx-auto py-3 text-black text-center"
    >
      see
    </a>
  </div>
  <div className="relative h-[500px] lg:h-auto">
    <img
      src="https://cdn.prod.website-files.com/5f6bc60e665f54545a1e52a5/657212a925cc98418dc214ec_careers-card-lenny.webp"
      loading="lazy"
      id="w-node-_94cd05ae-aae5-5323-ef41-95384da19b3f-318ce6fb"
      sizes="(max-width: 479px) 95vw, (max-width: 767px) 97vw, 500px"
      alt="Purple raccoon sticker overlapping a photo of three male Roboflow employees standing outside talking"
      srcSet="
        https://cdn.prod.website-files.com/5f6bc60e665f54545a1e52a5/657212a925cc98418dc214ec_careers-card-lenny-p-500.webp 500w,
        https://cdn.prod.website-files.com/5f6bc60e665f54545a1e52a5/657212a925cc98418dc214ec_careers-card-lenny-p-800.webp 800w,
        https://cdn.prod.website-files.com/5f6bc60e665f54545a1e52a5/657212a925cc98418dc214ec_careers-card-lenny-p-1080.webp 1080w,
        https://cdn.prod.website-files.com/5f6bc60ea4b87579040_careers-card-lenny.webp 1200w"
      className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out"
    />
  </div>
</div>

<hr/>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-4 mx-auto bg-white"> 
  <div className="relative h-[500px] lg:h-auto">
    <img
      src="https://cdn.prod.website-files.com/5f6bc60e665f54545a1e52a5/65720fd20185ca22162c0371_careers-card-4-new.webp"
      loading="lazy"
      id="w-node-_94cd05ae-aae5-5323-ef41-95384da19b51-318ce6fb"
      sizes="(max-width: 479px) 95vw, (max-width: 767px) 97vw, 500px"
      alt="Two Roboflow employees with hands on hips isolated on gradient background"
      srcSet="
        https://cdn.prod.website-files.com/5f6bc60e665f54545a1e52a5/65720fd20185ca22162c0371_careers-card-4-new-p-500.webp 500w,
        https://cdn.prod.website-files.com/5f6bc60e665f54545a1e52a5/65720fd20185ca22162c0371_careers-card-4-new-p-800.webp 800w,
        https://cdn.prod.website-files.com/5f6bc60e665f54545a1e52a5/65720fd20185ca22162c0371_careers-card-4-new.webp 1194w"
      className="career-card-img"
    />
  </div>
  <div className="flex flex-col justify-center">
    <p className="text-sm font-semibold text-[rgb(0,223,154)]"> Where We Work</p>
    <h1 className="text-4xl font-bold mt-4 text-Black">Together everywhere.</h1>
    <p className="text-lg mt-4 text-black">
    We offer flexible working locations - in-person at our offices in NY and SF or distributed across the globe - while also ensuring the team comes together with defined regularity. We hold 2 all company onsites per year and provide a $4k / yr travel stipend to gather and co-work.
   </p>
    <a
      href="#Open-Positions"
      className="bg-[#00df9a] w-[50px] rounded-md font-medium my-6 mx-auto py-3 text-black text-center"
    >
      see
    </a>
  </div>
</div>

{/* 
<div className="home-container tb-padding w-container">
      <div className="career-section-title text-white"> Where We Work</div>
      <div className="maxw-100">
        <div className="w-layout-grid split-content-grid">
          <div id="w-node-_94cd05ae-aae5-5323-ef41-95384da19b50-318ce6fb">
            <img
              src="https://cdn.prod.website-files.com/5f6bc60e665f54545a1e52a5/65720fd20185ca22162c0371_careers-card-4-new.webp"
              loading="lazy"
              id="w-node-_94cd05ae-aae5-5323-ef41-95384da19b51-318ce6fb"
              sizes="(max-width: 479px) 95vw, (max-width: 767px) 97vw, 500px"
              alt="Two Roboflow employees with hands on hips isolated on gradient background"
              srcSet="
                https://cdn.prod.website-files.com/5f6bc60e665f54545a1e52a5/65720fd20185ca22162c0371_careers-card-4-new-p-500.webp 500w,
                https://cdn.prod.website-files.com/5f6bc60e665f54545a1e52a5/65720fd20185ca22162c0371_careers-card-4-new-p-800.webp 800w,
                https://cdn.prod.website-files.com/5f6bc60e665f54545a1e52a5/65720fd20185ca22162c0371_careers-card-4-new.webp 1194w"
              className="career-card-img"
            />
          </div>
          <div className="split-content-r align-c">
            <h2 className="text-white">Together everywhere.</h2>
            <p className="rf-subhead text-white">
              We offer flexible working locations - in-person at our offices in NY and SF or distributed across the globe - while also ensuring the team comes together with defined regularity. We hold 2 all company onsites per year and provide a $4k / yr travel stipend to gather and co-work.
            </p>
            <a href="https://blog.roboflow.com/remote-not-distant/" className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
              Remote, not distant
            </a>
          </div>
        </div>
      </div>
    </div> */}
    {/* End of Additional Sections */}

  </div>
  <Footer />
</div>
);
};

export default Career;
