import logo from './logo.svg';
import React from 'react'
import './App.css';
import FACParent from './SiblingComponents/FunctionalComponents/FACParent';
import ParentSiblingComponents from './SiblingComponents/FunctionalComponents/ParentSiblingComponents';
 
 
 
function App() {

  return (
    <div className="App">
     <ParentSiblingComponents/>
    </div>
  );
}

export default App;
