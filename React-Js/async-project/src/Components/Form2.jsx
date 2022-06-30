import React from 'react'
import { useState } from 'react'

const Form2 = () => {
    const [person,setperson]= useState({
        fname:"",lname:"",dob:"",emailid:"",mobilenumber:"",
    })
    const handlechange = (event) => {
        var variableName = event.target.name;
        var newperson = {...person}
        newperson[variableName] = event.target.value;
        setperson(newperson)
    }
    const addPerson = () => {
        console.log(person)
    }
    const userReset = () => {}
  return (
    <div>
        <h2>HTML Form</h2>
        <form action="">
            <label htmlFor="fname">First Name</label>
            <input type="text" name="fname" id="" value={person.fname} onChange={(event)=>{handlechange(event)}} /> <br />
            <label htmlFor="Lname">Last Name</label>
            <input type="text" name="lname" id="" value={person.lname} onChange={(event)=>{handlechange(event)}} /> <br />
            <label htmlFor="dob">Date Of Birth</label>
            <input type="text" name="dob" id="" value={person.dob} onChange={(event)=>{handlechange(event)}}/> <br />
            <label htmlFor="emailid">Email ID</label>
            <input type="text" name="emailid" id="" value={person.emailid} onChange={(event)=>{handlechange(event)}}/> <br />
            <label htmlFor="mobilenumber">Mobile Number</label>
            <input type="text" name="mobilenumber" id="" value={person.mobilenumber} onChange={(event)=>{handlechange(event)}} /> <br />
            <button type="button" onClick={addPerson}>SUBMIT</button><br /> <br />
            <button type="button" onClick={userReset}>RESET</button>
        </form>
    </div>
  )
}

export default Form2