
import { useState } from "react";
import { Chil } from "./Chil";


export function Parent2(){
    const [w,setw]=useState([]);
    function recive(s){
        setw(s)
    };
   return <div>
   <Chil getdata={recive}/>
    <ul>
       {w.map((user)=>{
        return <li>{user}</li>
       })}
    </ul>
   </div>
}