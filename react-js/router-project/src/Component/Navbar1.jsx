import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar1 = () => {
  return (
    <div>
      <div class="wrapper row0">
  <div id="topbar" class="clear">
    <div class="fl_left"><a target="_blank" rel="nofollow noopener" class="top-twitter" href="//twitter.com/ostemplates"><span class="icon-twitter"></span> Follow OS Templates</a></div>
    <div class="fl_right">
      <nav>
        <ul>
    <li>
      <Link to="/">Home1</Link>
    </li>
    <li>
    <Link to="/grosaries">Grosaries</Link>
    </li>
    <li>
    <Link to="/photos">Photos</Link>
    </li>
    <li>
    <Link to="/list">List</Link>
    </li>
    <li class="last">
    <Link to="/footer">Footer</Link>
    </li>
      </ul>
      </nav>
    </div>
  </div>
</div>
    </div>
  )
}
