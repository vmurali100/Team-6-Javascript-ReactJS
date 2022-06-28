import React,{useState} from 'react'

export const Form3 = () => {
    const [person, setperson] = useState({
        firstName:"",
        lastName:"",
        dateOfBirth:"",
        Email:"",
        MobileNumber:""
    })
    const handleChange=(event)=>{
        var vairableName=event.target.name
        var newPerson={...person}
        newPerson[vairableName]=event.target.value
        setperson(newPerson)
    }
    const displayuser=()=>{
        console.log(person)
    }
    const resetDetails=()=>{
      
    }
  return (
    <div>
        <label htmlFor="firstName">firstName</label>
        <input type="text" name="firstName" value={person.firstName} onChange={(event)=>{handleChange(event)}}/><br/>

        <label htmlFor="lastName">lastName</label>
        <input type="text" name="lastName" value={person.lastName}  onChange={(event)=>{handleChange(event)}}/><br/>

        <label htmlFor="dateOfBirth">dateOfBirth</label>
        <input type="text" name="dateOfBirth" value={person.dateOfBirth}  onChange={(event)=>{handleChange(event)}}/><br/>

        <label htmlFor="Email">Email</label>
        <input type="text" name="Email" value={person.Email}  onChange={(event)=>{handleChange(event)}}/><br/>
        <label htmlFor="MobileNumber">MobileNumber</label>
        <input type="text" name="MobileNumber" value={person.MobileNumber}  onChange={(event)=>{handleChange(event)}}/><br/>

        <button onClick={displayuser}>submit</button>
        <button onClick={resetDetails}>reset</button>
    </div>
  )
}
