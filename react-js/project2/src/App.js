import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';
import Posts from './FunctionalComponents/Posts';
import Filtextuses from './Functionalcomponents/Filtextuses';




function App() {
  const[person,setperson]=useState({fname:"nithya",lname:"mani"})
  return (
    <div className="App">
    {/* <Users userdetails={person}/> */}
   
    <Todos/>
    <Cart/>
    <Posts/>
    <Filtextuses/>
    
    
    </div>
  );
}

export default App;
