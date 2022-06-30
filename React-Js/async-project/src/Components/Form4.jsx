import React from 'react'
import { useState } from 'react'

const Form4 = () => {
    const [person, setperson] = useState({
        street:"",citystate:"",zipcode:"",country:""
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
    const userCancel = () => {}
  return (
    <div>
        <h2>Address</h2><hr />
        <form action="">
            <label htmlFor="street">Street</label>
            <input type="text" name="street" id="" value={person.street} onChange={(event)=>{handlechange(event)}}/> <br />
            <input type="text" name="" id="" value={person.street} onChange={(event)=>{handlechange(event)}}/><br />
            <label htmlFor="citystate">City, State</label>
            <input type="text" name="citystate" id="" value={person.citystate} onChange={(event)=>{handlechange(event)}} /> <br />

            <input type="text" name="citystate" id="" value={person.citystate} onChange={(event)=>{handlechange(event)}} /><br />
            <label htmlFor="zipcode">Zip Code</label>
            <input type="text" name="zipcode" id="" value={person.zipcode} onChange={(event)=>{handlechange(event)}}/> <br />
            <label htmlFor="country">Country</label>
            <input type="text" name="country" id="" value={person.country} onChange={(event)=>{handlechange(event)}}/> <br />
            <button type="button" onClick={addperson}>OK</button><br /> <br />
            <button type="button" onClick={userCancel}>Cancel</button>
        </form>
    </div>
  )
}

export default Form4