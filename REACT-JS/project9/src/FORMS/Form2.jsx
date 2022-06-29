import React, { useState } from 'react'

const Form2 = () => {
    const [person, setPerson] = useState({
        name: "",
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
        message: ""
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
        <div className='userInfo'>
            <h4>BootStrap 4 Form Validation Demo</h4>
            <form className="formsInfo">
                <label htmlFor="">Name</label><br />
                <input type="text" name="name" placeholder="Name" value={person.name} onChange={(event) => { HandleChange(event) }} /> <br />
                <label htmlFor="">Username</label> <br />
                <input type="text" name="username" placeholder="Username" value={person.username} onChange={(event) => { HandleChange(event) }} /> <br />
                <label htmlFor="">Email</label> <br />
                <input type="text" name="email" placeholder="Email" value={person.email} onChange={(event) => { HandleChange(event) }} /> <br />
                <label htmlFor="">Password</label> <br />
                <input type="text" name="password" placeholder="Password" value={person.password} onChange={(event) => { HandleChange(event) }} /> <br />
                <label htmlFor="">Confirm Password</label> <br />
                <input type="text" name="confirmpassword" placeholder="ConfirmPassword" value={person.confirmpassword} onChange={(event) => { HandleChange(event) }} /> <br />
                <label htmlFor="">Message</label> <br />
                <input type="text" name="message" placeholder='Message' value={person.message} onChange={(event) => { HandleChange(event) }} /> <br />
            </form>

            <button className='AMV' onClick={AddPerson}>Send</button>
        </div>
    )
}
export default Form2