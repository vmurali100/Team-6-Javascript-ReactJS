import React from 'react'
import { useState } from 'react'

const Form1 = () => {
    const [person, setperson] = useState({
        street:"",city:"",zip:"",country:""
    })
    const handlechange=(hello)=>{
        var variablename=hello.target.name
        var newperson={...person}
        newperson[variablename]=hello.target.value
        setperson(newperson)
    }
    const adduser=()=>{
        console.log(person)
    }
  return (
    <div>
        <label htmlFor="">Street</label>
        <input type="text" name="street" id="" value={person.street} onChange={(hello)=>{handlechange(hello)}}/>
        <br/><label htmlFor="">City,State</label>
        <input type="text" name="city" id="" value={person.city} onChange={(hello)=>{handlechange(hello)}}/>
        <br/><label htmlFor="">Zip Code</label>
        <input type="text" name="zip" id="" value={person.zip} onChange={(hello)=>{handlechange(hello)}}/>
        <br/><label htmlFor="">Country</label>
        <input type="text" name="country" id="" value={person.country} onChange={(hello)=>{handlechange(hello)}}/>
        <button onClick={adduser}>ok</button>
    </div>
  )
}

export default Form1