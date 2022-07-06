import React from 'react'
import {
    Link,
  } from "react-router-dom";
export const Navbar = () => {
  return (
    <div>
        <div class="wrapper row1">
  
  <div id="hgroup">
    <h1><a href="https://www.os-templates.com/free-basic-html5-templates">Basic 90</a></h1>
    <h2>Free HTML5 Website Template</h2>
  </div>
  
  <nav>
    <ul>
      <li>
        <Link to="/content">Content</Link>
      </li>
      <li>
        <Link to="/candy">Candy</Link>
      </li>
      <li>
        <Link to="/chocolate">Chocolate</Link>
      </li>
      <li>
        <Link to="/icecream">IceCream</Link>
      </li>
      
    </ul>
  </nav>

</div>

    </div>
  )
}
