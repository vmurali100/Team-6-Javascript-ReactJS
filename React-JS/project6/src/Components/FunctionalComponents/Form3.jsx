import React,{useState} from 'react'

const Form3 = () => {
    const [person, setPerson] = useState({
        firstname:"",
        lastname:"",
        dateofbirth:"",
        emailId:"",
        mobileno:""
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
    const ResetPerson = () =>{
        console.log(person)
    }
  return (
    <div className='userInfo1'>
        <h3>HTML Form</h3>
        <form className="formsInfo1">
        <label htmlFor="">First Name :</label> 
        <input type="text" name="firstname" className='1A'  value={person.firstname} onChange={(event)=>{HandleChange(event)}} /> <br /> 
        <label htmlFor="">Last Name :</label>  
        <input type="text" name="lastname" className='1'  value={person.lastname} onChange={(event)=>{HandleChange(event)}}/> <br />
        <label htmlFor="">Date Of Birth :</label> 
        <input type="text" name="dateofbirth" className='2'  value={person.dateofbirth} onChange={(event)=>{HandleChange(event)}}/> <br />
        <label htmlFor="">Email ID :</label>  
        <input type="text" name="emailId" className='3' value={person.emailId} onChange={(event)=>{HandleChange(event)}}/> <br />
        <label htmlFor="">Mobile Number :</label>  
        <input type="text" name="mobileno" className='4' value={person.mobileno} onChange={(event)=>{HandleChange(event)}}/> <br />
        </form>
        <button className='AA1' onClick={AddPerson}>SUBMIT</button>
        <button className='AA2'>RESET</button>
        
        
    </div>
  )
}
export default Form3