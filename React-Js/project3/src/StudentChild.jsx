import React from "react"
import { useState } from "react"

const StudentChild = ({getData}) =>{
    const [details, setDetails]=useState(["Mani","Mahesh","Mohan","Murali","Madhu"])

    const sendDatatoParent = () =>{
        getData(details)
    }
    return (
        <div>
            <button onClick={sendDatatoParent}>Send Data To Parent</button>
        </div>
    )
}
export default StudentChild