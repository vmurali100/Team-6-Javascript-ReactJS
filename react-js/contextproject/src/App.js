import logo from './logo.svg';
import './App.css';

import { UserProvider } from './Context/Usercontext';
import { useState } from 'react';
import Parent from './Context/Parent';
import Parenc from './Component/Parenc';
import { useEffect } from 'react';
import axios from 'axios'
import Parentdata from './Context/Parentdata';
import { DataProvider } from './Context/Datacontext';
import { InfoProvider } from './Context/Infocontext';
import Parentinfo from './Context/Parentinfo';

function App() {
  // const [message,setmessage]=useState("i am from app.js component")
  // const [allusers,setusers]=useState([])
  // useEffect(()=>{
  //   var url="http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&pretty=true"
  //     axios.get(url).then((response)=>{
  //       setusers(response.data)
  //     })
  // },[])


  // const [alldata, setalldata] = useState([])
  // useEffect(()=>{
  //   var url="http://localhost:3000/cart"
  //   axios.get(url).then((response)=>{
  //     setalldata(response.data)
  //   })
  // },[])

  const [info, setinfo] = useState([])
  useEffect(()=>{
    var url="https://jsonplaceholder.typicode.com/comments"
    axios.get(url).then((response)=>{
      setinfo(response.data)
    })
  })
  return (
    <div className="App">
      <hr/>
             {/* Context1 */}
      {/* <UserProvider value={allusers}>
      <Parent/>
      </UserProvider> */}


                   {/* context2 */}
                  {/* <DataProvider value={alldata}>
                    <Parentdata/>
                  </DataProvider> */}


                  {/* context3 */}
                  <InfoProvider value={info}>
                    <Parentinfo/>
                  </InfoProvider>


               {/* propsmethod */}
      {/* <Parenc msg={message}/> */}
       
    </div>
  );
}

export default App;

