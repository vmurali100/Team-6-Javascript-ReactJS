import React, { useState } from "react"
import { Students } from "./Students"

export const Users = ({ userDetails }) => {
    const[studentsInfo,setstudentsInfo]=useState([])
    const reciveDataFromChild=(studentDetails)=>{
        setstudentsInfo(studentDetails)
    }
    // console.log(userDetails)
    return (
        <div>
        {/* // <div> <p>{userDetails.fname}-{userDetails.lname}</p></div> */}
        <Students getData={reciveDataFromChild} />
        <p>student details from child</p>
        <ul>
            {studentsInfo.map((student,i)=>{
                return <li key={i}>{student}</li>
            })}
        </ul>
        </div>
    )
}