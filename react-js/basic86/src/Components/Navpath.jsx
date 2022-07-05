import React from 'react'
import {
    Link
  } from "react-router-dom";

export const Navpath = () => {
  return (
    <div>
        <div class="wrapper row1">
  <header id="header" class="clear">
    <div id="hgroup">
      <h1><a href="https://www.os-templates.com/free-basic-html5-templates">Basic 90</a></h1>
      <h2>Free HTML5 Website Template</h2>
    </div>
    <form action="#" method="post">
      <fieldset>
        <legend>Search:</legend>
        
        
      </fieldset>
    </form>
    <nav>
      <ul>
      <li>
        <Link to="/Homes1">Homes1</Link>
        </li>
        <li>
            <Link to="/Context1">Context1</Link>
        </li>
        <li>
        <Link to="/Datas1">Datas1</Link>
        </li>
        <li>
        <Link to="/Galaxy">Galaxy</Link>
        </li>
        
        <li class="last">
             <Link to="/End">End</Link>
             </li>
      </ul>
    </nav>
  </header>
</div>
    </div>
  )
}
