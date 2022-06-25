import { useState } from "react";
import { Child2 } from "./Child2";

export function Parent2(){
    const [w,setw]=useState([]);
    function recive(s){
        setw(s)
    };
   return <div>
   <Child2 getdata={recive}/>
    <ul>
       {w.map((user)=>{
        return <li>{user}</li>
       })}
    </ul>
   </div>
}