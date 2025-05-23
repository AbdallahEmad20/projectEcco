import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';


import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
const App = () => {
  return (
    <>
     <Header/>
 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
   <Footer/>
    </>
  )
}

export default App