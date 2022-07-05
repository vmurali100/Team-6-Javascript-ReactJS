import React from 'react'
import './App3.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Content from './Content'
import Gallery from './Gallery'
import Home from './Home'
import Navbar from './Navbar'
import Projects from './Projects'

const Commonapp3 = () => {
  return (
    <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='About' element={<About/>}/>
          <Route path='Contact' element={<Contact/>}/>
          <Route path='Content' element={<Content/>}/>
          <Route path='Gallery' element={<Gallery/>}/>
          <Route path='Projects' element={<Projects/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Commonapp3