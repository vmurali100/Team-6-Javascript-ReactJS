import React from 'react'
import {
    Link
  } from "react-router-dom";
export const Navpart = () => {
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
        <li>
          <Link to="/Container">Container</Link>
        </li>
        <li>
        <Link to="/Customers">Customers</Link>
        </li>
        <li>
        <Link to="/Pricedetails">Pricedetails</Link>
        </li>
        <li>
        <Link to="/Productspage">Productspage</Link>
        </li>
        <li class="last">
        <Link to="/Conclusion">Conclusion</Link>
        </li>
      </ul>
    </nav>
  </header>
</div>
    </div>
  )
}
