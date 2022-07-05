import React from 'react'
import { Link } from "react-router-dom";
export const Navbar = () => {
    return (
        <div>
            <div class="wrapper row1">
                <header id="header" class="clear">
                    <div id="hgroup">
                        <h1><a href="#">Basic 86</a></h1>
                        <h2>Free HTML5 Website Template</h2>
                    </div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About Page</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact Page</Link>
                            </li>
                            <li>
                                <Link to="/gallery">Gallery</Link>
                            </li>
                            <li>
                                <Link to="/project">Projects</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
            </div>
        </div>
    )
}
