import React, { useState } from 'react'

export const Contact = () => {
    const [student, setstudent] = useState({
        Name: "",
        username: "",
        Email: "",
        password: "",
        confirmPassword: "",
        Message: ""
    })
    const handleChange = (event) => {
        var vairableName=event.target.name
        var newStudent={...student}
        newStudent[vairableName]=event.target.value
        setstudent(newStudent)
    }
    const addStudent=()=>{
        console.log(student)
    }
    return (
        <div>
            <label htmlFor="Name">Name</label>
            <input type="text" name="Name" value={student.Name} onChange={(event) => { handleChange(event) }} /><br />
            <label htmlFor="username">username</label>
            <input type="text" name="username" value={student.username} onChange={(event) => { handleChange(event) }} /><br />
            <label htmlFor="Email">Email</label>
            <input type="text" name="Email" value={student.Email} onChange={(event) => { handleChange(event) }} /><br />
            <label htmlFor="password">password</label>
            <input type="text" name="password" value={student.password} onChange={(event) => { handleChange(event) }} /><br />
            <label htmlFor="confirmPassword">confirmPasseord</label>
            <input type="text" name="confirmPassword" value={student.confirmPassword} onChange={(event) => { handleChange(event) }} /><br />
            <label htmlFor="Message">Message</label>
            <input type="text" name="Message" value={student.Message} onChange={(event) => { handleChange(event) }} /><br />
            <button onClick={addStudent}>send</button>
        </div>
    )
}