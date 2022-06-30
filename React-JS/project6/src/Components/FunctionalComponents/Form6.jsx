import React, { useState } from 'react'

const Form6 = () => {
    const [person, setPerson] = useState({
        university: "",
        institute: "",
        branch: "",
        degree: "",
        averagecpi: "",
        experience: "",
        websiteblog: ""
    })
    const HandleChange = (event) => {
        var variableName = event.target.name;
        var newPerson = { ...person }
        newPerson[variableName] = event.target.value;
        setPerson(newPerson)
    }
    const AddPerson = () => {
        console.log(person)
    }
    return (
        <div className='userInfo6'>
            <form>
                <fieldset>
                    <legend>Registration Details</legend>
                    <label  >University :</label>
                    <input type="text" name="university" className='a1'  value={person.university} onChange={(event) => { HandleChange(event) }} /> <br />
                    <label  >Institute :</label>
                    <input type="text" name="institute" className='a2'  value={person.institute} onChange={(event) => { HandleChange(event) }} /> <br />
                    <label >Branch :</label>
                    <select name="branch" className='a3' value={person.branch} onChange={(event) => { HandleChange(event) }}>
                        {/* <option value="">---Select---</option> */}
                        <option value="B.A">B.A</option>
                        <option value="B.Com">B.Com</option>
                        <option value="B.Com(Computers)">B.Com(Computers)</option>
                        <option value="B.Sc(MPC)">B.Sc(MPC)</option>
                        <option value="B.Sc(MPCS)">B.Sc(MPCS)</option>
                    </select> <br />
                    <label  >Degree :</label>
                    <select name="degree" className='a4' value={person.degree} onChange={(event) => { HandleChange(event) }}>
                        {/* <option value="">---Select---</option> */}
                        <option value="1st Year">1st Year</option>
                        <option value="2nd Year">2nd Year</option>
                        <option value="3rd Year">3rd Year</option>
                        <option value="4th Year">4th Year</option>
                    </select>
                    <input type="radio" name="degree" className='a5' value={person.degree} onChange={(event) => { HandleChange(event) }} />Pursuing
                    <input type="radio" name="degree" className='a6' value={person.degree} onChange={(event) => { HandleChange(event) }} />Completed <br />
                    <label >Average CPI :</label>
                    <input type="number" name='averagecpi'className='a7' value={person.averagecpi} onChange={(event) => { HandleChange(event) }}  ></input>
                    <label  >Upto</label>
                    <input type="number" name='averagecpi' className='a8' value={person.averagecpi} onChange={(event) => { HandleChange(event) }}  ></input>
                    <label  >Th Semester</label> <br />
                    <label >Experience:</label>
                    <input type="number" name='experience' className='a9' value={person.experience} onChange={(event) => { HandleChange(event) }}></input>
                    <label  >Years</label> <br />
                    <label>Your Website Or Blog:</label>
                    <input type="text" name='websiteblog' className='a10' placeholder="http://" value={person.websiteblog} onChange={(event) => { HandleChange(event) }}></input> <br />
                </fieldset>
            </form>
            <button className='a11' onClick={AddPerson}>OK</button>
        </div>
    )
}

export default Form6