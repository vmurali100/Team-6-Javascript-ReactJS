import React from 'react'
import { Link } from 'react-router-dom'

export default function Navebar() {
  return (
    <div>
       <div class="wrapper row1">
  <header id="header" class="clear">
    <div id="hgroup">
      <h1><a href="https://www.os-templates.com/free-basic-html5-templates">Basic 85</a></h1>
      <h2>Free HTML5 Website Template</h2>
    </div>
    <nav>
      <ul>
        <li><Link to="/">Animal</Link></li>
        <li><Link to="/birds">Birds</Link></li>
        <li><Link to="/flower">Flower</Link></li>
        <li><Link to="/nature">Nature</Link></li>
        <li><Link to="/content">Content</Link></li>
 
        <li class="last"><a href="https://www.os-templates.com/free-basic-html5-templates">Text Link</a></li>
      </ul>
    </nav>
  </header>
</div> 
    </div>
  )
}