import { useState } from "react";
import { Child1 } from "./Child1";


export function Parent2(){
    const [w,setw]=useState([]);
    function recive(s){
        setw(s)
    };
   return <div>
   <Child1 getdata={recive}/>
    <ul>
       {w.map((user)=>{
        return <li>{user}</li>
       })}
    </ul>
   </div>
}