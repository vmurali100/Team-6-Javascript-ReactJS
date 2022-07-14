import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteStudents, editStudents } from '../slice2/studentSlice'

export const StudentDetails = () => {
  const allstudents=useSelector((state)=>state.studentsinfo.students)
  const dispatch= useDispatch()
  const handledeletestudents=(i)=>{
    dispatch(deleteStudents(i))
  }
  const handleeditstudents=(i)=>{
    var info={
        isedit:true,
        index:i
    }
    dispatch(editStudents(info))
  }
  return (
    <div>
        <table border="1">
            <thead>
                <tr>
                    <th>fname</th>
                    <th>lname</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {allstudents.map((student,i)=>{
                    return <tr key={i}>
                        <td>{student.fname}</td>
                        <td>{student.lname}</td>
                        <td><button onClick={()=>{handleeditstudents(i)}}>Edit</button></td>
                        <td><button onClick={()=>{handledeletestudents(i)}}>Delete</button></td>
                    </tr>
                })

                }
            </tbody>
        </table>
    </div>
  )
}
