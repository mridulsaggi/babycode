import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Dashboard from './Dashboard';
import { Link } from 'react-router-dom';

const Screen = () => {
  const auth = getAuth();
  const [authenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });

    // Clean up the subscription when the component unmounts
    return () => unsubscribe();
  }, [auth]);

  return (
    authenticated ? <Dashboard /> :
      <div className='min-h-screen w-full bg-[#c7c7c7] flex flex-col  items-center justify-center'>
        <h1 className='text-3xl '>WELCOME TO THE WEBSITE</h1>
        <div className='m-5'>
          <button className='m-2 bg-[blue] h-[3rem] w-[10rem] rounded-lg text-white font-bold'>
            <Link to="/login">LOGIN</Link>
          </button>
          <button className='m-2 bg-[blue] h-[3rem] w-[10rem] rounded-lg text-white font-bold'>
            <Link to="/signup">SIGNUP</Link>
          </button>
        </div>
      </div>
  );
};

export default Screen;
