import { useState } from "react";
import { Child } from "./Child";



export function Parent2(){
    const [w,setw]=useState([]);
    function recive(s){
        setw(s)
    };
   return <div>
   <Child getdata={recive}/>
    <ul>
       {w.map((user)=>{
        return <li>{user}</li>
       })}
    </ul>
   </div>
}