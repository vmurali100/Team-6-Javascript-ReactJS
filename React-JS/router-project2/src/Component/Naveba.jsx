import React from 'react'
import { Link } from "react-router-dom";
export default function Naveba() {
  return (
    <div>
      <div class="wrapper row1">
  <header id="header" class="clear">
    <div id="hgroup">
      <h1><a href="https://www.os-templates.com/free-basic-html5-templates">Basic 87</a></h1>
      <h2>Free HTML5 Website Template</h2>
    </div>
    <nav>
      <ul>
        <li><Link to="/">Content</Link></li>
        <li><Link to="/cat">Cat</Link></li>
        <li><Link to="/lion">Lion</Link></li>
        <li><Link to="/tiger">Tiger</Link></li>
        <li class="last"><a href="https://www.os-templates.com/free-basic-html5-templates">Text Link</a></li>
      </ul>
    </nav>
  </header>
</div> 
    </div>
  )
}

