import { useState } from "react";

 export function Child1 ({getdata}){
 const [s,setse]=useState(["phone","laptop","tab"])  ;
  function data(){
    getdata(s)
  } 
  return <div>
       <button onClick={data}>click</button>
  </div>
    
 
}