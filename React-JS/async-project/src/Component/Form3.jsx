import React, { useState } from 'react'

const Form3 = () => {
    const [person, setperson] = useState({
        university:"",institute:"",branch:"",degree:"",cpi:"",experience:"",website:""
    })
    const eventhandle=(good)=>{
        var variablename=good.target.name
        var newperson={...person}
        newperson[variablename]=good.target.value
        setperson(newperson)
    }
    const adduser=()=>{
        console.log(person)
    }
  return (
    <div>
        <label htmlFor="">University</label>
        <input type="text" name="university" value={person.university} onChange={(good)=>{eventhandle(good)}}/>
        <br/><label htmlFor="">Institute</label>
        <input type="text" name="institute" value={person.institute} onChange={(good)=>{eventhandle(good)}}/>
        <br/><label htmlFor="">Branch</label>
        <input type="text" name="branch" value={person.branch} onChange={(good)=>{eventhandle(good)}}/>
        <br/><label htmlFor="">Degree</label>
        <input type="text" name="degree" value={person.degree} onChange={(good)=>{eventhandle(good)}} />
        <input type="radio" name="" id="" />
        <input type="radio" name="" id="" />
        <br/><label htmlFor="">Average CPI</label>
        <input type="text" name="cpi" value={person.cpi} onChange={(good)=>{eventhandle(good)}}/>
        <input type="text" name="cpi" value={person.cpi} onChange={(good)=>{eventhandle(good)}}/>
        <br/><label htmlFor="">Experience</label>
        <input type="text" name="experience" value={person.experience} onChange={(good)=>{eventhandle(good)}}/>
        <br/><label htmlFor="">Your Website Or Blog</label>
        <input type="text" name="website" value={person.website} onChange={(good)=>{eventhandle(good)}}/>
        <button onClick={adduser}>submit</button>
    </div>
  )
}

export default Form3