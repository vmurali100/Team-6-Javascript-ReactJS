import React,{useState} from 'react';
import { useEffect } from 'react';
import './App.css';
import Parent from './Component/Parent';
import { Userprovider } from './Context/userContext';
import axios from 'axios'
function App() {
  const [message, setmessage] = useState("i am from app js component")
  const [allusers, setusers] = useState([])
  useEffect(()=>{
    var url="http://www.filltext.com/?rows=10&fname=%7BfirstName%7D&lname=%7BlastName%7D&pretty=true"
    axios.get(url).then((response)=>{
      console.log(response.data)
      setusers(response.data)
    })
  },[])
  return (
    <div className="App">
      <hr/>
    <Userprovider value={allusers}>
    <Parent/>
    </Userprovider>
    </div>
  );
}

export default App;

var users=[
  {
      "fname": "Minhajuddin",
      "lname": "Josey"
  },
  {
      "fname": "Tefera",
      "lname": "Zuniga"
  },
  {
      "fname": "Beth",
      "lname": "Geouque"
  },
  {
      "fname": "Abraham",
      "lname": "Duerksen"
  },
  {
      "fname": "Lynn",
      "lname": "Plunkett"
  },
  {
      "fname": "LaJeania",
      "lname": "Cardenas"
  },
  {
      "fname": "Lolita",
      "lname": "Mathis"
  },
  {
      "fname": "Olivia",
      "lname": "Schaus"
  },
  {
      "fname": "Darnecia",
      "lname": "Keltner"
  },
  {
      "fname": "Dorothy",
      "lname": "Whitman"
  }
]