import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import { Users } from './Users';

function App() {
  const[person,setpeson]=useState({fname:"deepthi",lname:"boppana"})
  return (
    <div className="App">
      <Users userDetails={person}/>
    </div>
  );
}

export default App;
