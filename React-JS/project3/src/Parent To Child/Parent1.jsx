import React from "react"
import { useState } from "react"
import Child1 from "./Child1"

const Parent1 = () => {
    const [Messege,setMessege]=useState ("");
    const [Person,setPerson]=useState ({});
    const [Users,setUsers]=useState ([]);
    
    const SendMessege = ()=>{
        setMessege("Welcome to Functional component communication")  
    }

    const SendPerson = () => {
        setPerson({
            fname:"Sai",
            lname:"Kiran"
        })
    }

    const SendArray = () => {
        setUsers(["sai","Kiran","Charan","Vijay","Lokesh"])
    }

    return (
        <div>
           <button onClick={SendMessege}>Send Messege</button>
           <br />
           <button onClick={SendPerson}>Send Person</button>
           <br />
           <button onClick={SendArray}>Send Array</button>
           <Child1 Messege={Messege} Person={Person} Users={Users}/>
        </div>
    )
}
export default Parent1