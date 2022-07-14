import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, updatetUser } from '../slices2/userSlice2'

export const User2 = () => {

    const [user, setuser] = useState({
        fname: "",
        lname: ""
    })

    const userObj = useSelector((state) => state.usersInfo)

    useEffect(() => {
        if(userObj.isEdit){
            setuser(userObj.users[userObj.editIndex])
        }
    }, [userObj])
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

    const handleUpdateuser = ()=>{
        let updateObj={
            data:user,
            index:userObj.editIndex,
            isEdit:false
        }
        dispatch(updatetUser(updateObj))
        handleClear()
    }
    return (
        <div>
            <form>
                <label htmlFor="fname">Firstname:</label>
                <input type="text" name="fname" value={user.fname} onChange={(e) => { handleChange(e) }} /> <br />
                <label htmlFor="lname">Lastname</label>
                <input type="text" name="lname" value={user.lname} onChange={(e) => { handleChange(e) }} /> <br />

                <button type='button' onClick={userObj.isEdit ? handleUpdateuser:handleSubmit}>{userObj.isEdit ? "updateUser":"AddUser"}</button>
            </form>
        </div>
    )
}
