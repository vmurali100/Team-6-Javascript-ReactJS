import React, { useState } from 'react'

export const Form5 = () => {
    const [details, setdetails] = useState({
        username: "",
        password: "",
        Email: "",
        DateOfBirth: "",
    })
    const handleChang = (event) => {
        var vairableName = event.target.name
        var newPerson = { ...details }
        newPerson[vairableName] = event.target.value
        setdetails(newPerson)
    }
    const getData = () => {
        console.log(details)
    }
    return (
        <div>
            <label htmlFor="username">username</label>
            <input type="text" placeholder='username' name="username" value={details.username} onChange={(event) => { handleChang(event) }} /><br />

            <label htmlFor="password">password</label>
            <input type="text" name="password" placeholder='password' value={details.password} onChange={(event) => { handleChang(event) }} /><br />

            <label htmlFor="Email">Email</label>
            <input type="text" name="Email" placeholder='Email address' value={details.Email} onChange={(event) => { handleChang(event) }} /><br />
            <label htmlFor="iam" hidden>iam</label>
        
            <select name="" onChange={(event) => { handleChang(event) }}>
                <option value="">I am a man</option>
                <option value="">I am a girl</option>
            </select><br />
            <select name="" id="" onChange={(event) => { handleChang(event) }}>
                <option value="">I want to find women</option>
                <option value="">I want to find men</option>
            </select><br />
            <label htmlFor="DateOfBirth">DateOfBirth</label>
            <input type="date" name="DateOfBirth" value={details.DateOfBirth} onChange={(event) => { handleChang(event) }} /><br />

            <button onClick={getData}>submit</button>
        </div>
    )
}