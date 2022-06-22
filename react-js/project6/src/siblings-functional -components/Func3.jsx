import { useState } from "react"

export const Func3=({sendemployee,employee,senduser,user})=>{
    const[]=useState(
        employee="haritha",
        user={
            fname:"naveen",
            lname:"kumar"
        }
    )
    return(
        <div>
            <button onClick={()=>{sendemployee(employee)}}>send employee</button>
            <button onClick={()=>{senduser(user)}}>send user</button>
        </div>
    )
}