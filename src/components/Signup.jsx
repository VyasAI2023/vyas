import React, { useState } from 'react';
import './signup.css';
import emails from '../assets/email.png';
import passwords from '../assets/password.png';
import person from '../assets/person.png';
import { useNavigate } from 'react-router-dom';
import Navbar from "./Navbar";
import Footer from "./Footer";


const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation to ensure all fields are filled
    if (!name || !email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3002/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await response.json();
      console.log(data);

      if (data === 'exist') {
        setError('User already exists.');
      } else {
        setError('');
        navigate('/login'); // Redirect on successful signup
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Something went wrong. Please try again later.');
    }
  };

  return (
    <div>
      <Navbar />
      <div className='con'>
        <form onSubmit={handleSubmit}>
          <div className='header'>
            <div className='text'>Sign Up</div>
            <div className='underline'></div>
          </div>
          {error && <p className="error">{error}</p>} {/* Display error message if there is an error */}
          <div className='input'>
            <img src={person} alt='' />
            <input
              type='text'
              placeholder='Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='input'>
            <img src={emails} alt='' />
            <input
              type='email'
              placeholder='Email ID'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='input'>
            <img src={passwords} alt='' />
            <input
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='submit-container'>
            <button type='sub' className='sub'>Submit</button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
