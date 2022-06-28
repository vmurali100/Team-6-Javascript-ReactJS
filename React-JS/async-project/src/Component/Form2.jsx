import React, { useState } from 'react'

const Form2 = () => {
    const [person, setperson] = useState({
        username:"",pass:"",email:"",date:""
    })
    const handle=(hi)=>{
        var varname=hi.target.name
        var newper={...person}
        newper[varname]=hi.target.value
        setperson(newper)
    }
    const adduser=()=>{
        console.log(person)
    }
  return (
    <div>
        <label htmlFor="">Username</label>
        <input type="text" name="username" id="" placeholder="Username" value={person.username} onChange={(hi)=>{handle(hi)}}/>
        <br/><label htmlFor="">Password</label>
        <input type="text" name="pass" id="" placeholder="Password" value={person.pass} onChange={(hi)=>{handle(hi)}}/>
        <br/><label htmlFor="">Email address</label>
        <input type="text" name="email" placeholder='Email address' value={person.email} onChange={(hi)=>{handle(hi)}}/>
        <br/><label htmlFor=""></label>
        <input type="text" placeholder='I am a man'/>
        <br/><label htmlFor=""></label>
        <input type="text" placeholder='I am a woman'/>
        <br/><label htmlFor="">Date of birth</label>
        <input type="date" name="date" placeholder='Date of birth' value={person.date} onChange={(hi)=>{handle(hi)}}/>
        <br/><button onClick={adduser}>submit</button>
    </div>
  )
}

export default Form2