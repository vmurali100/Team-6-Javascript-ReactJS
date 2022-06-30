import React,{useEffect, useState} from 'react';
import './App.css';
import Parent from './Components/Parent';
import { UserProvider } from './Context/UserContext';
import axios from 'axios'
function App() {
  const [message, setmessage] = useState("I am From App.js Component")
  const [allposts, setposts] = useState([])

  useEffect(()=>{
    var url = "https://jsonplaceholder.typicode.com/posts"
    axios.get(url).then((response)=>{
      // console.log(response.data)
      setposts(response.data)
    })
  },[])
  return (
    <div className="App">
      <hr/>
      <UserProvider value={allposts}>
        <Parent/>
      </UserProvider>
      
    </div>
  );
}

export default App;
