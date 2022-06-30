import React,{useState} from 'react';

const Form2 = () => {
    const [student, setstudent] = useState({
        firstname:"",lastname:"",dateofbirth:"",emailid:"",mobilenumber:""
    })
    const handlestudent=(event)=>{
        var variablename=event.target.name;
        var newstudent={...student}
        newstudent[variablename]=event.target.value;
        setstudent(newstudent)
    }
    const addform=()=>{
        console.log(student)
    }
    return <div>
        <h1>Html Form</h1>
        <label htmlFor="">First Name : </label>
        <input type="text" name="firstname" value={student.firstname} onChange={(event)=>{handlestudent(event)}}/><br /><br />
        <label htmlFor="">Last Name : </label>
        <input type="text" name="lastname" value={student.lastname} onChange={(event)=>{handlestudent(event)}} /><br /><br />
        <label htmlFor="">Date Of Birth : </label>
        <input type="text" name="dateofbirth" value={student.dateofbirth} onChange={(event)=>{handlestudent(event)}}/><br /><br />
        <label htmlFor="">Email ID : </label>
        <input type="text" name="emailid" value={student.emailid} onChange={(event)=>{handlestudent(event)}}/><br /><br />
        <label htmlFor="">Mobile Number : </label>
        <input type="text" name="mobilenumber" value={student.mobilenumber} onChange={(event)=>{handlestudent(event)}} /><br /><br />
        <button onClick={addform} >submit</button>
        <button>Reset</button>
    </div>;
}



export default Form2;