import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <div class="wrapper row1">
      <header id="header" class="clear">
        <div id="hgroup">
          <h1><a href="#">Basic 88</a></h1>
          <h2>Free HTML5 Website Template</h2>
        </div>
        <nav>
          <ul>
            {/* <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Gallery</a></li>
          <li class="last"><a href="#"> Projects</a></li> */}
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="about">About</Link>
            </li>
            <li>
              <Link to="contact">Contact</Link>
            </li>
            <li>
              <Link to="gallery">Gallery</Link>
            </li>
            <li>
              <Link to="projects">Projects</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}
