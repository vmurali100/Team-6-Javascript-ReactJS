import React,{useState} from 'react'

const Assignment4 = () => {
    const [person, setperson] = useState({
        FirstName:"",LastName:"",DateOfBirth:"",EmailId:"",MobileNumber:""
    })

    const handelchange=(event)=>{
        var variableName=event.target.name;
        var newperson={...person}
        newperson[variableName]=event.target.value
        setperson(newperson)
    }

    const Addperson=()=>{
        console.log(person)
    }
  return (
    <div>
        <h2>HTML Form</h2>
        
       <label htmlFor="">FirstName</label>
        <input type="text" name="FirstName" value={person.FirstName} onChange={(event)=>{handelchange(event)}}/> <br />

        <label htmlFor="">LastName</label>
        <input type="text" name="LastName" value={person.LastName} onChange={(event)=>{handelchange(event)}}/> <br />

        <label htmlFor="">DateOfBirth</label>   
        <select name="" id="Dateofbirth" >
                    <option value="">Dd</option>
                    <option value="2015">2015</option>
                    <option value="2016">2016</option>
                    <option value="2017">2017</option>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                </select>     
                <select name="" id="yearOfbirth" >
                    <option value="">mm</option>
                    <option value="2015">2015</option>
                    <option value="2016">2016</option>
                    <option value="2017">2017</option>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                </select>
                <select name="" id="monthOfBirth" >
                    <option value="">yyy</option>
                    <option value="jan">jan</option>
                    <option value="feb">feb</option>
                    <option value="mar">mar</option>
                    <option value="april">april</option>
                    <option value="may">may</option>
                    <option value="june">june</option>
                    <option value="july">july</option>
                    <option value="aug">aug</option>
                    <option value="sep">sep</option>
                    <option value="oct">oct</option>
                    <option value="nov">nov</option>
                    <option value="dec">dec</option>
                </select> <br />

                <label htmlFor="">EmailId</label>
                <input type="text" name="EmailId" value={person.EmailId} onChange={(event)=>{handelchange(event)}} /> <br />

                <label htmlFor="">MobileNumber</label>
                <input type="text" name='MobileNumber' value={person.MobileNumber} onChange={(event)=>{handelchange(event)}} />

                <button onClick={Addperson}>AddUsers</button>                

   
    </div>
  )
}

export default Assignment4