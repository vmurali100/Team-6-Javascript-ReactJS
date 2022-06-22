import { useState } from "react"
import { Func3 } from "./Func3"
import { Func4 } from "./Func4"

 export const Func3and4=()=>{
    const[employee,setemployee]=useState("")
    const[user,setuser]=useState({})
    const sendemployee=(employee)=>{
        setemployee(employee)
    }
    const senduser=(user)=>{
        setuser(user)
    }
    return(
        <div>
            <Func3 sendemployee={sendemployee} senduser={senduser}/>
            <Func4 employee={employee} user={user}/>
        </div>
    )

}