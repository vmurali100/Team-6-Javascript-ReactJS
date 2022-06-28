import { useState } from "react"
import React  from 'react'

const User = () => {
    const [person, setperson] = useState({
        fname:"", lname:"",date:"",email:"",number:""
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
        <label htmlFor="">First name</label>
        <input type="text" name="fname" id="" value={person.fname} onChange={(event)=>{handlechange(event)}}/>
       <br/><label htmlFor="">Last name</label>
        <input type="text" name="lname" id="" value={person.lname} onChange={(event)=>{handlechange(event)}}/>
        <br/><label htmlFor="">Date of Birth</label>
         <input type="date" name="date" id="" value={person.date} onChange={(event)=>{handlechange(event)}}/>
        <br/><label htmlFor="">Email ID</label>
        <input type="text" name="email" id="" value={person.email} onChange={(event)=>{handlechange(event)}}/>
        <br /><label htmlFor="">Mobile Number</label>
        <input type="number" name="number" id="" value={person.number} onChange={(event)=>{handlechange(event)}}/>
        <br/><button onClick={addperson}>add User</button>
    </div>
  )
}

export default User