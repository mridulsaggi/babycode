import React from 'react'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Signup from './components/Signup';
import Screen from './components/Screen';
import{BrowserRouter as Router, Route,Routes } from "react-router-dom"
const App = () => {

  
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/login" element={<Screen/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
