import React from 'react'
import { Link } from 'react-router-dom'

export const NaveBar = () => {
  return (
        <div>
                <div class="wrapper row1">
  <header id="header" class="clear">
    <div id="hgroup">
      <h1><a href="https://www.os-templates.com/free-basic-html5-templates">Basic 88</a></h1>
      <h2>Free HTML5 Website Template</h2>
    </div>
    <nav>
      <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/about">About page</Link>
        </li>

        <li><Link to="/contact">Contact page</Link></li>
        <li>
            <Link to="/content">Content page</Link>
        </li>
        <li><Link to="/text">Text page</Link></li>
        <li class="last"><a href="https://www.os-templates.com/free-basic-html5-templates">Text Link</a></li>
      </ul>
    </nav>
  </header>
</div>
        </div>
  )
}

