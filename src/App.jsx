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
import Guide from "./components/Guide";
import LogisticRegression from "./LogisticRegression";
import DecisionTree from "./DecisionTree";
import SupportVectorMachine from "./SupportVectorMachine";
import KNearestNeighbors from "./KNearestNeighbors";
import ModelLogisticRegression from "./components/ModelLogisticRegression";
import ModelDecisionTree from "./components/ModelDecisionTree";
import ModelSupportVectorMachine from "./components/ModelSupportVectorMachine";
import ModelKNearestNeighbors from "./components/ModelKNearestNeighbors";
import Blog2 from "./components/company/Blog2";
import Blog3 from "./components/company/Blog3";
import Blog4 from "./components/company/Blog4";
import Claim from "./components/Claim";

function App() {
  return (
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
      <Route path="/company/blog" element={<Blog/>} />
      <Route path="/pricing" element={<Pricing/>}/>
      <Route path="/company/blog1" element={<Blog1/>}/>
      <Route path="/company/blog2" element={<Blog2/>}/>
      <Route path="/company/blog3" element={<Blog3/>}/>
      <Route path="/company/blog4" element={<Blog4/>}/>
      <Route path="/company/careers" element={<Career/>}/>      
      <Route path="/company/jobs" element={<Jobs/>}/>
      <Route path="/policy" element={<Policy/>}/>
      <Route path="/terms" element={<Terms/>}/>
      <Route path="/documentation" element={<Documentation/>}/>
      <Route path="/status" element={<StatusPage/>}/>
      <Route path="/store" element={<Store/>}/>
      <Route path="/guide" element={<Guide/>}/>
      <Route path="/logisticregression" element={<LogisticRegression/>}/>
      <Route path="/decisiontree" element={<DecisionTree/>}/>
      <Route path="/supportvectormachine" element={<SupportVectorMachine/>}/>
      <Route path="/knearestneighbors" element={<KNearestNeighbors/>}/>
      <Route path='/modellogisticregression' element={<ModelLogisticRegression/>}/>
      <Route path='/modeldecisiontree' element={<ModelDecisionTree/>}/>
      <Route path='/modelsupportvectormachine' element={<ModelSupportVectorMachine/>}/>
      <Route path='/modelknearestneighbors' element={<ModelKNearestNeighbors/>}/>
      <Route path="/claim" element={<Claim/>}/>
    </Routes>
  );
}

export default App;
