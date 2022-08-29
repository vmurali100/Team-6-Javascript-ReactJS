import {
    Link,
} from "react-router-dom";
import React from 'react'

export const Navbar = () => {
    return (
        <div>
            <div class="wrapper row1">
                <header id="header" class="clear">
                    <div id="hgroup">
                        <h1><a href="#">Basic 88</a></h1>
                        <h2>Free HTML5 Website Template</h2>
                    </div>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/gallery">Gallery</Link></li>
                            <li class="last"><Link to="/project">Project</Link></li>
                        </ul>
                    </nav>
                </header>
            </div>
        </div>
    )
}