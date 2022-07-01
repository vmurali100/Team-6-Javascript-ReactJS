import logo from './logo.svg';
import './App.css';
import React, { useState,useEffect} from 'react'
import { UserProvider } from './Components/UserContext';
import Parent from './Components/Parent';
import axios from 'axios'


function App() {
  const [Message, setMessage] = useState("I am From App.js Components");
  const [users, setusers] = useState([]);
  useEffect(() => {
    
  
    return () => {
      var url="http://www.filltext.com/?rows=10&id={index}&email={email}&username={username}&password={randomString|5}&pretty=true"
              axios.get(url).then((response)=>{
                setusers(response.data)
              })
       

          }
  }, [])
  

  return (
    <div className="App">
      <UserProvider value={users}>
        <Parent />
      </UserProvider>
    </div>
  );
}

export default App;

