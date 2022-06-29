import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react';

const User = () => {
    const [user, setusers] = useState({ fname: "", lname: "", id: "" });
    const [allUsers, setallUsers] = useState([])
    const [isEdit, setisEdit] = useState(false)

    const handleChange = (event) => {
        var inputName = event.target.name
        const newuser = { ...user }
        newuser[inputName] = event.target.value
        setusers(newuser)

    }

    const getAllUsers = () => {
        axios.get("http://localhost:3000/users").then((response) => {
            setallUsers(response.data)
        })
    }

    const clearUser = () => {
        setusers({ fname: "", lname: "" })
    }

    const addUser = () => {
        console.log(user)
        axios.post("http://localhost:3000/users", user).then((response) => {
            console.log("user added successfully")
            clearUser()
            getAllUsers()
        })
    }

    useEffect(() => {
        getAllUsers()
    }, [])

    //DeleteUser
    const deleteuser = (userDetails) => {
        axios.delete("http://localhost:3000/users/" + userDetails.id).then((response) => {
            getAllUsers()
        })
    }

    //EditUser

    const edituser = (userinfo) => {
        setisEdit(true)
        setusers(userinfo)
    }

    //updateuser 
    const updateuser =()=>{
        axios.put("http://localhost:3000/users/"+user.id,user).then((response)=>{
            getAllUsers();
            clearUser();
            setisEdit()
        })
    }

    return (
        <div>
            <form >
                <label htmlFor="">First Name :-</label>
                <input type="text" name="fname" value={user.fname} onChange={(event) => { handleChange(event) }} /> <br />
                <label htmlFor="">Last Name :-</label>
                <input type="text" name="lname" value={user.lname} onChange={(event) => { handleChange(event) }} /> <br />
                <input type="text" name="id" hidden />
                {isEdit ? <button onClick={updateuser} type="button" > Update User</button> :
                    <button onClick={addUser} type="button" > Add User</button>}
            </form>
            
            <hr />

            <table border="1">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>last Name</th>
                        <th>Edit User</th>
                        <th>Delete Users</th>
                    </tr>
                </thead>
                <tbody>
                    {allUsers.map((userinfo, i) => {
                        return <tr key={i}>
                            <td>{userinfo.fname}</td>
                            <td>{userinfo.lname}</td>
                            <td><button onClick={() => { edituser(userinfo) }}>Edit User</button></td>
                            <td><button onClick={() => { deleteuser(userinfo) }}>Delete User</button></td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default User