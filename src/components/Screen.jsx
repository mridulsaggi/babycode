import React, { useState, useEffect } from 'react';
import Dashboard from './Dashboard';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth,GoogleAuthProvider,signInWithPopup,onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase';
const Screen = () => {
  const [user, setUser] = useState(null);
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user; // The signed-in user info.
        setuser(result.user)
      }).catch((error) => {
        console.log("error while login :", error)
      });
  };
  useEffect(() => {
    // Check if user is already logged in
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        navigate('/');
      }
    });
  }, [navigate]);
  return (
    <div className='min-h-screen w-full bg-[#c7c7c7] flex flex-col  items-center justify-center'>
        <h1 className='text-2xl sm:text-3xl'>WELCOME TO THE WEBSITE. </h1>
        <h1 className='text-xl mt-[1rem]'>Please login using google </h1>
        <div className='m-3 sm:m-5'>
          <button className='m-2 bg-[blue] h-[3rem] w-[10rem] rounded-lg text-white font-bold' onClick={handleLogin}>
            LOGIN
          </button>
          {/* <button className='m-2 bg-[blue] h-[3rem] w-[10rem] rounded-lg text-white font-bold'>
            <Link to="/signup">SIGNUP</Link>
          </button> */}
        </div>
      </div>
  );
};

export default Screen;
