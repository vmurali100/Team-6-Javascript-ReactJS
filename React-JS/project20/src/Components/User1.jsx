import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addUser, updateUser } from '../slices/UserSlice1';

const User1 = () => {
    const [user, setuser] = useState({
        fname: "",
        lname: ""
    })
    const userObj = useSelector((state)=>state.usersInfo);
    useEffect(()=>{
        // setuser(userObj.users[userObj.editIndex])
        if(userObj.isEdit){
            setuser(userObj.users[userObj.editIndex])
        }

    },[userObj])
    console.log(userObj)
    const dispatch = useDispatch()
    const handleChange = (e) => {
        let newUser = { ...user };
        let fieldName = e.target.name;
        newUser[fieldName] = e.target.value;
        setuser(newUser)
    }
    const handleSubmit = () => {
        dispatch(addUser(user))
        handleClear()
    }
    const handleClear = () => {
        setuser({
            fname: "",
            lname: ""
        })
    }
    const handleupdateUser=()=>{
        let updateObj = {
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
                <input type="text" name="fname" value={user.fname} onChange={(e) => { handleChange(e) }} /> <br />
                <label htmlFor="lname">Last Name : </label>
                <input type="text" name="lname" value={user.lname} onChange={(e) => { handleChange(e) }} /> <br />
                <button type="button" onClick={userObj.isEdit ? handleupdateUser : handleSubmit}>{userObj.isEdit ? "Update User" : "Add User"}</button>

            </form>
        </div>
    )
}

export default User1