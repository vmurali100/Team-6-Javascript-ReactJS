import React from "react"
import { useState } from "react"
import StudentChild from "./StudentChild"

const Userparent = ({userDetails}) =>{
    const [studentInfo, setStudentInfo]=useState([])
    const receiveDateFromchild = (details) =>{
        setStudentInfo(details)            
    }
    return(
        <div>
            
            <StudentChild getData={receiveDateFromchild}/>
            <p>Student Details form Child</p>
            <ul>
            {studentInfo.map((student,i)=>{
                return <li key={i}>{student}</li>
            })}
            </ul>
        </div>
    )
}
export default Userparent