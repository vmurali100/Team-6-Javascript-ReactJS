import React,{useEffect, useState,updateUser} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../slices/UserSlice'

export const User = () => {
    const [user,setuser]=useState({
        fname:"",
        lname:"",
    })
    
    const userobj = useSelector((state) => state.userInfo)
    useEffect(()=>{
        if(userobj.isEdit){
            setuser(userobj.users[userobj.editIndex])
        }
    },[userobj])
    console.log(userobj)
    const dispatch=useDispatch

    const handleChange=(e)=>{
        let newUser={...user}
        let fieldName=e.target.name
        newUser=[fieldName]=e.target.value
        setuser (newUser)
    }
    const handleSumbit=()=>{
        dispatch(addUser(user))
        handleClear()
    }
    const handleClear=(e)=>{
        setuser({
            fname:"",
            lname:"",
        })
    }

    const handleUpdateuser=(e)=>{
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
                <label htmlFor="fname">First Name:</label>
                <input type="text" name="fname" value={user.fname} onChange={(e)=>{handleChange(e)}}/><br/>
                <label htmlFor="lname">Last Name</label>
                <input type="text" name="lname" value={user.lname} onChange={(e)=>{handleChange(e)}}/><br/>
                <button type="button" onClick={userobj.isEdit? handleUpdateuser:handleSumbit}>{userobj.isEdit? 'Update User':'Edit User'}</button>
            </form>
        </div>
    )
}
