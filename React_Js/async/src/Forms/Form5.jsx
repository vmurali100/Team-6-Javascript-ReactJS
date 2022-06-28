import React from 'react'
import { useState } from 'react'

const Form5 = () => {
    const [person, setperson] = useState({
        username: "", password: "", email: "", dob: "",height:"",weight:""
    })
    const handlechange = (event) => {
        var variablename = event.target.name
        var newperson = { ...person }
        newperson[variablename] = event.target.value
        setperson(newperson)
    }
    const send = () => {
        console.log(person)
    }
    return (
        <div>
            <h3>Person Details</h3>
            <label htmlFor="">Username</label>
            <br />
            <input type="text" name="username" placeholder='Username' value={person.username} onChange={(event) => { handlechange(event) }} />
            <br />
            <label htmlFor="">Password</label>
            < br />
            <input type="text" name="password" placeholder='Password' value={person.password} onChange={(event) => { handlechange(event) }} />
            <br />
            <label htmlFor="">Email</label>
            <br />
            <input type="text" name="email" placeholder='Email' value={person.email} onChange={(event) => { handlechange(event) }} />
            <br />
            <select name="" >
                <option value="">I am a man</option>
            </select><br/>
            <select name="" >
                <option value="">I want to find women</option>
            </select><br/>
           
            <label htmlFor="">Date Of Birth</label>
            <br />
            <input type="text" name="dob" placeholder='dd-mm-yyyy' value={person.dob} onChange={(event) => { handlechange(event) }} />
            <br />
            <label htmlFor="">Height/Weight</label>
            <br />
           <select name='height' value={person.height} onChange={(event) => { handlechange(event) }} >
            <option value="">Height</option>
            <option value="5.0">5.0</option>
            <option value="5.1">5.1</option>
            <option value="5.2">5.2</option>
            <option value="5.3">5.3</option>
            <option value="5.4">5.4</option>
            <option value="5.5">5.5</option>
           </select>
           <select name='weight' value={person.weight} onChange={(event) => { handlechange(event) }} >
            <option value="">weight</option>
            <option value="50">50</option>
            <option value="51">51</option>
            <option value="52">52</option>
            <option value="53">53</option>
            <option value="54">54</option>
            <option value="55">55</option>
           </select><br/>
            <button onClick={send}>Click </button>
        </div>
    )
}

export default Form5
