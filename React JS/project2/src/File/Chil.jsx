import { useState } from "react";

 export function Chil ({getdata}){
 const [s,setse]=useState(["bike","car","cycle"])  ;
  function data(){
    getdata(s)
  } 
  return <div>
       <button onClick={data}>click</button>
  </div>
    
 
}