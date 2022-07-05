import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar1 = () => {
    return (
        <div>
            <div class="wrapper row1">
                <header id="header" class="clear">
                    <div id="hgroup">
                        <h1><a href="#">Basic 85</a></h1>
                        <h2>Free HTML5 Website Template</h2>
                    </div>
                    <nav>
                        <ul>
                            <li>
                                <Link to={"/"}>Home</Link>
                            </li>
                            <li>
                                <Link to={"/about1"}>About1 Page</Link>
                            </li>
                            <li>
                                <Link to={"/content1"}>Content1</Link>
                            </li>
                            <li>
                                <Link to={"/gallery1"}>Gallery1</Link>
                            </li>
                            <li>
                                <Link to={"/projects1"}>Projects1</Link>
                            </li>
                           
                        </ul>
                    </nav>
                </header>
            </div>
        </div>
    )
}
