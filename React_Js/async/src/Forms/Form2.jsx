import React from 'react'
import { useState } from 'react'

const Form2 = () => {
    const [person,setperson]=useState({
        fname:"",lname:"",dob:"",email:"",mobile:""
    })
    const handlechange=(event)=>{
        var variableName=event.target.name;
        var newperson={...person}
        newperson[variableName]= event.target.value
        setperson(newperson)
        
    }
    const addperson=()=>{
        console.log(person)
    }
    const clear=()=>{
        console.log("")
    }
  return (
    <div>
        <h3>HTML FORM</h3>
      <label htmlFor="">First Name : </label>
      <input type="text" name="fname" value={person.fname} onChange={(event)=>{handlechange(event)}}/>
      <br/> 
      <label htmlFor="">Last Name : </label>
      <input type="text" name="lname" value={person.lname} onChange={(event)=>{handlechange(event)}}/>
      <br/>
      <label htmlFor="">Date Of Birth  : </label>
      <input type="text" name="dob" placeholder="dd-mm-yyyy" value={person.dob} onChange={(event)=>{handlechange(event)}}/>
      <br/>
      <label htmlFor="">Email ID : </label>
      <input type="text" name="email" value={person.email} onChange={(event)=>{handlechange(event)}}/>
      <br/>
      <label htmlFor="">Mobile Number : </label>
      <input type="text" name="mobile" value={person.mobile} onChange={(event)=>{handlechange(event)}}/>
      <br/>
      <button onClick={addperson}>SUBMIT</button>
      <button onClick={clear}>RESET</button>
    </div>
  )
}

export default Form2
