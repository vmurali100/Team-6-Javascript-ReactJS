import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

export const Users = () => {
    const [user, setuser] = useState({
        fname: "", lname: "",id:""
    })
    const [allusers, setallusers] = useState([])
    const [isEdit, setisEdit] = useState(false)
    const handleChange = (event) => {
        var inputName = event.target.name
        var newUser = { ...user }
        newUser[inputName] = event.target.value
        setuser(newUser)
    }
    const getallusers=()=>{
        axios.get("http://localhost:3000/users").then((response)=>{
            console.log(response.data)
            setallusers(response.data)
        })
    }
    const clearUser=()=>{
        setuser({fname:"",lname:""})
    }
    const addUser = () => {
        console.log(user)
        axios.post("http://localhost:3000/users", user).then((response) => {
            console.log("user added successfully")
            clearUser()
            getallusers()
        })
    }
    useEffect(()=>{
        getallusers()
    },[])
    const deleteuser=(data)=>{
        axios.delete("http://localhost:3000/users/"+data.id).then((response)=>{
            getallusers()
        })
    }
    const edituser=(data)=>{
        setisEdit(true)
        setuser(data)
    }
    const updateuser=()=>{
        axios.put("http://localhost:3000/users/"+user.id,user).then(()=>{
            getallusers()
            clearUser()
            setisEdit(false)
        })
    }
    return (
        <div>
            <form>
                <label htmlFor="fname">First name</label>
                <input type="text" name="fname" value={user.fname} onChange={(event) => { handleChange(event) }} /><br />
                <label htmlFor="lname">Last name</label>
                <input type="text" name="lname" value={user.lname} onChange={(event) => { handleChange(event) }} /><br />
                <input type="text" name="id" hidden />

                {isEdit ? <button onClick={updateuser} type="button">update user</button> : <button onClick={addUser} type="button">add user</button>}
               
               
            </form>
            <hr />
            <table border="1">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Edit user</th>
                        <th>Delete user</th>
                    </tr>
                </thead>
                <tbody>
                    {allusers.map((data,i)=>{
                        return <tr key={i}>
                            <td>{data.fname}</td>
                            <td>{data.lname}</td>
                            <td><button onClick={()=>{edituser(data)}}>Edit user</button></td>
                            <td><button onClick={()=>{deleteuser(data)}}>Delete user</button></td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}
