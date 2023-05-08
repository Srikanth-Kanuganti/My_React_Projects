import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import About from './About'
import Home from './Home'
import Dashboard from './Dashboard'


export default function App() {
  return (
    <div>
      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route index element={<Home />} />
          <Route path="/Dashboard" element={<Dashboard/>}/>
          <Route path="/About" element={<About/>}/>
        </Routes>
      </BrowserRouter>   
    </div>
  )
}