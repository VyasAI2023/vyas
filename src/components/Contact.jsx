import React, { useState } from 'react';
import Footer from "./Footer";
import Navbar from "./Navbar";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div>
    <Navbar />
    <div className="max-w-[600px] mx-auto p-4">
      <h2 className="text-5xl text-[rgb(0,223,154)] font-bold mb-4">Contact Our Team</h2>
      <p className="mb-6 text-white">
        Vyas provides a robust platform upon which you can Train models. We're happy to chat about how we can help you. Fill out the form below, and we’ll be in touch as soon as possible.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name*</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#00df9a] focus:border-[#00df9a] sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email*</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#00df9a] focus:border-[#00df9a] sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message*</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#00df9a] focus:border-[#00df9a] sm:text-sm"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#00df9a] hover:bg-[#00c982] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00df9a]"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
    <Footer />
    </div>
  );
};

export default Contact;
