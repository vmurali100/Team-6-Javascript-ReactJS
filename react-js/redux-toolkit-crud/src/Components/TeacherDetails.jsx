import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteteacher, editteacher } from '../slice3/teacherSlice';

export const TeacherDetails = () => {
    const allteachers=useSelector((state)=>state.teacherinfo.teachers)
    const dispatch= useDispatch();
    const handledeleteteacer=(i)=>{
       dispatch(deleteteacher(i))
    }
    const handleeditteacher=(i)=>{
        var info={
            isedit:true,
            index:i
        }
        dispatch(editteacher(info))
    }
  return (
    <div>
        <table border="1" >
            <thead>
                <tr>
                    <th>fname</th>
                    <th>lname</th>
                    <th>edit</th>
                    <th>Delete</th>
                    
                </tr>
            </thead>
            <tbody>
                {allteachers.map((teacher,i)=>{
                    return <tr key={i}>
                        <td>{teacher.fname}</td>
                        <td>{teacher.lname}</td>
                        <td><button onClick={()=>{handleeditteacher(i)}}>Edit</button></td>
                        <td><button onClick={()=>{handledeleteteacer(i)}}>Delete</button></td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
  )
}
