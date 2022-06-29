import React from 'react'
import { useState } from 'react'

const Form1 = () => {
    const [person, setperson] = useState({
        name:"",username:"",email:"",password:"", comfirmpassword:"",message:""
    })
    const handlechange = (event) => {
        var variableName = event.target.name;
        var newPerson = {...person}
        newPerson[variableName] = event.target.value;
        setperson(newPerson)
    } 
    const addPerson = () =>{
        console.log(person)
    }
  return (
    <div class="container">
        <h2>BootStrap 4 From Validation Demo</h2>
        <form>
        <label htmlFor="">Name</label><br />
        <input type="text" name="name" id="" placeholder="Name" value={person.name} onChange={(event)=>{handlechange(event)}} /> <br></br>
        <label htmlFor="">Username</label><br />
        <input type="text" name="username" id="" placeholder="Username" value={person.username} onChange={(event)=>{handlechange(event)}}/> <br></br>
        <label htmlFor="">Email</label><br />
        <input type="text" name="email" id="" placeholder="Email" value={person.email} onChange={(event)=>{handlechange(event)}}/> <br></br>
        <label htmlFor="">Password</label><br />
        <input type="Password" name="password" id="" placeholder="Password" value={person.password} onChange={(event)=>{handlechange(event)}}/> <br></br>
        <label htmlFor="">Confirm Password</label><br />
        <input type="Password" name="comfirmpassword" id="" placeholder="Confirm Password" value={person.comfirmpassword} onChange={(event)=>{handlechange(event)}}/> <br></br>
        <label htmlFor="">Message</label><br />
        <input type="message" name="message" id="" placeholder="Message" value={person.message} onChange={(event)=>{handlechange(event)}}/> <br></br>
        <button onClick={addPerson}>Send</button>
        </form>
    </div>
  )
}

export default Form1