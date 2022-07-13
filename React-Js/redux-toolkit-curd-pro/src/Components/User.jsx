import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addUser, updateUser } from '../slices/userSlices';

export const User = () => {
    const [user, setuser] = useState({
        name: "",
        username: "",
        email: "",
        password: "",
        message: ""
    });

    const userobj = useSelector((state)=>state.usersInfo);
    console.log(userobj)

    useEffect(()=>{
        if(userobj.isEdit){
            setuser(userobj.users[userobj.editIndex])
        }
    },[userobj])
    
    const dispatch = useDispatch();

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
            name: "",
            username: "", 
            email: "",
            password: "",
            message: ""
        })
    }
    const handleUpdateUser =()=>{
        let updateobj={
            data: user,
            index:userobj.editIndex,
            isEdit:false
        }
        dispatch(updateUser(updateobj))
        handleClear()
    }
    return (
        <div>
            <h2>BootStrap 4 Form Validation Demo</h2>
            <form>
                <label htmlFor="name">Name </label>
                <input type="text" name="name" placeholder="Name" value={user.name} onChange={(e) => { handleChange(e) }} /><br />
                <label htmlFor="username">Username </label>
                <input type="text" name="username" placeholder="Username" value={user.username} onChange={(e) => { handleChange(e) }} /><br />
                <label htmlFor="email">Email </label>
                <input type="text" name="email" placeholder="Email" value={user.email} onChange={(e) => { handleChange(e) }} /><br />
                <label htmlFor="password">Password </label>
                <input type="password" name="password" placeholder="Password" value={user.password} onChange={(e) => { handleChange(e) }} /><br />
                <label htmlFor="message">Message </label>
                <input type="text" name="message" placeholder="Message" value={user.message} onChange={(e) => { handleChange(e) }} /><br />
                <button type="button" onClick={userobj.isEdit ? handleUpdateUser : handleSubmit}>{userobj.isEdit ? 'Update User':'Edit User'}</button>
            </form>
        </div>
    )
}
