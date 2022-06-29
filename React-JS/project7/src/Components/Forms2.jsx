import React, { useState, useEffect } from 'react'
import axios from "axios"

const Forms2 = () => {
    const [person, setperson] = useState({
        name: "",
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
        message: "",
        id:""
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
        axios.get("http://localhost:3000/Form2").then((response) => {
            console.log(response.data)
            setAllUsers(response.data)

        })
    }
    const addUser = () => {
        console.log(person)
        axios.post("http://localhost:3000/Form2/", person).then((response) => {
            console.log("User Added Successfully")
            clearUser()
            getAllUsers()
        })
    }
    const clearUser = () => {
        setperson({
            name: "",
            username: "",
            email: "",
            password: "",
            confirmpassword: "",
            message: ""
        })
    }
    useEffect(() => {
        getAllUsers()
    }, [])
    const deleteuser = (userDetails) => {
        axios.delete("http://localhost:3000/Form2/" + userDetails.id).then((response) => {
            getAllUsers()

        })
    }
    const edituser = (userInfo) => {
        setisEdit(true)
        setperson(userInfo)


    }
    const updateuser = () => {
        axios.put("http://localhost:3000/Form2/" + person.id, person).then(() => {
            getAllUsers();
            clearUser();
            setisEdit(false)
        })
    }
    return (
        <div class="userInfo123">
            <p>Forms1</p>
            <h4>BootStrap 4 Form Validation Demo</h4>
            <form className="formsInfo123">
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
                <input type="text" name="id" hidden />
                {isEdit ? <button className='b1' onClick={updateuser} type="button">UpdateUser</button> : <button className='b1' onClick={addUser} type="button">AddUser</button>}
            </form>
            <hr />
            <table border="2" className='A123'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Confirm Password</th>
                        <th>Message</th>
                        <th>EditUser</th>
                        <th>DeleteUser</th>
                    </tr>
                </thead>
                <tbody>
                    {AllUsers.map((userInfo, i) => {
                        return <tr key={i}>
                            <td>{userInfo.name}</td>
                            <td>{userInfo.username}</td>
                            <td>{userInfo.email}</td>
                            <td>{userInfo.password}</td>
                            <td>{userInfo.confirmpassword}</td>
                            <td>{userInfo.message}</td>
                            <td><button onClick={() => { edituser(userInfo) }}>Edit User </button></td>
                            <td><button onClick={() => { deleteuser(userInfo) }}>Delete User</button></td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Forms2