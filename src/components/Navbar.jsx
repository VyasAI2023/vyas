import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [showCompanyCard, setShowCompanyCard] = useState(false);
  const [showResourcesCard, setShowResourcesCard] = useState(false);
  const [showModelCard, setShowModelCard] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleCompanyCard = () => {
    setShowCompanyCard(!showCompanyCard);
  };

  const handleResourcesCard = () => {
    setShowResourcesCard(!showResourcesCard);
  };

  const handleModelCard = () => {
    setShowModelCard(!showModelCard);
  };

  return (
    <div className="relative flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">
        <Link to="/">Vyas.AI</Link>
      </h1>
      <ul className="hidden md:flex">
        <li className="p-4 cursor-pointer hover:text-gray-500 hover:underline">
          <Link to="/">Home</Link>
        </li>
        <li
          className="p-4 cursor-pointer hover:text-gray-500 hover:underline relative"
          onMouseEnter={handleCompanyCard}
          onMouseLeave={handleCompanyCard}
        >
          <Link to="">Company</Link>
          {showCompanyCard && (
            <div className="absolute left-0 mt-2 w-48 bg-white text-black p-4 shadow-lg rounded">
              <Link
                to="/company/About"
                className="block p-2 text-[rgb(0,223,154)] hover:bg-gray-200 rounded"
              >
                About Us
              </Link>
              
              <Link
                to="/company/jobs"
                className="block p-2 text-[rgb(0,223,154)] hover:bg-gray-200 rounded"
              >
                Jobs
              </Link>
              <Link
                to="/company/careers"
                className="block p-2 text-[rgb(0,223,154)] hover:bg-gray-200 rounded"
              >
                Careers
              </Link>
            </div>
          )}
        </li>
        <li
          className="p-4 cursor-pointer hover:text-gray-500 hover:underline relative"
          onMouseEnter={handleResourcesCard}
          onMouseLeave={handleResourcesCard}
        >
          <Link to="">Resources</Link>
          {showResourcesCard && (
            <div className="absolute left-0 mt-2 w-48 bg-white text-black p-4 shadow-lg rounded">
              <Link
                to="/company/blog"
                className="block p-2 text-[rgb(0,223,154)] hover:bg-gray-200 rounded"
              >
                Blog
              </Link>
              <Link
                to="/documentation"
                className="block p-2 text-[rgb(0,223,154)] hover:bg-gray-200 rounded"
              >
                Documentation
              </Link>
              <Link
                to="/modelpage"
                className="block p-2 text-[rgb(0,223,154)] hover:bg-gray-200 rounded"
              >
                Models
              </Link>
            </div>
          )}
        </li>
        <li className="p-4 cursor-pointer hover:text-gray-500 hover:underline">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="p-4 cursor-pointer hover:text-gray-500 hover:underline">
          <Link to="/pricing">Pricing</Link>
        </li>
        <li className="p-4 cursor-pointer hover:text-gray-500 hover:underline">
          <Link to="/login">Login</Link>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden cursor-pointer">
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
          Vyas.AI
        </h1>
        <li className="p-4 cursor-pointer hover:text-gray-500 hover:underline">
          <Link to="/">Home</Link>
        </li>
        <li
          className="p-4 cursor-pointer hover:text-gray-500 hover:underline relative "
          onClick={handleResourcesCard}
        >
          <Link to="">Resources</Link>
          {showResourcesCard && (
            <div className="absolute left-0 mt-2 w-48 bg-white text-black p-4 shadow-lg rounded">
              <Link
                to="/company/blog"
                className="block p-2 text-[rgb(0,223,154)] hover:bg-gray-200 rounded"
              >
                Blog
              </Link>
              <Link
                to="/documentation"
                className="block p-2 text-[rgb(0,223,154)] hover:bg-gray-200 rounded"
              >
                Documentation
              </Link>
              <Link
                to="/modelpage"
                className="block p-2 text-[rgb(0,223,154)] hover:bg-gray-200 rounded"
              >
                Models
              </Link>
            </div>
          )}
        </li>
        <li className="p-4 cursor-pointer hover:text-gray-500 hover:underline">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="p-4 cursor-pointer hover:text-gray-500 hover:underline">
          <Link to="/pricing">Pricing</Link>
        </li>
        <li className="p-4 cursor-pointer hover:text-gray-500 hover:underline">
          <Link to="/login">Login</Link>
        </li>
        <li
          className="p-4 cursor-pointer hover:text-gray-500 hover:underline relative"
          onClick={handleCompanyCard}
        >
          <Link to="">Company</Link>
          {showCompanyCard && (
            <div className="absolute left-0 mt-2 w-48 bg-white text-black p-4 shadow-lg rounded width:100%">
              <Link
                to="/company/About"
                className="block p-2 text-[rgb(0,223,154)] hover:bg-gray-200 rounded"
              >
                About Us
              </Link>
              <Link
                to="/company/jobs"
                className="block p-2 text-[rgb(0,223,154)] hover:bg-gray-200 rounded"
              >
                Jobs
              </Link>
              <Link
                to="/company/careers"
                className="block p-2 text-[rgb(0,223,154)] hover:bg-gray-200 rounded"
              >
                Careers
              </Link>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
