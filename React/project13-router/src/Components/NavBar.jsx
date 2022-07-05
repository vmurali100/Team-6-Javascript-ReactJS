import React from 'react'
import {
    Link,
} from "react-router-dom";
const NavBar = () => {
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
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/About">About</Link>
                            </li>

                            <li>
                                <Link to="/Contact">Contact</Link>
                            </li>
                            <li>
                                <Link to="/Gallery">Gallery</Link>
                            </li>

                            <li>
                                <Link to="/Projects">Projects</Link>
                            </li>


                        </ul>
                    </nav>
                </header>
            </div>

        </div>
    )
}

export default NavBar