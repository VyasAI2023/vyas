import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { Modelpage } from "./components/Modelpage";
import MainBody from "./components/MainBody";
import Login from "./components/login";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import Upload from "./components/Upload";
import Contact from "./components/Contact";
import About from "./components/company/About";
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
      <Route path="/resources" element={<Home />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Signup" element={<Signup/>}/>
      <Route path="/Profile" element={<Profile/>}/>
      <Route path="/Modelpage" element={<Modelpage/>}/>
      <Route path="/Upload" element={<Upload/>}/>
      <Route path="/company/About" element={<About />} />
      </Routes>
  );
}

export default App;
