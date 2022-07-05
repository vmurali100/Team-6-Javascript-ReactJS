import React from 'react'
import './App2.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './About'
import {Contact} from './Contact'
import Content from './Content'
import Gallery from './Gallery'

import Navbar2 from './Navbar2'
import Projects from './Projects'
import Home from './Home';


const Commonapp = () => {
  return (
    <div >
        <BrowserRouter>
        <Navbar2/>
        <Routes>
            <Route index element={<Home/>}/>
            <Route path='Content' element={<Content/>}/>
            <Route path='About' element={<About/>}/>
            <Route path='Contact' element={<Contact/>}/>
            <Route path='Gallery' element={<Gallery/>}/>
            <Route path='Projects' element={<Projects/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Commonapp