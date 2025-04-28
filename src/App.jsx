import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

import Navbar from './components/Header/Navbar';
import Footer from "./components/Footer/Footer"

const App = () => {
  return (
    <>
      <Navbar />
 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
   <Footer/>
    </>
  )
}

export default App