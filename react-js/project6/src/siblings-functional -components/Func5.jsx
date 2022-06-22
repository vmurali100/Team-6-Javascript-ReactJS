import { useState } from "react"

export const Func5=({sendstudent,student,sendteacher,teacher,sendschool,school})=>{
    const[]=useState(
        student="harish",
        teacher={
            fname:"jai",
            lname:"lakshmi",
        },
        school=["chaitanya","narayana","pcr","kings"]
    )
    return(
        <div>
            <button onClick={()=>{sendstudent(student)}}>send student</button>
            <button onClick={()=>{sendteacher(teacher)}}>send teacher</button>
            <button onClick={()=>{sendschool(school)}}>send school</button>
        </div>
    )
}