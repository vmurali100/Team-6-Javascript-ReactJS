import React from 'react'
import { useState } from 'react'

const Form3 = () => {
    const [person, setperson] = useState({
        fname:"",
        lname:"",
        dob:"",
        emailid:"",
        mobileno:""
    })
    const handlechange = (event) => {
        var variableName = event.target.name;
        var newperson = {...person}
        newperson[variableName] = event.target.value;
        setperson(newperson)
    }
    const addperson = () =>{
        console.log(person)
    }
    const userRest = () => {}
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
            <button onClick={addperson}>SUBMIT</button> <br /><br />
            <button onClick={userRest}>RESET</button>
        </form>
    </div>
  )
}

export default Form3