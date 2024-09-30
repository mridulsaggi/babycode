import React, { useEffect, useState } from 'react';
import { Home, Users, Book, ShoppingBag, MessageSquare, LogOut, Video, Menu, Cross } from 'lucide-react';
import Prepare from './prepare';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { onAuthStateChanged, GoogleAuthProvider, signOut } from "firebase/auth";
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';
import Screen from './Screen';

const mockData = [
  { date: '16 Feb', value: 6.5 },
  { date: '17 Feb', value: 7 },
  { date: '18 Feb', value: 6.8 },
  { date: '19 Feb', value: 7.2 },
  { date: '20 Feb', value: 8.5 },
  { date: '21 Feb', value: 9.5 },
  { date: '22 Feb', value: 10 },
];

const Dashboard = () => {
  const [user, setuser] = useState(null);

  const provider = new GoogleAuthProvider();


  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setuser(null);
        alert("User signed out")
        console.log("User signed out");
      })
      .catch((error) => {
        console.error("Error during logout", error);
      });
  }

  const [toggle, settoggle] = useState(false);
  const togglehandler = () => {
    settoggle(!toggle)
  }
  const navigate=useNavigate()
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setuser(user);
      } else {
        navigate('/login');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  if (!user) return null;
  return (
    <div className="flex relative min-h-screen bg-gray-100">
        {/* Sidebar */}
        {
          !toggle ?
            "" :
            <aside className="w-[50%] md:hidden sm:w-40%] md:w-[30%] z-20 absolute top-0 left-0 bg-blue-600 text-white p-6">
              <button onClick={togglehandler}><Cross /></button>
              <h1 className="text-2xl font-bold mb-8">BabyCode</h1>
              <nav>
                <ul className="space-y-4">
                  <li className='hover:bg-[#dde5ff3a] rounded-lg h-[2rem] p-1'><a href="#" className="flex items-center space-x-2"><Home size={20} /> <span>Home</span></a></li>
                  <li className='hover:bg-[#dde5ff3a] rounded-lg h-[2rem] p-1'><a href="#" className="flex items-center space-x-2"><Users size={20} /> <span>Community</span></a></li>
                  <li className='hover:bg-[#dde5ff3a] rounded-lg h-[2rem] p-1'><a href="#" className="flex items-center space-x-2"><Book size={20} /> <span>Stories</span></a></li>
                  <li className='hover:bg-[#dde5ff3a] rounded-lg h-[2rem] p-1'><a href="#" className="flex items-center space-x-2"><ShoppingBag size={20} /> <span>Shop</span></a></li>
                  <li className='hover:bg-[#dde5ff3a] rounded-lg h-[2rem] p-1'><a href="#" className="flex items-center space-x-2"><MessageSquare size={20} /> <span>Feedback</span></a></li>
                </ul>
              </nav>
              <div className="mt-[3rem]">
                <div className=" bg-[#d3daff] text-blue-500 p-4 rounded-lg mb-4">
                  <h3 className="font-bold mb-2">Explore premium features with ease!</h3>
                  <ul className="text-sm space-y-1">
                    <li>✓ Unlimited Speaking Test Access</li>
                    <li>✓ Unlimited Writing Test Access</li>
                    <li>✓ Analyze Your Answer</li>
                    <li>✓ Check Band Score</li>
                  </ul>
                  <div className='flex justify-between'>
                    <p className="mt-2 text-sm">Only @ ₹ 299</p>
                    <button className="mt-2  w-[50%] text-[0.7rem] bg-blue-700 text-white px-4 py-2 rounded">Buy Now</button>
                  </div>
                </div>
                {/* <button className="flex items-center space-x-2"><LogOut size={20} /> <span>Logout</span></button> */}
              </div>
            </aside>
        }
        <aside className="hidden md:block w-[20%] bg-blue-600 text-white p-6">
          <h1 className="text-2xl font-bold mb-8">BabyCode</h1>
          <nav>
            <ul className="space-y-4">
              <li className='hover:bg-[#dde5ff3a] rounded-lg h-[2rem] p-1'><a href="#" className="flex items-center space-x-2"><Home size={20} /> <span>Home</span></a></li>
              <li className='hover:bg-[#dde5ff3a] rounded-lg h-[2rem] p-1'><a href="#" className="flex items-center space-x-2"><Users size={20} /> <span>Community</span></a></li>
              <li className='hover:bg-[#dde5ff3a] rounded-lg h-[2rem] p-1'><a href="#" className="flex items-center space-x-2"><Book size={20} /> <span>Stories</span></a></li>
              <li className='hover:bg-[#dde5ff3a] rounded-lg h-[2rem] p-1'><a href="#" className="flex items-center space-x-2"><ShoppingBag size={20} /> <span>Shop</span></a></li>
              <li className='hover:bg-[#dde5ff3a] rounded-lg h-[2rem] p-1'><a href="#" className="flex items-center space-x-2"><MessageSquare size={20} /> <span>Feedback</span></a></li>
            </ul>
          </nav>
          <div className="mt-[3rem]">
            <div className=" bg-[#d3daff] text-blue-500 p-4 rounded-lg mb-4">
              <h3 className="font-bold mb-2">Explore premium features with ease!</h3>
              <ul className="text-sm space-y-1">
                <li>✓ Unlimited Speaking Test Access</li>
                <li>✓ Unlimited Writing Test Access</li>
                <li>✓ Analyze Your Answer</li>
                <li>✓ Check Band Score</li>
              </ul>
              <div className='flex justify-between'>
                <p className="mt-2 text-sm">Only @ ₹ 299</p>
                <button className="mt-2  w-[50%] text-[0.7rem] bg-blue-700 text-white px-4 py-2 rounded">Buy Now</button>
              </div>
            </div>
            {/* <button className="flex items-center space-x-2"><LogOut size={20} /> <span>Logout</span></button> */}
          </div>
        </aside>
        {/* Main content */}
        <main className="flex-1 w-full md:w-[60%] relative overflow-y-auto">
          <div className='text-xl items-center mb-[3rem] h-[3rem] flex justify-between font-bold bg-white px-4 absolute top-0 left-0 right-0'>
            <button onClick={togglehandler}>
              {toggle ?
                <Menu className="h-[2rem] relative md:hidden" /> :
                <Menu className="h-[2rem] relative md:hidden" />
              }
            </button>
            <h2 className="">Your Progress Summary</h2>
            <button className='bg-[blue] w-[8rem] rounded-[1rem] py-1 text-white' onClick={handleLogout} >Logout</button>
          </div>
          <div className="flex space-x-2 mt-[5rem] mb-[2rem] mx-[3rem]">
            <button className="px-4 py-2 bg-blue-100 text-blue-600 rounded">IELTS</button>
            <button className="px-4 py-2 bg-gray-200 rounded">PTE</button>
            <button className="px-4 py-2 bg-gray-200 rounded">TOEFL</button>
          </div>

          <div className="flex w-full p-5 mb-5 justify-around">
            <div className='h-[20rem] w-[90%] sm:w-[50%] md:w-[60%]'>
              <div className="bg-yellow-100 p-4 rounded-lg mb-4">
                Wow! you're about to reach your targeted band
              </div>
              <div className="bg-white p-4 rounded-lg h-[70%] w-full shadow mb-8">
                <ResponsiveContainer width="100%">
                  <LineChart data={mockData}>
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Line type="monotone" dataKey="value" stroke="#3b82f6" />
                  </LineChart>
                </ResponsiveContainer>

              </div>
            </div>
            <div className="bg-gray-800 hidden sm:block text-white rounded-lg relative h-[50%] w-[40%] md:w-[30%] text-center">
              <img src="https://images.unsplash.com/photo-1607956744673-f75e67453620?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9vciUyMGtpZHN8ZW58MHx8MHx8fDA%3D" className='h-full w-full opacity-70' alt="" />
              <div className='absolute top-12 left-0 w-full h-full'>
                <h3 className="text-xl font-bold mb-2 z-5 ">One Share can save many lives</h3>
                <p className="mb-4 z-5">Your one share can unlock a world of education for unprivileged.</p>
                <button className="bg-white text-gray-800 px-4 py-2 rounded-[4rem] z-5 left-[50%]">Share App</button>
              </div>
            </div>
          </div>


          <div className="flex w-full min-h-screen justify-around">
            <div className=' h-full w-[70%] p-4'>
              <h3 className="text-xl font-bold mb-4">Prepare with ease</h3>
              <Prepare />
            </div>
            <div className='w-[25%] h-[50%]'>
              <div className='flex gap-5 mb-[3rem] bg-white p-4 rounded-lg shadow '>
                <Video />
                Demo video
              </div>
              <div className="bg-white p-4 rounded-lg shadow ">

                <h3 className="font-bold mb-2">Practice Mock Tests</h3>
                <p className="mb-4">Get the authentic IELTS exam experience with all four modules covered!</p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded">Start</button>
              </div>
            </div>
          </div>
        </main>
      </div>
  );
};

export default Dashboard;