import React,{useEffect, useState} from 'react'
import './App.css';
// import Parent from './Component/Parent';
// import { UserProvider } from './Context/userContext';
import axios from 'axios'
// import { DataProvider } from './Context/dataContext';
// import Parent1 from './Context/Parent1';
import { SendProvider } from './Context/sendContext';
import Parent2 from './Context/Parent2';

function App() {
  // const [message,setmessage]=useState("Iam from App.js component")
  // const [allfilltext,setfilltext]=useState([])
  // useEffect(()=>{
  //   var url= "http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&pretty=true"
  //   axios.get(url).then((response)=>{
  //     setfilltext(response.data)
  //   })
  // })
  // const [message,setmessage]=useState("iam from App.js component")
  // const [allfill,setallfill]=useState([])
  // useEffect(()=>{
  //   var url="http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&pretty=true"
  //   axios.get(url).then((response)=>{
  //     setallfill(response.data)
  //   })
  // })
  const [message,setmessage]=useState("iam from App.js component")
  const [allalbums,setallalbums]=useState([])
  useEffect(()=>{
    var url="https://jsonplaceholder.typicode.com/albums"
    axios.get(url).then((response)=>{
      setallalbums(response.data)
    })
  })
  return (
    <div className="App">
      <hr/>
      {/* <UserProvider value={allfilltext}>
        <Parent />
      </UserProvider> */}
      {/* <DataProvider value={allfill}>
      <Parent1/>   
      </DataProvider>   */}
      <SendProvider value={allalbums}>
        <Parent2/>
      </SendProvider>
    </div>
  );
}

export default App;

// var filltext =[
//   {
//       "fname": "Leroy",
//       "lname": "Nordby",
//       "tel": "(593)572-9851",
//       "address": "8159 Fringilla Rd",
//       "city": "Stettler",
//       "state": "VA",
//       "zip": 65447
//   },
//   {
//       "fname": "John",
//       "lname": "Mawyer",
//       "tel": "(788)567-7001",
//       "address": "6656 Mattis Rd",
//       "city": "Denton",
//       "state": "NV",
//       "zip": 10122
//   },
//   {
//       "fname": "Sudershan",
//       "lname": "Preston",
//       "tel": "(904)280-3827",
//       "address": "3362 Aliquam Ave",
//       "city": "Castle Rock",
//       "state": "KY",
//       "zip": 99474
//   },
//   {
//       "fname": "Lorraine",
//       "lname": "Bodily",
//       "tel": "(413)627-6818",
//       "address": "7401 At Dr",
//       "city": "Shawnee",
//       "state": "ID",
//       "zip": 70960
//   },
//   {
//       "fname": "Shanna",
//       "lname": "Elkins",
//       "tel": "(944)236-4885",
//       "address": "8682 Elementum Ave",
//       "city": "Carrollton",
//       "state": "NE",
//       "zip": 88218
//   },
//   {
//       "fname": "Cecelia",
//       "lname": "Hauler",
//       "tel": "(987)689-5961",
//       "address": "3773 Massa Ln",
//       "city": "Berkeley",
//       "state": "GA",
//       "zip": 69297
//   },
//   {
//       "fname": "Vernell",
//       "lname": "Poe",
//       "tel": "(513)729-2625",
//       "address": "3304 Porta Ct",
//       "city": "Burke",
//       "state": "FL",
//       "zip": 31286
//   },
//   {
//       "fname": "Ying",
//       "lname": "Drolet",
//       "tel": "(484)238-2232",
//       "address": "3602 Risus Ln",
//       "city": "Indianapolis",
//       "state": "PA",
//       "zip": 31774
//   },
//   {
//       "fname": "Sharmistha",
//       "lname": "Ekekwe",
//       "tel": "(241)035-0286",
//       "address": "3273 Odio St",
//       "city": "New York",
//       "state": "GA",
//       "zip": 70512
//   },
//   {
//       "fname": "Tracy",
//       "lname": "Pacheco",
//       "tel": "(874)321-1935",
//       "address": "6502 Odio St",
//       "city": "Roseville",
//       "state": "TX",
//       "zip": 19835
//   }
// ]
