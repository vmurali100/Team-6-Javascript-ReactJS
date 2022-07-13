import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, updateUser } from '../slices/userSlice'

const Users = () => {
    const [user, setuser] = useState({
        fname: "",
        lname: ""
    })

    const userObj = useSelector((state) => state.usersInfo)
    useEffect(() => {
        if (userObj.isEdit) {
            setuser(userObj.users[userObj.editIndex])
        }
    }, [userObj])
    console.log(userObj)
    const dispatch = useDispatch()
    const handleChange = (event) => {
        let newUser = { ...user }
        let fieldName = event.target.name
        newUser[fieldName] = event.target.value
        setuser(newUser)
    }
    //  console.log("allusers",allusers)
    const handleSubmit = () => {

        dispatch(addUser(user))
        handleclear()
    }
    const handleclear = () => {
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
        handleclear()
    }
    return (
        <div>
            <form >
                <label htmlFor="fname">First Name</label>
                <input type="text" name="fname" value={user.fname} onChange={(event) => { handleChange(event) }} /><br />
                <label htmlFor="lname">Last Name</label>
                <input type="text" name="lname" value={user.lname} onChange={(event) => { handleChange(event) }} /><br />
                <button type="button" onClick={userObj.isEdit ? handleupdateUser :handleSubmit}>{userObj.isEdit ? "update user" : "add user"}</button>

            </form>
        </div>
    )
}

export default Users