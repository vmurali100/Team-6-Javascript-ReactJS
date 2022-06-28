import React ,{useState}from 'react'

export const Form1 = () => {
   
    const [person, setperson] = useState({
        fname:"",lname:""
    })
    
    const handleChange=(data)=>{
        // console.log(data.target.value)
        // setperson(data.target.value)
        var vairableName=data.target.name;
        var newPerson={...person}
        newPerson[vairableName]=data.target.value
        setperson(newPerson)
        // console.log(vairableName)
    }
    const addperson=()=>{
        console.log(person)
    }
  return (
    <div>
        <label htmlFor="">First name</label>
        <input type="text" name="fname" value={person.fname} onChange={(data)=>{handleChange(data)}}/><br/>
        <label htmlFor="">Last name</label>
        <input type="text" name="lname" value={person.lname} onChange={(data)=>{handleChange(data)}} /><br/>
        <button onClick={addperson}>add user</button>
    </div>
  )
}
