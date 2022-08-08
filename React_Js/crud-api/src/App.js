import React,{useEffect,useState} from 'react'
import axios from 'axios';

function App() {
  const [data,setData]=useState([]);
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts").then(res=> setData(res.data ))
  },[])
  return (
    <div className="App">
      {data.map(item=> <li key={item.id}>{item.title}
      </li>)}
    </div>
  );
}

export default App;

 