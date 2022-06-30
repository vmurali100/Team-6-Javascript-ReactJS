import React from 'react'
import { useState } from 'react'
const Form5 = () => {
    const [person, setperson] = useState({
        username:"", password:"",emailaddress:"",dob:""
    })
    const handlechange = (event) => {
        var variableName = event.target.name;
        var newperson = {...person}
        newperson[variableName] = event.target.value;
        setperson(newperson)
    }
    const addperson = () => {
        console.log(person)
    }
  return (
    <div>
        <form action="">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" placeholder='Username' value={person.username} onChange={(event)=>{handlechange(event)}}/> <br />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder='password' value={person.password} onChange={(event)=>{handlechange(event)}}/> <br />
            <label htmlFor="emailaddress">Email address</label>
            <input type="text" name="emailaddress" placeholder='Email address' value={person.emailaddress} onChange={(event)=>{handlechange(event)}} /> <br />
            <input type="text" name="man" placeholder='I am a man' value={person.man} onChange={(event)=>{handlechange(event)}}/><br />
            <input type="text" name="women" placeholder='I want to find Women' value={person.women} onChange={(event)=>{handlechange(event)}}/> <br />
            <label htmlFor="dob">Date of Birth</label>
            <input type="text" name="dob" value={person.dob} onChange={(event)=>{handlechange(event)}}/> <br />
            <button type="button" onClick={addperson}>Send</button>
        </form>
    </div>
  )
}

export default Form5