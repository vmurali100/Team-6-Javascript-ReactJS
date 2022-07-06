import React from 'react'
import { Link } from "react-router-dom"

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
                            <li><a href="#">Text Link</a></li>
                            <li><a href="#">Text Link</a></li>
                            <li><a href="#">Text Link</a></li>
                            <li><a href="#">Text Link</a></li>
                            <li class="last"><a href="#">Text Link</a></li>
                        </ul>
                    </nav>
                </header>
            </div>
        </div>
    )
}
