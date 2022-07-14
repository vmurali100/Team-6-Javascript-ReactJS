import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, updateUser } from './userSlice'

const User = () => {
    const [user,setuser]=useState({
        name:"",
        username:"",
        email:"",
        pass:"",
        confirm:"",
        msg:""
    })
    const usersObj=useSelector((state)=>state.usersInfo)
    useEffect(()=>{
        if(usersObj.isEdit){
            setuser(usersObj.users[usersObj.editIndex])
        }
    },[usersObj])
    const dispatch=useDispatch()
    const handleChange=(e)=>{
        let newuser={...user};
        let fieldName=e.target.name;
        newuser[fieldName]=e.target.value;
        setuser(newuser)
    }
    const handleSubmit=()=>{
        console.log(user)
        dispatch(addUser(user))
        handleClear()
    }
    const handleClear=()=>{
        setuser({
            name:"",
            username:"",
            email:"",
            pass:"",
            confirm:"",
            msg:""
        })
    }
    const handleUpdate=()=>{
        let updateObj={
            data:user,
            index:usersObj.editIndex,
            isEdit:false
        }
        dispatch(updateUser(updateObj))
        handleClear()
    }
   return (
    <div>
      <form>
        <label htmlFor="name">Name :</label>
        <input type="text" name='name' value={user.name} onChange={(e)=>{handleChange(e)}}/><br/>
        <label htmlFor="username">Username :</label>
        <input type="text" name='username'value={user.username}  onChange={(e)=>{handleChange(e)}}/><br/>
        <label htmlFor="email">Email :</label>
        <input type="text" name='email' value={user.email}  onChange={(e)=>{handleChange(e)}}/><br/>
        <label htmlFor="pass">Password :</label>
        <input type="text" name='pass' value={user.pass}  onChange={(e)=>{handleChange(e)}}/><br/>
        <label htmlFor="confirm">Confirm Password:</label>
        <input type="text" name='confirm' value={user.confirm}  onChange={(e)=>{handleChange(e)}}/><br/>
        <label htmlFor="msg">Message :</label>
        <input type="text" name='msg'value={user.msg}  onChange={(e)=>{handleChange(e)}}/><br/>
        <button type='button' onClick={usersObj.isEdit ? handleUpdate : handleSubmit}>{usersObj.isEdit ? 'Update user' : 'Edit user'}</button>
      </form>
    </div>
  )
}

export default User
