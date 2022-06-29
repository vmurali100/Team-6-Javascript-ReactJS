import React, { useState } from 'react'

const Users = () => {
  const [person, setperson] = useState({
    fname:"",lname:""
  }    
  )
      const handelchange = (event) => {

        var variableName = event.target.name;
        var newperson ={...person}
        newperson[variableName] =event.target.value
        setperson(newperson)
        // console.log(variableName)

        // console.log(event.target.value)
        // setfname(event.target.value)
    }
         const AddPerson =()=>{
            console.log(person)
         }
    return (
        <div>
            <label htmlFor="">First Name :</label>
            <input type="text" name="fname" value={person.fname} onChange={(event) => { handelchange(event) }} /> <br />
            <label htmlFor="">Last Name :</label>
            <input type="text" name="lname"  value={person.lname} onChange={(event)=>{handelchange(event)}}/> <br />

            <button onClick={AddPerson}>Add User</button>
        </div>
    )
}

export default Users