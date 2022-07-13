import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, updateUser } from '../slices/userSlice'

const User = () => {
    const [user,setuser]=useState({
        fname:"",
        lname:""
    })
const userObj=useSelector((state)=>state.usersInfo)
console.log(userObj)
useEffect(()=>{
   if(userObj.isEdit){
    setuser(userObj.users[userObj.editIndex])
   }
},[userObj])
const dispatch=useDispatch()
const handleChange=(e)=>{
    let newUser={...user};
    let fieldName=e.target.name;
    newUser[fieldName]=e.target.value
    setuser(newUser)
}
const handleSubmit=()=>{
    console.log(user)
    dispatch(addUser(user))
    handleClear()
}
const handleClear=()=>{
    setuser({
        fname:"",
        lname:""
    })
}
const handelUpdate=()=>{
    let updateObj={
        data:user,
        index:userObj.editIndex,
        isEdit:false
    }
    dispatch(updateUser(updateObj))
    handleClear()
}
    return (
    <div>
        <form>
            <label htmlFor="fname">First Name : </label>
            <input type="text" name='fname' value={user.fname} onChange={(e)=>{handleChange(e)}}/><br/>
            <label htmlFor="lname">Last Name : </label>
            <input type="text" name='lname' value={user.lname} onChange={(e)=>{handleChange(e)}}/><br/>
            <button type='button' onClick={userObj.isEdit ? handelUpdate : handleSubmit}>{userObj.isEdit ? 'Update User':'Edit User'}</button>
        </form>
    </div>
  )
}

export default User
