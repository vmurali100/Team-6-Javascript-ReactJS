import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUsers, updateUser } from '../slices1/userSlice1'

export const User1 = () => {
    const [user, setuser] = useState({
        fname: "",
        lname: ""
    })

    const userObj = useSelector((state)=>state.usersInfo)
    useEffect(()=>{
       if(userObj.isEdit){
        setuser(userObj.users[userObj.editIndex])
       }
    },[userObj])
    console.log(userObj)
    const dispatch = useDispatch()

    const handleChange = (e) => {
        let newUser = { ...user };
        let fielname = e.target.name;
        newUser[fielname] = e.target.value
        setuser(newUser)
    }

    const handleSubmit = () => {
        dispatch(addUsers((user)))
        handleClear()
    }

    const handleClear = () => {
        setuser({
            fname: "",
            lname: ""
        })
    }

    const handleupdateuser = ()=>{
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
            <form >
                <label htmlFor="fname">First Name :</label>
                <input type="text" name="fname" value={user.fname} onChange={(e) => { handleChange(e) }} /> <br />
                <label htmlFor="lname">Last name :</label>
                <input type="text" name="lname" value={user.lname} onChange={(e) => { handleChange(e) }} /> <br />

                <button type='button' onClick={userObj.isEdit ? handleupdateuser:handleSubmit}>{userObj.isEdit ? "UpdateUser":"AddUser"}</button>
            </form>
        </div>
    )
}
