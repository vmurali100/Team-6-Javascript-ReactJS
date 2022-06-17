import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import { Users } from './Users';
import { FilltextUses } from './function child to parent/FilltextUses';
import { CommonClass } from './function child to parent/CommonClass';



function App() {
  // const[person,setpeson]=useState({fname:"deepthi",lname:"boppana"})
  return (
    <div className="App">
      {/* <Users userDetails={person}/> */}
   {/* <FilltextUses/> */}
  <CommonClass/>
  
    </div>
  );
}

export default App;
