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
import Blog from "./components/company/Blog";
import Pricing from "./components/Pricing";
import Blog1 from "./components/company/Blog1";
import Career from "./components/company/Career";
import Jobs from "./components/company/Jobs";
import Policy from "./components/Policy";
import Terms from "./components/Terms";
import Documentation from "./components/Documentation";
import StatusPage from "./components/StatusPage";
import Store from "./components/Store";
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
      <Route path="/company/blog" element={<Blog />} />
      <Route path="/pricing" element={<Pricing/>}/>
      <Route path="/company/Blog1" element={<Blog1/>}/>
      <Route path="/company/careers" element={<Career/>}/>      
      <Route path="/company/jobs" element={<Jobs/>}/>
      <Route path="/policy" element={<Policy/>}/>
      <Route path="/terms" element={<Terms/>}/>
      <Route path="/documentation" element={<Documentation/>}/>
      <Route path="/status" element={<StatusPage/>}/>
      <Route path="/store" element={<Store/>}/>
      </Routes>
  );
}

export default App;
