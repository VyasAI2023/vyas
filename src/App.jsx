import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";

import MainBody from "./components/MainBody";
import LoginSignupPage from "./components/LoginSignupPage";
function App() {
  return (
    // <div>
    //   <Navbar />
    //   <Hero />
    //   <Analytics />
    //   <Newsletter />
    //   {/* <Cards /> */}
    //   <Footer />
    // </div>
    <Routes>
      <Route path="/" element={<MainBody />} />
      <Route path="/home" element={<Home />} />
      <Route path="/company" element={<Home />} />
      <Route path="/resources" element={<Home />} />
      <Route path="/contact" element={<Home />} />
      <Route path="/about" element={<Home />} />
      <Route path="/signup" element={<LoginSignupPage />} />
    </Routes>
  );
}

export default App;
