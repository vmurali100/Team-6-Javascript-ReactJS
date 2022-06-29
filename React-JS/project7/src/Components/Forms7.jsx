import React, { useState, useEffect } from 'react'
import axios from "axios"

const Forms7 = () => {
    const [person, setperson] = useState({
        username: "",
        password: "",
        email: "",
        dateofbirth: "",
        height: "",
        weight: "",
        id: ""
    })
    const [AllUsers, setAllUsers] = useState([])
    const [isEdit, setisEdit] = useState(false)
    const HandleChange = (event) => {
        var inputName = event.target.name
        const newUser = { ...person }
        newUser[inputName] = event.target.value
        setperson(newUser)
    }
    const getAllUsers = () => {
        axios.get("http://localhost:3000/Form6").then((response) => {
            console.log(response.data)
            setAllUsers(response.data)

        })
    }
    const addUser = () => {
        console.log(person)
        axios.post("http://localhost:3000/Form6/", person).then((response) => {
            console.log("User Added Successfully")
            clearUser()
            getAllUsers()
        })
    }
    const clearUser = () => {
        setperson({
            username: "",
            password: "",
            email: "",
            dateofbirth: "",
            height: "",
            weight: ""
        })
    }
    useEffect(() => {
        getAllUsers()
    }, [])
    const deleteuser = (userDetails) => {
        axios.delete("http://localhost:3000/Form6/" + userDetails.id).then((response) => {
            getAllUsers()

        })
    }
    const edituser = (userInfo) => {
        setisEdit(true)
        setperson(userInfo)


    }
    const updateuser = () => {
        axios.put("http://localhost:3000/Form6/" + person.id, person).then(() => {
            getAllUsers();
            clearUser();
            setisEdit(false)
        })
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
                <input type="text" name="id" hidden />
                {isEdit ? <button onClick={updateuser} type="button">UpdateUser</button> : <button onClick={addUser} type="button">AddUser</button>}
            </form>
            <hr />
            <table border="2">
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Password</th>
                        <th>Email address</th>
                        <th>Date Of Birth</th>
                        <th>Height/Weight</th>
                        <th>EditUser</th>
                        <th>DeleteUser</th>
                    </tr>
                </thead>
                <tbody>
                    {AllUsers.map((userInfo, i) => {
                        return <tr key={i}>
                            <td>{userInfo.username}</td>
                            {/* <td>{userInfo.city},{userInfo.state}</td> */}
                            <td>{userInfo.password}</td>
                            <td>{userInfo.email}</td>
                            <td>{userInfo.dateofbirth}</td>
                            <td>{userInfo.height},{userInfo.weight}</td>
                            <td><button onClick={() => { edituser(userInfo) }}>Edit User </button></td>
                            <td><button onClick={() => { deleteuser(userInfo) }}>Delete User</button></td>
                        </tr>
                    })}

                </tbody>
            </table>
        </div>
    )
}

export default Forms7