import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

const User = () => {
    const [user, setuser] = useState({fname: "", lname: "", dob: "", email: "", mobile: "",id:""})
    const [allusers,setallusers]=useState([])
    const [isedit,setisedit]=useState(false)
    const handlechange = (event) => {
        var inputuser = event.target.name
        const newuser = { ...user }
        newuser[inputuser] = event.target.value
        setuser(newuser)
    }
    const getallusers=()=>{
        axios.get(" http://localhost:3000/users").then((response)=>{
            setallusers(response.data)
        })
    }
    const clearusers=()=>{
        setuser({fname: "", lname: "", dob: "", email: "", mobile: ""})
    }
    const adduser = () => {
        console.log(user)
        axios.post(" http://localhost:3000/users", user).then((response) => {
            console.log("User added successfully")
            clearusers()
            getallusers()
        })

    }
    useEffect(()=>{
        getallusers()
    },[])
    const deleteuser=(userdetails)=>{
        axios.delete("  http://localhost:3000/users/"+ userdetails.id).then((response)=>{
            getallusers()
        })
    }
    const edituser=(userinfo)=>{
        setisedit(true)
        setuser(userinfo)
    }
    const updateuser=()=>{
        axios.put("http://localhost:3000/users/"+user.id,user).then(()=>{
            getallusers()
            clearusers()
            setisedit(false)
        })
    }
    return (
        <div>
            <form>
                <h3>HTML FORM</h3>
                <label htmlFor="">First Name : </label>
                <input type="text" name='fname' value={user.fname} onChange={(event) => { handlechange(event) }} /><br />
                <label htmlFor="">Last Name : </label>
                <input type="text" name='lname' value={user.lname} onChange={(event) => { handlechange(event) }} /><br />
                <label htmlFor="">Date Of Birth : </label>
                <input type="text" name='dob' value={user.dob} onChange={(event) => { handlechange(event) }} /><br />
                <label htmlFor="">Email ID : </label>
                <input type="text" name='email' value={user.email} onChange={(event) => { handlechange(event) }} /><br />
                <label htmlFor="">Mobile Number : </label>
                <input type="text" name='mobile' value={user.mobile} onChange={(event) => { handlechange(event) }} /><br />
                <input type="text" name="id" hidden />
                {isedit ? <button onClick={updateuser} type="button">update user</button>: <button onClick={adduser} type="button">add user</button>}
               
                
            </form>
            <hr />
            <table border={1}>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Date Of Birth</th>
                        <th>Email</th>
                        <th>Mobile Number</th>
                        <th>Edit User</th>
                        <th>Delete User</th>
                    </tr>
                </thead>
                <tbody>
                    {allusers.map((userinfo,i)=>{
                        return <tr key={i}>
                            <td>{userinfo.fname}</td>
                            <td>{userinfo.lname}</td>
                            <td>{userinfo.dob}</td>
                            <td>{userinfo.email}</td>
                            <td>{userinfo.mobile}</td>
                            <td><button onClick={()=>{edituser(userinfo)}}>Edit User</button></td>
                            <td><button onClick={()=>{deleteuser(userinfo)}}>Delete User</button></td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default User
