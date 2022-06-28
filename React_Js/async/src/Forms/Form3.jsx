import React from 'react'
import { useState } from 'react'

const Form3 = () => {
    const [person, setperson] = useState({
        name: "", username: "",email:"",password:"",confirm:""
    })
    const handlechange = (event) => {
        var variablename = event.target.name
        var newperson = { ...person }
        newperson[variablename] = event.target.value
        setperson(newperson)
    }
    const addperson = () => {
        console.log(person)
    }
    return (
        <div>
            <h3>BootStrap 4 Form Validation Demo</h3>
            <label htmlFor="">Name</label>
            <br />
            <input type="text" name="name" placeholder='Name' value={person.name} onChange={(event) => { handlechange(event) }} />
            <br />
            <label htmlFor="">Username</label>
            <br />
            <input type="text" name="username" placeholder='Username' value={person.username} onChange={(event) => { handlechange(event) }} />
            <br />
            <label htmlFor="">Email</label>
            <br />
            <input type="text" name="email" placeholder='Email' value={person.email} onChange={(event) => { handlechange(event) }} />
            <br />
            <label htmlFor="">Password</label>
            <br />
            <input type="text" name="password" placeholder='Password' value={person.password} onChange={(event) => { handlechange(event) }} />
            <br />
            <label htmlFor="">Confirm Password</label>
            <br />
            <input type="text" name="confirm" placeholder='Confirm Password' value={person.confirm} onChange={(event) => { handlechange(event) }} />
            <br />
            <label htmlFor="">Message</label>
            <br />
            <input type="text" name="message" placeholder='Message' value={person.message} onChange={(event) => { handlechange(event) }} />
            <br />
            <button onClick={addperson}>send</button>
        </div>
    )
}

export default Form3
