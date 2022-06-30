import React,{useState} from 'react';

const Form1 = () => {
    const [person, setperson] = useState({
        name:"",username:"",email:"",password:"",conformpassword:"",message:""
    })
    const handlechange=(event)=>{
        var variablename=event.target.name;
        var newperson={...person}
        newperson[variablename]=event.target.value;
        setperson(newperson)

    }
    const addperson=()=>{
        console.log(person)
    }
    return <div>
        <label htmlFor="">Name</label><br /><br />
        <input type="text" name="name" value={person.name} placeholder="Name"  onChange={(event)=>{handlechange(event)}}/><br /><br />
        <label htmlFor="">Username</label><br /><br />
        <input type="text" name="username" value={person.username}placeholder="Username" onChange={(event)=>{handlechange(event)}} /><br /><br />
        <label htmlFor="">Email</label><br /><br />
        <input type="text" name="email" value={person.email}placeholder="Email" onChange={(event)=>{handlechange(event)}} /><br /><br />
        <label htmlFor="">Password</label><br /><br />
        <input type="text" name="password"value={person.password}placeholder="Password" onChange={(event)=>{handlechange(event)}} /><br /><br />
        <label htmlFor="">conform password</label><br /><br />
        <input type="text" name="conformpassword" value={person.conformpassword}placeholder="conform password" onChange={(event)=>{handlechange(event)}} /><br /><br />
        <label htmlFor="">message</label><br /><br />
        <input type="text" name="message" value={person.message}placeholder="message" onChange={(event)=>{handlechange(event)}}/><br /><br />
        <button onClick={addperson}>send</button><br /><br />
    </div>;
}


export default Form1;