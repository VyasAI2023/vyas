import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">
        <Link to="/">Vyas.AI</Link>
      </h1>
      <ul className="hidden md:flex">
        <li className="p-4 cursor-pointer hover:text-gray-500 hover:underline">
          <Link to="/">Home</Link>
        </li>
        <li className="p-4 cursor-pointer hover:text-gray-500 hover:underline">
          <Link to="/company">Company</Link>
        </li>
        <li className="p-4 cursor-pointer hover:text-gray-500 hover:underline">
          <Link to="/resources">Resources</Link>
        </li>
        <li className="p-4 cursor-pointer hover:text-gray-500 hover:underline">
          <Link to="/about">About</Link>
        </li>
        <li className="p-4 cursor-pointer hover:text-gray-500 hover:underline">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="p-4 cursor-pointer hover:text-gray-500 hover:underline">
          <Link to="/login">Login</Link>
        </li>
        <li className="p-4 cursor-pointer hover:text-gray-500 hover:underline">
          <Link to="/Modelpage">Models</Link>
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
        <li className="p-4 border-b border-gray-600 cursor-pointer hover:bg-[#00df9a] hover:text-gray-800">
          <Link to="/">Home</Link>
        </li>
        <li className="p-4 border-b border-gray-600 cursor-pointer hover:bg-[#00df9a] hover:text-gray-800">
          <Link to="/company">Company</Link>
        </li>
        <li className="p-4 border-b border-gray-600 cursor-pointer hover:bg-[#00df9a] hover:text-gray-800">
          <Link to="/resources">Resources</Link>
        </li>
        <li className="p-4 border-b border-gray-600 cursor-pointer hover:bg-[#00df9a] hover:text-gray-800">
          <Link to="/about">About</Link>
        </li>
        <li className="p-4 cursor-pointer hover:bg-[#00df9a] hover:text-gray-600">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
