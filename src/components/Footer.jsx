import React from "react";
import { Link } from "react-router-dom";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">Vyas.AI</h1>
        <p className="py-4">© 2024 Vyas.AI, Inc. All rights reserved.</p>
        <div className="flex justify-between md:w-[75%] my-6">
          <a
            href="https://www.linkedin.com/in/vyas-ai-76217b279/"
            target="_blank"
          >
            <FaLinkedin size={30} />
          </a>
          <a>
            <FaTwitterSquare size={30} />
          </a>
          <a>
            <FaGithubSquare size={30} />
          </a>
          <a>
            <FaFacebookSquare size={30} />
          </a>
          <a>
            <FaInstagram size={30} />
          </a>
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-[#00df9a]">Solutions</h6>
          <ul>
            <li className="py-2 text-sm">
              <Link to="/analytics">Analytics</Link>
            </li>
            <li className="py-2 text-sm">
              <Link to="/marketing">Marketing</Link>
            </li>
            <li className="py-2 text-sm">
              <Link to="/commerce">Commerce</Link>
            </li>
            <li className="py-2 text-sm">
              <Link to="/insights">Insights</Link>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-[#00df9a]">Support</h6>
          <ul>
            <li className="py-2 text-sm">
              <Link to="/pricing">Pricing</Link>
            </li>
            <li className="py-2 text-sm">
              <Link to="/documentation">Documentation</Link>
            </li>
            <li className="py-2 text-sm">
              <Link to="/guides">Guides</Link>
            </li>
            <li className="py-2 text-sm">
              <Link to="/api-status">API Status</Link>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-[#00df9a]">Company</h6>
          <ul>
            <li className="py-2 text-sm">
              <Link to="/company/about">About</Link>
            </li>
            <li className="py-2 text-sm">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="py-2 text-sm">
              <Link to="/jobs">Jobs</Link>
            </li>
            <li className="py-2 text-sm">
              <Link to="/careers">Careers</Link>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-[#00df9a]">Legal</h6>
          <ul>
            <li className="py-2 text-sm">
              <Link to="/claim">Claim</Link>
            </li>
            <li className="py-2 text-sm">
              <Link to="/policy">Policy</Link>
            </li>
            <li className="py-2 text-sm">
              <Link to="/terms">Terms</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
