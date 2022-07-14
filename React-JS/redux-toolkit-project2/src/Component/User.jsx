import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { addUser, updateUser } from '../slices/userSlice'

export const User = () => {
    const allUsers=useSelector((state)=>state.users)
    const [user,setuser]=useState({
        fname:"",
        lname:""
    })
    const userobj=useSelector((state)=>state.userInfo)
    useEffect(()=>{
        if(userobj.isEdit){
            setuser(userobj.users[userobj.editIndex])
        }
    },[userobj])
    console.log(userobj)
    const dispatch=useDispatch()
    const handlechange=(e)=>{
    let newuser={...user}
    let fieldname=e.targer.name
    newuser[fieldname]=e.targer.value
    setuser(newuser)
    }
    
    const handleSubmit=()=>{
        dispatch(addUser(user))
        handleClear()
    }

    const handleClear=()=>{
        setuser({
            fname:"",
            lname:""
        })
    }
    const handleUpdateuser=()=>{
        let updateobj={
            data:user,
            index:userobj.editIndex,
            isEdit:false
        }
        dispatch(updateUser(updateobj))
        handleClear()
    }
  return (
    <div>
        <form>
            <label htmlFor="fname">First Name</label>
            <input type="text" name="fname" value={user.fname} onChange={(e)=>{handlechange(e)}}/><br/>
            <label htmlFor="lname">Last Name</label>
            <input type="text" name="lname" value={user.lname} onChange={(e)=>{handlechange(e)}}/><br/>
            <button onClick={userobj.isEdit? handleUpdateuser:handleSubmit}>{userobj.isEdit ? 'Update User':'Edit User'}</button>
        </form>
    </div>
  )
}
