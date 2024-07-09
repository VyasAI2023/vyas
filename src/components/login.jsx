// src/components/Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './loginsignup.css';
import em from '../assets/email.png';
import pass from '../assets/password.png';
import Navbar from "./Navbar";
import Footer from "./Footer";
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/Profile');
    } catch (error) {
      alert('Invalid email or password');
    }
  };

  return (
    <div>
      <Navbar />
      <div className='con'>
        <div className='header'>
          <div className='text'>Login</div>
          <div className='underline'></div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input">
            <img src={em} alt="" />
            <input
              type="email"
              placeholder='Email ID'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input">
            <img src={pass} alt="" />
            <input
              type="password"
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="forget-password">Lost Password? <span>Click Here!</span></div>
          <div className="submit-container">
            <button onClick={() => navigate('/Signup')} className={'gray'}>Sign Up</button>
            <button type="sub" className={'sub'}>Login</button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
