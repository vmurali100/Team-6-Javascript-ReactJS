import React from 'react'
import {
  Link
  } from "react-router-dom";

export const Navli = () => {
  return (
    <div>
        <div class="wrapper row1">
    <header id="header" class="clear">
      <div id="hgroup">
        <h1><a href="https://www.os-templates.com/free-basic-html5-templates">Basic 86</a></h1>
        <h2>Free HTML5 Website Template</h2>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/Catogories">Catogories</Link>
          </li>
          <li>
          <Link to="/Community">Community</Link>
          </li>
          <li>
          <Link to="/Electronic">Electronic</Link>
          </li>
          <li>
          <Link to="/Fashions">Fashions</Link>
          </li>
          <li class="last">
          <Link to="/Orders">Orders</Link>
          </li>
        </ul>
      </nav>
    </header>
  </div>
  </div>
  )
}
