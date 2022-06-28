import { useState } from "react"
import React from 'react'

const Form = () => {
    const [person, setperson] = useState({
        name:"",username:"",email:"",pass:"",password:"",message:""
    })
    const handlechange=(event)=>{
        var variablename=event.target.name
        var newperson={...person}
        newperson[variablename]=event.target.value
        setperson(newperson)
    }
    const addperson=()=>{
        console.log(person)
    }
    
  return (
    <div>
        <label htmlFor="">Name</label>
        <input type="text" name="name" id="" placeholder="" value={person.name} onChange={(event)=>{handlechange(event)}}/>
        <br/><label htmlFor="">Username</label>
        <input type="text" name="username" id="" value={person.username} onChange={(event)=>{handlechange(event)}}/>
        <br/><label htmlFor="">Email</label>
        <input type="text" name="email" id="" value={person.email} onChange={(event)=>{handlechange(event)}}/>
        <br/><label htmlFor="">Password</label>
        <input type="text" name="pass" id="" value={person.pass} onChange={(event)=>{handlechange(event)}}/>
        <br/><label htmlFor="">Confirm Password</label>
        <input type="text" name="password" id="" value={person.password} onChange={(event)=>{handlechange(event)}}/>
        <br/><label htmlFor="">Message</label>
        <input type="text" name="message" id="" value={person.message} onChange={(event)=>{handlechange(event)}}/>
        <button onClick={addperson}>send</button>
    </div>
  )
}

export default Form