import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
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
        <li>
            <Link to="/Homepage">Homepage</Link>
        </li>
        <li>
        <Link to="/info">Info</Link>
        </li>
        <li>
        <Link to="/Context">Context</Link>
        </li>
        <li>
        <Link to="/Order">Order</Link>
        </li>
        <li class="last">
        <Link to="/Last">Last</Link>
        </li>
      </ul>
    </nav>
  </header>
</div>
    </div>
  )
}
