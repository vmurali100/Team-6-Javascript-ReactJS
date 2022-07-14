import React,{useState} from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, updateUser } from '../slices/userSlice4'

const Users4 = () => {
    const [user, setuser] = useState({
        fname:"",
        lname:""
    })
   
    const userObj=useSelector((state)=>state.personInfo)
    useEffect(()=>{
        if(userObj.isEdit){
            setuser(userObj.user[userObj.editIndex])
        }
    },[userObj])
    console.log(userObj)
     const dispatch= useDispatch()
    
    const handleChange=(event)=>{
        var newUser={...user}
        var fieldName=event.target.name
        newUser[fieldName]=event.target.value
        setuser(newUser)
    }
    const handleSubmit=()=>{
        console.log(user)
        dispatch(addUser(user))
        clearForm()
    }
    const clearForm=()=>{
        setuser({
            fname:"",
            lname:""
        })
    }
    const handleupdateUser=()=>{
        var updateInfo={
            data:user,
            index:userObj.editIndex,
            isEdit:false
        }
        dispatch(updateUser(updateInfo))
        clearForm()
    }
  return (
    <div>
        <label htmlFor="fname">First Name</label>
        <input type="text" name="fname" value={user.fname} onChange={(event)=>{handleChange(event)}} /><br/>
        <label htmlFor="lname">Last Name</label>
        <input type="text" name="lname" value={user.lname}  onChange={(event)=>{handleChange(event)}}/><br/>
        <button onClick={userObj.isEdit ? handleupdateUser : handleSubmit}>{userObj.isEdit ?"update user" :"add user"}</button>
    </div>
  )
}

export default Users4