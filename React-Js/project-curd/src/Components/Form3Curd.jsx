import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Form3Curd = () => {
    const [person, setperson] = useState({fname:"",lname:"",dob:"",emailid:"",mobileno:"",id:""});
    const [allUsers, setallUsers] = useState([]);
    const [isEdit, setisEdit] = useState(false)
    const handlechange = (event) => {
        var inputName = event.target.name;
        const newperson = {...person}
        newperson[inputName] = event.target.value;
        setperson(newperson)
    };
    const getAllusers = () => {
        axios.get("http://localhost:3000/person").then((response)=>{
            // console.log(response.data)
            setallUsers(response.data)
        })
    } ;  
    const clearUser=()=>{
        setperson({fname:"",lname:"",dob:"",emailid:"",mobileno:""})
    };
    const addUser = () => {
        console.log(addUser)
        axios.post("http://localhost:3000/person",person).then((response)=>{
            console.log("Person Added Successfully");
            getAllusers();
            clearUser();
        })
    };
    useEffect(()=>{
        getAllusers()
    },[]);
    const deleteUser = (userDetails) => {
        axios.delete("http://localhost:3000/person/"+userDetails.id).then((response)=>{
            getAllusers()
        })
    };
    const editUser = (userInfo) => {
        setisEdit(true)
        setallUsers(userInfo)
    };
    const updateUser = () => {
        axios.put("http://localhost:3000/person/"+person.id,person).then((response)=>{
            getAllusers();
            clearUser();
            setisEdit(false)
        })
    }
  return (
    <div>
        <h2>HTML Form</h2>
        <form action="">
            <label htmlFor="fname">First Name</label>
            <input type="text" name="fname" id="" value={person.fname} onChange={(event)=>{handlechange(event)}}/> <br />
            <label htmlFor="lname">Last Name</label>
            <input type="text" name="lname" id="" value={person.lname} onChange={(event)=>{handlechange(event)}}/> <br />
            <label htmlFor="dob">Date of Bithe</label>
            <input type="date" name="dob" id="" value={person.dob} onChange={(event)=>{handlechange(event)}}/> <br />
            <label htmlFor="emailid">EmailId</label>
            <input type="text" name="emailid" id="" value={person.emailid} onChange={(event)=>{handlechange(event)}} /> <br />
            <label htmlFor="mobileno">Mobile Number</label>
            <input type="text" name="mobileno" id="" value={person.mobileno} onChange={(event)=>{handlechange(event)}}/> <br />
            {isEdit ? <button type="button" onClick={updateUser}>Update User</button> : <button onClick={addUser} type="button">Add Users</button>}
        </form>
        <hr />
        <table border="1">
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Date of Bithe</th>
                    <th>EmailId</th>
                    <th>Mobile Number</th>
                    <th>Edit User</th>
                    <th>Delete User</th>
                </tr>
            </thead>
            <tbody>
                {
                    allUsers.map((userInfo,i)=>{
                        return <tr key={i}>
                            <td>{userInfo.fname}</td>
                            <td>{userInfo.lname}</td>
                            <td>{userInfo.dob}</td>
                            <td>{userInfo.emailid}</td>
                            <td>{userInfo.mobileno}</td>
                            <td><button onClick={()=>{editUser(userInfo)}}>Edit User</button></td>
                            <td><button onClick={()=>{deleteUser(userInfo)}}>Delete User</button></td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default Form3Curd