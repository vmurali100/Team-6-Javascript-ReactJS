import React from 'react'
import {
    
    Link
  } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
        <div class="wrapper row1">
                <header id="header" class="clear">
                    <div id="hgroup">
                        <h1><a href="#">Basic 87</a></h1>
                        <h2>Free HTML5 Website Template</h2>
                    </div>
                    <nav>
                        <ul>
                            <li>
                                <Link to={"/"}>Home</Link>
                            </li>
                            <li>
                                <Link to={"/gallery"}>Gallery</Link>
                            </li>
                            <li>
                                <Link to={"/contents"}>Contents</Link>
                            </li>
                            
                            <li>
                                <Link to={"/abouts"}>Abouts</Link>
                            </li>
                           
                           
                           
                            <li>
                                <Link to={"/projects"}>Projects</Link>
                            </li>
                           
                        </ul>
                    </nav>
                </header>
            </div>
    </div>
  )
}



