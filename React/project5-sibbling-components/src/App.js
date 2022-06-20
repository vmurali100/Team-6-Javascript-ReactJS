import logo from './logo.svg';
import './App.css';
import { Comp1 } from './sibblings-class/Comp1';
import { Comp2 } from './sibblings-class/Comp2';
import { useState } from 'react';
import { CompAB } from './sibblings-class/CompAB';
import { Compo1and2 } from './sibblings-class/Compo1and2';

function App() {
    //   const[message,setmessage]=useState("");
    //   const[person,setperson]=useState({})
    //   const[posts,setposts]=useState([])
    //  const sendMessage=(msg)=>{
    //     setmessage(msg)
    //   }
    //   const sendperson=(person)=>{
    //     setperson(person)
    //   }
    //   const sendposts=(posts)=>{
    //     setposts(posts)
    //   }
  return (
    <div className="App">
      {/* <Comp1 sendMessage={sendMessage} sendperson={sendperson} sendposts={sendposts}/>
      <Comp2 message={message} person={person} posts={posts}/> */}
      {/* <CompAB/> */}
      <Compo1and2/>
    </div>
  );
}

export default App;
