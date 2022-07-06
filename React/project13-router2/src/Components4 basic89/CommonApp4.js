import React from 'react'
import './App4.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './About'

import Contact from './Contact'
import Content from './Content'
import Gallary from './Gallary'
import Home from './Home'
import Navbar from './Navbar'
import Projects from './Projects'

const CommonApp4 = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/About' element={<About/>} />
        <Route path='/Content' element={<Content/>}/>
        <Route path='/Contact' element={<Contact/>}/>

        <Route path='/Gallary' element={<Gallary/>} />
        <Route path='/Projects' element={<Projects/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default CommonApp4