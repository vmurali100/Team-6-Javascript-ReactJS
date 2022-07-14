import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, updateUser } from '../slices/userSlice'

export const Users = () => {
    const [user,setuser]=useState({
        fname:"",
        lname:""
    })
  
   const userobj = useSelector((state)=>state.usersinfo);
   useEffect(()=>{
    if(userobj.isedit){
        setuser(userobj.users[userobj.editIndex])
    }
   },[userobj])
   console.log(userobj)
   const dispatch= useDispatch();
   const handleChange=(e)=>{
       let newUser={...user};
       let fieldname=e.target.name;
       newUser[fieldname]=e.target.value;
       setuser(newUser)
   }
   const handlesubmit=()=>{
   
    dispatch(addUser(user))
    handleclear()
   }
   const handleclear=()=>{
    setuser({
        fname:"",
        lname:"",
    })
   }
   const handleUpdateUser=()=>{
      let updateobj={
        data:user,
        index:userobj.editIndex,
        isedit:false
      }
      dispatch(updateUser(updateobj))
   }
  return (
    <div>
        <form >
            <label htmlFor="fname">first Name : </label>
            <input type="text" name="fname" value={user.fname} onChange={(e)=>{handleChange(e)}} /> <br />
            <label htmlFor="lname">Last Name : </label>
            <input type="text" name="lname" value={user.lname} onChange={(e)=>{handleChange(e)}}/> <br />
            <button type='button' onClick={userobj.isedit ? handleUpdateUser :handlesubmit}>{userobj.isedit ? 'Update User':' Edit User'}</button>

        </form>
    </div>
  )
}
