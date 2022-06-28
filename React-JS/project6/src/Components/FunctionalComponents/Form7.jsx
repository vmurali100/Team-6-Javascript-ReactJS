import React, { useState } from 'react'

const Form7 = () => {
    const [person, setPerson] = useState({
        username: "",
        password: "",
        email: "",
        dateofbirth: "",
        height: "",
        weight: ""
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
                <label htmlFor="">Username</label> <br />
                <input type="text" name="username" className='m1' placeholder='Username' value={person.username} onChange={(event) => { HandleChange(event) }} /> <br />
                <label htmlFor="">Password</label> <br />
                <input type="text" name="password" className='m2' placeholder='Password' value={person.password} onChange={(event) => { HandleChange(event) }} /> <br />
                <label htmlFor="">Email address</label> <br />
                <input type="text" name="email" className='m3' placeholder='Email address' value={person.email} onChange={(event) => { HandleChange(event) }} /> <br />
                <select name="" className='m4'>
                    <option value="">Iam A Man</option>
                </select> <br />
                <select name="" className='m5'>
                    <option value="">I Want to find A Women</option>
                </select> <br />
                <label htmlFor="">Date Of Birth</label> <br />
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