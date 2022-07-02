import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react'
import Parents from './Components/Parents';
import { UserProvider } from './React-ContextAPI/UserContext1';
import Parents1 from './React-ContextAPI/Parents1';
import axios from 'axios'

function App({value}) {
  const [Message, setMessage] = useState("Iam From App.js Components");
  const [Users, setUsers] = useState([])

  useEffect(() => {
     
    return () => {
      var url = "https://jsonplaceholder.typicode.com/photos"
       axios.get(url).then((response)=>{
        setUsers(response.data)

       })
    }
  }, [])
  return (
    <div className="App">
       <hr/>
       <UserProvider value ={Users}>
        <Parents1 />
       </UserProvider>
       {/* <Parents msg={Message}/> */}
       {/* <Parents1/> */}
       
    </div>
  );
}
export default App;
