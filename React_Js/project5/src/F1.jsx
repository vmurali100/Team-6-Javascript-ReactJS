import React from 'react';
import { useState } from 'react';
const F1=()=>{
    const [change,setChange]=useState([])
    return (
        <div>
            <button onClick={()=>setChange(!change)}>click here</button>
            {change?<h1>welcome to geeksforgeeks</h1>:<h1>computer science portal</h1>}
        </div>
    )
}
export default F1;
