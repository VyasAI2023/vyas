import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate, useLocation } from 'react-router-dom';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
      const path = location.pathname.toLowerCase();
      if (!user && path !== '/login' && path !== '/signup' && path!== '/' && path != '/forgotpassword' &&  path != '/company/blog' && path != '/company/blog1' && path != '/company/blog2' && path != '/company/blog3' && path != '/company/blog4' && path != '/company/jobs' && path != '/company/careers' && path != '/documentation' && path != '/pricing' && path != '/contact' && path != '/company/about' && path != '/modelpage') {
        navigate('/login');
      }
    });

    return unsubscribe;
  }, [navigate, location]);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};