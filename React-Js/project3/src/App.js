import logo from './logo.svg';
import React, {useState} from "react";
import './App.css';
import Userparent from './Userparent';
import FilltextUser from './Components/FilltextUser';

function App() {
  const [person, setPerson]= useState({fname:"Vasu", lname:"Vidya"})
  return (
    <div className="App">
      <Userparent userDetails={person}/>
      <FilltextUser></FilltextUser>
    </div>
  );
}

export default App;
