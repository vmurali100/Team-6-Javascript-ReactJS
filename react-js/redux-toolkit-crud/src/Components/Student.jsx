import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addStudents, updateStudents } from '../slice2/studentSlice'

export const Student = () => {
    const [student,setstudent]=useState({
        fname:"",
        lname:""
    })
   const dispatch= useDispatch();
  const studentobj=  useSelector((state)=>state.studentsinfo)
  useEffect(()=>{
    if(studentobj.isedit){
        setstudent(studentobj.students[studentobj.editindex])
    }
      
  },[studentobj])
  const handlechange=(e)=>{
    let newstudent={...student}
   let studentindex=e.target.name;
   newstudent[studentindex]=e.target.value;
   setstudent(newstudent)
  }
  const handleadduser=()=>{
    dispatch(addStudents(student))
   clearstudents()
  }
  const clearstudents=()=>{
    setstudent({
        fname:"",
        lname:""
    })
  }
  const handleUpdateStudents=()=>{
    let updateobj={
        data:student,
        index:studentobj.editindex,
        isedit:false
    }
    dispatch(updateStudents(updateobj))
    clearstudents()
  }
  return (
    <div>
     <form >
        <label htmlFor="fname">fname</label>
        <input type="text" name='fname'value={student.fname} onChange={(e)=>{handlechange(e)}}/><br />
        <label htmlFor="lname">lname</label>
        <input type="text" name='lname'value={student.lname} onChange={(e)=>{handlechange(e)}}/><br />
        <button type='button' onClick={studentobj.isedit ?handleUpdateStudents: handleadduser}>{studentobj.isedit ? 'update Student':'edit Student'}</button>
     </form>
    </div>
  )
}
