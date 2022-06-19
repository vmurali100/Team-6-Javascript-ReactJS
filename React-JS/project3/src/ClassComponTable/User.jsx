import { useState } from "react"

const User=({userdetails})=>{
   const [Studentinfo,setstudentinfo]=useState([])
   const getdata=(Studentsdetails)=>{
    setstudentinfo(Studentsdetails)
   }
    return(
        <div>
            <Students getdata={getdata}/>
            <p>Students details form child</p>
            <ul>
              {Studentinfo.map((Student,i)=>{
                return <li key={i}>{Student}</li>
              })}
            </ul>
        </div>
    )
}
export default User