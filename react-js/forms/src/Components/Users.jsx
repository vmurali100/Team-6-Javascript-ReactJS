import React,{useState} from 'react'

const Users=()=>{
   const [person, setperson] = useState({
       fname:"",lname:""
   })
    const handlechange = (event)=>{
       var variablename=event.target.name;
       var newperson={...person}
       newperson[variablename]=event.target.value;
       setperson(newperson)
      
    }
    const addperson=()=>{
        console.log(person)
    }
    return(
        <div>
            <label htmlFor="">First Name :</label>
            <input type="text" name="fname" value={person.fname} onChange={(event)=>{handlechange(event)}}/>
            <label htmlFor="">Last Name</label>
            <input type="text" name="lname" value={person.lname} onChange={(event)=>{handlechange(event)}}/>
            <button onClick={addperson}>Add User</button>
        </div>
    )
}
export default Users