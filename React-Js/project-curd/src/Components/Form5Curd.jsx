import React,{useState} from 'react'
import axios from 'axios'
import { useEffect } from 'react'
const Form5Curd = () => {
    const [students, setstudents] = useState({username:"",password:"",emailaddress:"",dob:"",id:""})
    const [allUsers, setallUsers]= useState([])
    const [isEdit, setisEdit] = useState(false)
    const handlechange = (event) => {
        // console.log(event)
        var inputName = event.target.name;
        // console.log(inputName)
        const newStudent = {...students}
        newStudent[inputName] = event.target.value
        setstudents(newStudent)
    }
    const getAllusers = () => {
        axios.get("http://localhost:3000/students").then((response)=>{
            // console.log(response.data)
            setallUsers(response.data)
        })
    }
    const clearUser=()=>{
        setstudents({username:"",password:"",emailaddress:"",dob:""})
    }
    const addUser = () =>{
        console.log(students)
        axios.post("http://localhost:3000/students",students).then((response)=>{
        console.log("Student Added Successfully")
        clearUser()
        getAllusers()
        })
    }
    useEffect(()=>{
        getAllusers()
    },[])
    const deleteUser=(userDetails)=>{
        axios.delete("http://localhost:3000/students/"+userDetails.id).then((response)=>{
            getAllusers()
        })
    }
    const editUser = (user) =>{
        setisEdit(true)
        setstudents(user)
    }
    const updateUser = () => {
        axios.put("http://localhost:3000/students/"+students.id,students).then((response)=>{
            getAllusers();
            clearUser();
            setisEdit(false)
        })
    }
  return (
    <div>
        <form>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" placeholder="Username" value={students.username} onChange={(event)=>{handlechange(event)}} /><br/> 

            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="Password" value={students.password} onChange={(event)=>{handlechange(event)}} /><br />
            
            <label htmlFor="emailaddress">Email address</label>
            <input type="text" name="emailaddress" value={students.emailaddress} placeholder="Email address" onChange={(event)=>{handlechange(event)}}/><br />
            <input type="text" name="man" value={students.man} placeholder="I am a man" onChange={(event)=>{handlechange(event)}}/><br />
            <input type="text" name="women" value={students.women} placeholder="I Want of find Women" onChange={(event)=>{handlechange(event)}}/><br />

            <label htmlFor="dob">Date of birth</label>
            <input type="text" name="dob" value={students.dob} placeholder="dob" onChange={(event)=>{handlechange(event)}} /> <br />
            <input type="text" name="id" hidden/>
            {isEdit ? <button type="button" onClick={updateUser}>Update User</button>: <button type="button" onClick={addUser}>Add User</button> }
            
            
        </form>
        <hr />
        <table border="1">
            <thead>
                <tr>
                    <th>Username</th>
                    <th>Password</th>
                    <th>Email address</th>
                    <th>Date of birth</th>
                    <th>Edit User</th>
                    <th>Delele User</th>
                </tr>
            </thead>
            <tbody>
                {allUsers.map((user,i)=>{
                    return <tr key={i}>
                        <td>{user.username}</td>
                        <td>{user.password}</td>
                        <td>{user.emailaddress}</td>
                        <td>{user.dob}</td>
                        <td><button type="button" onClick={()=>{editUser(user)}}>Edit User</button></td>
                        <td><button type="button" onClick={()=>{deleteUser(user)}}>Delete User</button></td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
  )
}

export default Form5Curd