import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, updateUser } from '../slices/userSlice'

export const User = () => {

    const [user, setuser] = useState({
        fname: "",
        lname: ""
    })

    const userObj = useSelector((state) => state.userInfo)
    console.log(userObj)

    useEffect(() => {
        if (userObj.isEdit) {
            setuser(userObj.users[userObj.editIndex])

        }
    }, [userObj])

    const dispatch = useDispatch()
    const handleChange = (e) => {
        let newUser = { ...user };
        let filedname = e.target.name
        newUser[filedname] = e.target.value;
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

    const handleUpdateUser = ()=>{
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
                <label htmlFor="fname">First Name :</label>
                <input type="text" name="fname" value={user.fname} onChange={(e) => { handleChange(e) }} /> <br />
                <label htmlFor="lname">Last name</label>
                <input type="text" name="lname" value={user.lname} onChange={(e) => { handleChange(e) }} /> <br />

                <button type='button' onClick={userObj.isEdit ? handleUpdateUser : handleSubmit}>{userObj.isEdit ? "update User" :"Edit User"}</button>
            </form>
        </div>
    )
}
