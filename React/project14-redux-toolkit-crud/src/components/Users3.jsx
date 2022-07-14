import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, updateUser } from '../slices/userSlice3'


const Users3 = () => {
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
        var newUser = { ...user }
        var fieldName = e.target.name;
        newUser[fieldName] = e.target.value
        setuser(newUser)
    }
    const handleSubmit = () => {
        console.log(user)
        dispatch(addUser(user))
        clearForm()
    }
    const clearForm = () => {
        setuser({
            fname: "",
            lname: ""
        })
    }
    const handleupdateUser=()=>{
        let updateObj={
            data:user,
            index:userObj.editIndex,
            isEdit:false
        }
        dispatch(updateUser(updateObj))
        clearForm()
    }
    return (
        <div>
            <form>
                <label htmlFor="fname">First Name</label>
                <input type="text" name="fname" value={user.fname} onChange={(e) => { handleChange(e) }} /><br />

                <label htmlFor="lname">Last Name</label>
                <input type="text" name="lname" value={user.lname} onChange={(e) => { handleChange(e) }} /><br />
                <button type='button' onClick={userObj.isEdit ? handleupdateUser :handleSubmit}>{userObj.isEdit ? "update user" : "add user"}</button>
            </form>
        </div>
    )
}

export default Users3