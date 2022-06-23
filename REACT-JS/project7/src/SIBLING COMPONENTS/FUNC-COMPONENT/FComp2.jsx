import React from "react";
import { useState } from "react";

function FComp2({Message,Person,users}){
    const[]=useState()

    return(
        <div>
            <p>FComp2</p>
            <h1>{Message}</h1>
            <h2>{Person.fname}{Person.Lname}</h2>
            <ul>
                {users.map((users,i)=>{
                    return<div className="userInfo" key={i}>
                        <h4>{users.fname}</h4>
                        <h4>{users.Lname}</h4>

                    </div>
                })}
            </ul>
        </div>
    )
}
export default FComp2