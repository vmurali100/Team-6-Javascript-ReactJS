import React,{useState} from 'react'

const Assignment2 = () => {
    const [person, setperson] = useState({
           FirstName:"",LastName:"",DateOfBirth:"",EmailId:"",MobileNumber:""
    })

    const handelchange=(event)=>{
        var variableName = event.target.name;
        var newperson={...person};
        newperson[variableName]=event.target.value;
        setperson(newperson)
    }

    const AddPerson=()=>{
        console.log(person)
    }
  return (
    <div>
        <h1>HTML From</h1>
        <label htmlFor="">FirstName</label>
        <input type="text" name="FirstName" value={person.FirstName} onChange={(event)=>{handelchange(event)}}/> <br />

        <label htmlFor="">LastName</label>
        <input type="text" name="LastName" value={person.LastName} onChange={(event)=>{handelchange(event)}}/> <br />

        <label htmlFor="">DateOfBirth</label>
        <input type="text" name="DateOfBirth"  value={person.DateOfBirth} onChange={(event)=>{handelchange(event)}}  /> <br />

        <label htmlFor="">EmailId</label>
        <input type="text" name='EmailId' value={person.EmailId} onChange={(event)=>{handelchange(event)}}/> <br />

        <label htmlFor=""> MobileNumber</label>
        <input type="text " name='MobileNumber' value={person.MobileNumber} onChange={(event)=>{handelchange(event)}} /> <br />

        <button onClick={AddPerson}>Add Users</button>
    </div>
  )
}

export default Assignment2