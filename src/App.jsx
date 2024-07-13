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
import Pricing from "./components/Pricing";
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
import Claim from "./components/Claim";
import Blog from "./components/company/Blog";
import Blog2 from "./components/company/Blog2";
import Blog3 from "./components/company/Blog3";
import Blog4 from "./components/company/Blog4";
import Blog1 from "./components/company/Blog1";
import ForgotPassword from "./components/ForgotPassword";
import PrivateRoute from "./PrivateRoute";
import { AuthContextProvider } from "./AuthContext";
import MainPage from "./components/MainPage";

function App() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<MainBody />} />
        <Route path="/home" element={<Home />} />
        <Route path="/resources" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
        <Route path="/Modelpage" element={<Modelpage />} />
        <Route path="/Upload" element={<PrivateRoute><Upload /></PrivateRoute>} />
        <Route path="/company/About" element={<About />} />
        <Route path="/company/blog" element={<Blog />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/company/blog1" element={<Blog1 />} />
        <Route path="/company/blog2" element={<Blog2 />} />
        <Route path="/company/blog3" element={<Blog3 />} />
        <Route path="/company/blog4" element={<Blog4 />} />
        <Route path="/company/careers" element={<Career />} />
        <Route path="/company/jobs" element={<Jobs />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/status" element={<PrivateRoute><StatusPage /></PrivateRoute>} />
        <Route path="/store" element={<PrivateRoute><Store /></PrivateRoute>} />
        <Route path="/guide" element={<PrivateRoute><Guide /></PrivateRoute>} />
        <Route path="/logisticregression" element={<PrivateRoute><LogisticRegression /></PrivateRoute>} />
        <Route path="/decisiontree" element={<PrivateRoute><DecisionTree /></PrivateRoute>} />
        <Route path="/supportvectormachine" element={<PrivateRoute><SupportVectorMachine /></PrivateRoute>} />
        <Route path="/knearestneighbors" element={<PrivateRoute><KNearestNeighbors /></PrivateRoute>} />
        <Route path='/modellogisticregression' element={<ModelLogisticRegression />} />
        <Route path='/modeldecisiontree' element={<ModelDecisionTree />} />
        <Route path='/modelsupportvectormachine' element={<ModelSupportVectorMachine />} />
        <Route path='/modelknearestneighbors' element={<ModelKNearestNeighbors />} />
        <Route path="/claim" element={<PrivateRoute><Claim /></PrivateRoute>} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
