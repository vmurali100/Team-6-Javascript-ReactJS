import React from 'react'
import { Link } from "react-router-dom";

export default function Navebar() {
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
          <Link to="/ content">Content</Link>
        </li>
        <li>
        <Link to="/">Lily</Link>
        </li>
        <li>
        <Link to="/lotus">Lotus</Link>
        </li>
        <li>
        <Link to="/rose">Rose</Link>
        </li>
       
      </ul>
    </nav>
  </header>
</div>
    </div>
  )
}
