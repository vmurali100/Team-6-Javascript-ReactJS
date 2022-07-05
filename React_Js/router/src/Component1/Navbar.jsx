import React from 'react'
import {
    Link

} from "react-router-dom";

const Navbar = () => {
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
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/gallary">Gallary</Link></li>
                            <li><Link to="/project">Project</Link></li>
                        </ul>
                    </nav>
                </header>
            </div>

        </div>
    )
}

export default Navbar
