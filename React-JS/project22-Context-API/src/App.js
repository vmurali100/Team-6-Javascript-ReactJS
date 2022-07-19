import logo from './logo.svg';
import './App.css';
 
import Parents from './Components/Parents';
import { useEffect, useState } from 'react';
import axios from 'axios'
import { UserProvider } from './Components/UserContext';
import Form from './Components/Form';
 

function App() {
  const [Users, setUsers] = useState([])

  useEffect(() => {
     
    return () => {
      var url = "http://localhost:3000/Users"
       axios.get(url).then((response)=>{
        setUsers(response.data)

       })
    }
  }, [])
  return (
    <div className="App">
       <UserProvider value={Users}>
        <Form/>

       </UserProvider>
    </div>
  );
}

export default App;
