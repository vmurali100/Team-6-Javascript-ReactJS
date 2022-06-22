import logo from './logo.svg';
import React from 'react'
import './App.css';
import Comp2 from './SiblingComponents/ClassComponents/Comp2';
import Comp1 from './SiblingComponents/ClassComponents/Comp1';
import FComp1 from './SiblingComponents/FunctionalComponents/FComp1';
import FComp2 from './SiblingComponents/FunctionalComponents/FComp2';
import ParentsClassSiblingsComponents from './SiblingComponents/ClassComponents/ParentsClassSiblingsComponents';
 
function App() {
  // const [Message, setMessage] = useState("");
  // const [person, setperson] = useState({});
  // const [Users, setUsers] = useState([])

  // const sendMessage = (msg) => {
  //   setMessage(msg)
  // }
  // const sendperson = (person) => {
  //   setperson(person)
  // }
  // const sendUsers = (UsersInfo) => {
  //   setUsers(UsersInfo)
  // }
    // const [Message, setMessage] = useState("")
    
    // const sendMessage=(Message)=>{
    //   setMessage(Message)
    // }

  return (
    <div className="App">

      {/* <Comp1 sendMessage={sendMessage} sendperson={sendperson} sendUsers={sendUsers}/>
           <Comp2 Message = {Message}  person={person} Users={Users}/> */}

          {/* <FComp1 sendMessage={sendMessage}/>
          <FComp2 Message={Message}/> */}

         {/* <FComp1 sendMessage={sendMessage}/>
         <FComp2 Message={Message}/> */}

         {/* <ParentSiblingComponents/>
         <ParentsClassSiblingsComponents/> */}

             
               <ParentsClassSiblingsComponents/>

    </div>
  );
}

export default App;
