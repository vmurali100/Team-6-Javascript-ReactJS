import { useState } from "react";

 export function Child ({getdata}){
 const [s,setse]=useState([" sealion","tiger fish","searay"])  ;
  function data(){
    getdata(s)
  } 
  return <div>
       <button onClick={data}>click</button>
  </div>
    
 
}