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
        <Route path="/Modelpage" element={<PrivateRoute><Modelpage /></PrivateRoute>} />
        <Route path="/Upload" element={<PrivateRoute><Upload /></PrivateRoute>} />
        <Route path="/company/About" element={<PrivateRoute><About /></PrivateRoute>} />
        <Route path="/company/blog" element={<PrivateRoute><Blog /></PrivateRoute>} />
        <Route path="/pricing" element={<PrivateRoute><Pricing /></PrivateRoute>} />
        <Route path="/company/blog1" element={<PrivateRoute><Blog1 /></PrivateRoute>} />
        <Route path="/company/blog2" element={<PrivateRoute><Blog2 /></PrivateRoute>} />
        <Route path="/company/blog3" element={<PrivateRoute><Blog3 /></PrivateRoute>} />
        <Route path="/company/blog4" element={<PrivateRoute><Blog4 /></PrivateRoute>} />
        <Route path="/company/careers" element={<PrivateRoute><Career /></PrivateRoute>} />
        <Route path="/company/jobs" element={<PrivateRoute><Jobs /></PrivateRoute>} />
        <Route path="/policy" element={<PrivateRoute><Policy /></PrivateRoute>} />
        <Route path="/terms" element={<PrivateRoute><Terms /></PrivateRoute>} />
        <Route path="/documentation" element={<PrivateRoute><Documentation /></PrivateRoute>} />
        <Route path="/status" element={<PrivateRoute><StatusPage /></PrivateRoute>} />
        <Route path="/store" element={<PrivateRoute><Store /></PrivateRoute>} />
        <Route path="/guide" element={<PrivateRoute><Guide /></PrivateRoute>} />
        <Route path="/logisticregression" element={<PrivateRoute><LogisticRegression /></PrivateRoute>} />
        <Route path="/decisiontree" element={<PrivateRoute><DecisionTree /></PrivateRoute>} />
        <Route path="/supportvectormachine" element={<PrivateRoute><SupportVectorMachine /></PrivateRoute>} />
        <Route path="/knearestneighbors" element={<PrivateRoute><KNearestNeighbors /></PrivateRoute>} />
        <Route path='/modellogisticregression' element={<PrivateRoute><ModelLogisticRegression /></PrivateRoute>} />
        <Route path='/modeldecisiontree' element={<PrivateRoute><ModelDecisionTree /></PrivateRoute>} />
        <Route path='/modelsupportvectormachine' element={<PrivateRoute><ModelSupportVectorMachine /></PrivateRoute>} />
        <Route path='/modelknearestneighbors' element={<PrivateRoute><ModelKNearestNeighbors /></PrivateRoute>} />
        <Route path="/claim" element={<PrivateRoute><Claim /></PrivateRoute>} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
