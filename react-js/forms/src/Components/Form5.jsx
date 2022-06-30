import React,{useState} from 'react';

const Form5 = () => {
    const [student, setstudent] = useState({
        university:"",
        institute:"",
        averagecpi:"",
        upto:"",experience:"",
        yourblog:""
    })
    const handlestudent=(event)=>{
        var variablename=event.target.name;
        var newstudent={...student}
        newstudent[variablename]=event.target.value;
        setstudent(newstudent)
    }
    const addstudent=()=>{
            console.log(student)
    }
    return (<div>
        <fieldset>
           <legend>Registration Details</legend>
           <label htmlFor="">University</label>
           <input type="text" name="university" value={student.university} onChange={(event)=>{handlestudent(event)}}/><br /><br />
           <label htmlFor="">Institute</label>
           <input type="text" name="institute" value={student.institute} onChange={(event)=>{handlestudent(event)}}/><br /><br />
           <label htmlFor="">Branch</label>
           <select name="" id="">
            <option value="">B.com</option>
            <option value="">B.sc</option>
           </select><br /><br />
           <label htmlFor="">Degree</label>
           <select name="" id="">
            <option value="">1</option>
            <option value="">2</option>
           </select>
           <input type="radio" />
           <label htmlFor="">Persuing</label>
           <input type="radio" />
           <label htmlFor=""> Completed</label><br /><br />
           <label htmlFor="">Average CPI</label>
           <input type="text" name="averagecpi" value={student.averagecpi} onChange={(event)=>{handlestudent(event)}} />
           <label htmlFor="">Upto</label>
           <input type="text" name="upto" value={student.upto} onChange={(event)=>{handlestudent(event)}}/>
          
           <label htmlFor="">The semester</label><br /><br />
           <label htmlFor="">Experience</label>
           <input type="text" name="experience" value={student.experience} onChange={(event)=>{handlestudent(event)}} />
           <label htmlFor="">Year</label><br /><br />
           <label htmlFor="">Your website OR Blog : </label>
           <input type="text" name="yourblog" value={student.yourblog} onChange={(event)=>{handlestudent(event)}}/>
           <button onClick={addstudent}>Ok</button>


        </fieldset>
       
    </div>
    )

}

export default Form5