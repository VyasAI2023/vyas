import React from 'react';
import Footer from "./Footer";
import Navbar from './Navbar';
const Profile = () => {
  return (
    <div className='container'>
      <Navbar />
      <div className='header'>
        <div className='text'>Profile</div>
        <div className='underline'></div>
      </div>
      <div className='profile-details'>
        <h2>Welcome, User!</h2>
        {/* Display user details here */}
      </div>
    </div>
  );
};

export default Profile;
