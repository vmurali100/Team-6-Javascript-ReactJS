import React,{useState} from 'react'

const Form5 = () => {
    const [person, setPerson] = useState({
        street:"",
        city:"",
        state:"",
        zipcode:"",
        country:""
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
    <div className='userInfo5'>
        <h1>Address</h1>
        <hr />
        <form className='Amv1'>
        <label htmlFor="">Street :</label>
        <input type="text" name="street" className='F1' value={person.street} onChange={(event)=>{HandleChange(event)}} /> <br />
        <input type="text" name="street" className='F2' value={person.street} onChange={(event)=>{HandleChange(event)}} /> <br />
        <label htmlFor="">City, State :</label>
        <input type="text" name="city" className='F3' value={person.city} onChange={(event)=>{HandleChange(event)}}/>
        <input type="text" name="state" className='F4' value={person.state} onChange={(event)=>{HandleChange(event)}}/> <br />
        <label htmlFor="">Zip Code :</label>
        <input type="text" name="zipcode" className='F5' value={person.zipcode} onChange={(event)=>{HandleChange(event)}}/> <br />
        <label htmlFor="">Country :</label>
        <input type="text" name="country" className='F6' value={person.country} onChange={(event)=>{HandleChange(event)}}/> <br />
        </form>
        <button className='F7' onClick={AddPerson}>OK</button>
        <button className='F8'>Cancel</button>

    </div>
  )
}

export default Form5