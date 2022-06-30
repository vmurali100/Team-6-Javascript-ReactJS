import logo from './logo.svg';
import React,{useEffect, useState} from 'react'
import axios from 'axios'
import './App.css';
// import { Parent } from './props-drilldown/Parent';
import { Userprovider } from './React-context/Usercontext';
import { Parent1 } from './React-context/Parent1';
import { App2 } from './React-context/App2';

function App() {
  // const [message, setmessage] = useState("i am from app.js component")
  // const [allusers, setallusers] = useState([])
  // useEffect(()=>{
  //   const url="http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&pretty=true"
  //   axios.get(url).then((response)=>{
  //     setallusers(response.data)
  //   })
  // },[])
  return (
    <div className="App">
     <hr/>
     {/* <Userprovider value={allusers}>
      <Parent1/>
     </Userprovider> */}
     
    <App2/>
    </div>
  );
}

export default App;
// var users=[
  
//     {
//         "fname": "Demetra",
//         "lname": "Uhl",
//         "tel": "(992)662-0313",
//         "address": "2585 Pulvinar Ln",
//         "city": "Tacloban City",
//         "state": "AR",
//         "zip": 54203
//     },
//     {
//         "fname": "Paula",
//         "lname": "Kenedy",
//         "tel": "(421)049-3260",
//         "address": "6960 Risus St",
//         "city": "Palmer",
//         "state": "VA",
//         "zip": 25489
//     },
//     {
//         "fname": "Elizabeth",
//         "lname": "Sholtz",
//         "tel": "(196)125-7077",
//         "address": "3623 Placerat Rd",
//         "city": "Lynchburg",
//         "state": "AL",
//         "zip": 81127
//     },
//     {
//         "fname": "Maurice",
//         "lname": "Vinsant",
//         "tel": "(533)924-1486",
//         "address": "6963 Libero Ave",
//         "city": "Peoria",
//         "state": "NV",
//         "zip": 18763
//     },
//     {
//         "fname": "Fang",
//         "lname": "Levey",
//         "tel": "(848)731-8948",
//         "address": "8185 Neque Rd",
//         "city": "Indianapolis",
//         "state": "OK",
//         "zip": 71898
//     },
//     {
//         "fname": "Hasan",
//         "lname": "Schaus",
//         "tel": "(363)433-3565",
//         "address": "5681 Ipsum Rd",
//         "city": "Zionsville",
//         "state": "CA",
//         "zip": 30864
//     },
  
 

// ]
