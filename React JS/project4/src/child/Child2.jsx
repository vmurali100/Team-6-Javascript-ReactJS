import { useState } from "react";

 export function Child2 ({getdata}){
 const [s,setse]=useState(["ship","plane","spaceship"])  ;
  function data(){
    getdata(s)
  } 
  return <div>
       <button onClick={data}>click</button>
  </div>
    
 
}