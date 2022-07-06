import React from 'react'
import {

    Link
} from "react-router-dom";

export const Navbar = () => {
    return (
        <div class="wrapper row1" >
            <header id="header" class="clear" >
                <div id="hgroup">
                    <h1><a href="#">Basic 90</a></h1>
                    <h2>Free HTML5 Website Template</h2>
                </div>
                <form action="#" method="post">
                    <fieldset>
                        <legend>Search:</legend>
                        <input type="text" value="Search Our Website…" onfocus="this.value=(this.value=='Search Our Website…')? '' : this.value ;" />
                        <input type="submit" id="sf_submit" value="submit" />
                    </fieldset>
                </form>
                <nav>
                    <ul>
                        <li>
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link to={"/gallerys"}>Gallerys</Link>
                        </li>
                        
                        <li>
                            <Link to={"/abouts"}>Abouts</Link>
                        </li>
                        <li>
                            <Link to={"/contents"}>Contents</Link>
                        </li>                       

                        <li>
                            <Link to={"/projects"}>Projects</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>


    )
}
