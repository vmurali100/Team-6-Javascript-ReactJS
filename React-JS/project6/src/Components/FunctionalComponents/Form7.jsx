import React, { useState } from 'react'

const Form7 = () => {
    const [person, setPerson] = useState({
        username: "",
        password: "",
        email: "",
        dateofbirth: "",
        height: "",
        weight: "",
        man:"",
        iam:""
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
        <div className='userInfo7'>
            <h1>PersonDetails</h1>
            <hr />
            <form className='Amv1'>
                <label htmlFor="username">Username</label> <br />
                <input type="text" name="username" className='m1' placeholder='Username' value={person.username} onChange={(event) => { HandleChange(event) }} /> <br />
                <label htmlFor="password">Password</label> <br />
                <input type="text" name="password" className='m2' placeholder='Password' value={person.password} onChange={(event) => { HandleChange(event) }} /> <br />
                <label htmlFor="email">Email address</label> <br />
                <input type="text" name="email" className='m3' placeholder='Email address' value={person.email} onChange={(event) => { HandleChange(event) }} /> <br />
                <select name="man" className='m4' value={person.man} onChange={(event) => { HandleChange(event) }}>
                    <option value="">Iam A Man</option>
                </select> <br />
                <select name="iam" className='m5' value={person.iam} onChange={(event) => { HandleChange(event) }}>
                    <option value="">I Want to find A Women</option>
                </select> <br />
                <label htmlFor="date">Date Of Birth</label> <br />
                <input type="date" name="dateofbirth" className='m6' value={person.dateofbirth} onChange={(event) => { HandleChange(event) }} /> <br />
                <label for="Height/Weight" >Height/Weight</label> <br />
                <select name="height" className='m7' value={person.height} onChange={(event) => { HandleChange(event) }}>
                    <option value="">Height</option>
                    <option value="5.1 Feets">5.1 Feets</option>
                    <option value="5.2 Feets">5.2 Feets</option>
                    <option value="5.3 Feets">5.3 Feets</option>
                    <option value="5.4 Feets">5.4 Feets</option>
                    <option value="5.5 Feets">5.5 Feets</option>
                </select>
                <select name="weight" className='m8' value={person.weight} onChange={(event) => { HandleChange(event) }}>
                    <option value="">Weight</option>
                    <option value="61 Kgs">61 Kgs</option>
                    <option value="62 Kgs">62 Kgs</option>
                    <option value="63 Kgs">63 Kgs</option>
                    <option value="64 Kgs">64 Kgs</option>
                    <option value="65 Kgs">65 Kgs</option>
                </select> <br />
            </form>
            <button className='m9' onClick={AddPerson}>Click</button>
        </div>
    )
}
export default Form7