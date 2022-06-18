import logo from './logo.svg';
import React, {useState} from "react";
import './App.css';
import Userparent from './Userparent';
import FilltextUser from './Components/FilltextUser';
import { SrividyaCtoP } from './Function Child to Parent/SrividyaCtoP';

function App() {
  const [person, setPerson]= useState({fname:"Vasu", lname:"Vidya"})
  return (
    <div className="App">
      {/* <Userparent userDetails={person}/> */}
      {/* <FilltextUser></FilltextUser> */}
      <SrividyaCtoP></SrividyaCtoP>
    </div>
  );
}

export default App;
