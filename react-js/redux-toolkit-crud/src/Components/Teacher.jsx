import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addteacer, updateteacher } from '../slice3/teacherSlice'

export const Teacher = () => {
    const [teacher,setteacher]=useState({
        fname:"",
        lname:""
    })
    const teacherobj = useSelector((state)=>state.teacherinfo)
   const dispatch= useDispatch()
   useEffect(()=>{
    if(teacherobj.isedit){
      setteacher(teacherobj.teachers[teacherobj.editindex])
    }
 },[teacherobj])
   const handlechange=(e)=>{
    let newteacher={...teacher}
    let teacherindex=e.target.name;
    newteacher[teacherindex]=e.target.value;
    setteacher(newteacher)
    
}
  
   
 const handlesubmit=()=>{
    dispatch(addteacer(teacher))
    clearteacher()

  }
 const clearteacher=()=>{
    setteacher({
        fname:"",
        lname:""
    })
  }
  const handleupdateteacher=()=>{
    let updateobj={
      data:teacher,
      index:teacherobj.editindex,
        isedit:false
    }
    dispatch(updateteacher(updateobj))
    clearteacher()
  }
  return (
    <div>
          <form >
            <label htmlFor="fname">fname</label>
            <input type="text" name="fname" value={teacher.fname}  onChange={(e)=>{handlechange(e)}}/><br />
            <label htmlFor="lname">lname</label>
            <input type="text" name="lname" value={teacher.lname} onChange={(e)=>{handlechange(e)}}/><br />
            <button type='button' onClick={teacherobj.isedit ? handleupdateteacher: handlesubmit}>{teacherobj.isedit ? 'update teacher' : 'edit teacher'}</button>
          </form>
    </div>
  )
}

