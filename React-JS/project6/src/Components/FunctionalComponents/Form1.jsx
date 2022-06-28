import React,{useState} from 'react'

const Form1 = () => {
    const [person, setPerson] = useState({
        fname:"",lname:""
    })
    const HandleChange = (event) => {
        var variableName = event.target.name;
        var newPerson = {...person}
        newPerson[variableName] = event.target.value;
        setPerson(newPerson)
    }
    const AddPerson = () =>{
        console.log(person)
    }
  return (
    <div className='userInfo'>
        <p>Form1</p>
        <label htmlFor="">FirstName :</label>
        <input type="text" name="fname" value={person.fname} onChange={(event)=>{HandleChange(event)}} /> <br />
        <label htmlFor="">LastName :</label>
        <input type="text" name="lname" value={person.lname} onChange={(event)=>{HandleChange(event)}}/> <br />
        <button onClick={AddPerson}>Add User</button>

    </div>
  )
}

export default Form1