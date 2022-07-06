import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
      <div class="wrapper row1">
      <header id="header" class="clear">
        <div id="hgroup">
          <h1><a href="#">Agriculture</a></h1>
          <h2>Life Style Of Farmer</h2>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="about">About</Link>
            </li>
            <li>
              <Link to="gallery">Gallery</Link>
            </li>
            <li>
              <Link to="contact">contact</Link>
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
