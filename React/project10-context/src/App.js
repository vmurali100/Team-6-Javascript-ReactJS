import logo from './logo.svg';
import React,{useState} from 'react'
import './App.css';
import { Parent } from './props-drilldown/Parent';

function App() {
  const [message, setmessage] = useState("i am from app.js component")
  return (
    <div className="App">
     
    <Parent msg={message}/>
    </div>
  );
}

export default App;
