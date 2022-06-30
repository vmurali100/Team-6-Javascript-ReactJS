import React,{useEffect, useState} from 'react'
import './App.css';
import Parent from './Components/Parent';
import { UserProvider } from './Context/Usercontext';
import axios from 'axios'

function App() {
  const [message, setmessage] = useState("I am from App.js Component")
  const [Allusers, setusers] = useState([])

  useEffect(()=>{
    var url ="https://filltext.com/?rows=10&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&pretty=true"
       axios.get(url).then((response)=>{
        console.log(response.data)
        setusers(response.data)
       })
  },[])

  return (
    <div className="App">
      <UserProvider value={Allusers}>
      <Parent />
      </UserProvider>
      
    </div>
  );
}

export default App;

