import { useState } from "react"
import { Func5 } from "./Func5"
import { Func6 } from "./Func6"

export const Func5and6=()=>{
    const[student,setstudent]=useState("")
    const[teacher,setteacher]=useState({})
    const[school,setschool]=useState([])

    const sendstudent=(student)=>{
        setstudent(student)
    }
    const sendteacher=(teacher)=>{
        setteacher(teacher)
    }
    const sendschool=(school)=>{
        setschool(school)
    }
    return(
        <div>
            <Func5 sendstudent={sendstudent} sendteacher={sendteacher} sendschool={sendschool} />
            <Func6 student={student} teacher={teacher} school={school} />
        </div>
    )
}