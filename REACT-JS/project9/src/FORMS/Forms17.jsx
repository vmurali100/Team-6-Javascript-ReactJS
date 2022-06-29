import React, { useState, useEffect } from 'react'
import axios from "axios"

const Forms17 = () => {
    const [person, setperson] = useState({
        firstname:"",
        lastname:"",
        dateofbirth:"",
        emailId:"",
        mobileno:"",
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
        axios.get("http://localhost:3000/Forms17").then((response) => {
            console.log(response.data)
            setAllUsers(response.data)

        })
    }
    const addUser = () => {
        console.log(person)
        axios.post("http://localhost:3000/Forms17/", person).then((response) => {
            console.log("User Added Successfully")
            clearUser()
            getAllUsers()
        })
    }
    const clearUser = () => {
        setperson({
            firstname: "",
            lastname: "",
            dateofbirth: "",
            emailId: "",
            mobileno: ""
        })
    }
    useEffect(() => {
        getAllUsers()
    }, [])
    const deleteuser = (userDetails) => {
        axios.delete("http://localhost:3000/Forms17/" + userDetails.id).then((response) => {
            getAllUsers()

        })
    }
    const edituser = (userInfo) => {
        setisEdit(true)
        setperson(userInfo)


    }
    const updateuser = () => {
        axios.put("http://localhost:3000/Forms17/" + person.id, person).then(() => {
            getAllUsers();
            clearUser();
            setisEdit(false)
        })
    }
    return (
        <div class="userInfo1">
            <h3>HTML Form</h3>
            <form className="formsInfo1">
                <label htmlFor="">First Name :</label>
                <input type="text" name="firstname" className='1A' value={person.firstname} onChange={(event) => { HandleChange(event) }} /> <br />
                <label htmlFor="">Last Name :</label>
                <input type="text" name="lastname" className='1' value={person.lastname} onChange={(event) => { HandleChange(event) }} /> <br />
                <label htmlFor="">Date Of Birth :</label>
                <input type="text" name="dateofbirth" className='2' value={person.dateofbirth} onChange={(event) => { HandleChange(event) }} /> <br />
                <label htmlFor="">Email ID :</label>
                <input type="text" name="emailId" className='3' value={person.emailId} onChange={(event) => { HandleChange(event) }} /> <br />
                <label htmlFor="">Mobile Number :</label>
                <input type="text" name="mobileno" className='4' value={person.mobileno} onChange={(event) => { HandleChange(event) }} /> <br />
                <input type="text" name="id" hidden />
                {isEdit ? <button className='AA1'  onClick={updateuser} type="button">UpdateUser</button> : <button className='AA1' onClick={addUser} type="button">AddUser</button>}
                <button className='AA2' type="button" onClick={clearUser}>RESET</button>
            </form>
            <hr />
            <table border="2" className='B123'>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Date Of Birth</th>
                        <th>Email ID</th>
                        <th>Mobile Number</th>
                        <th>EditUser</th>
                        <th>DeleteUser</th>
                    </tr>
                </thead>
                <tbody>
                    {AllUsers.map((userInfo, i) => {
                        return <tr key={i}>
                            <td>{userInfo.firstname}</td>
                            <td>{userInfo.lastname}</td>
                            <td>{userInfo.dateofbirth}</td>
                            <td>{userInfo.emailId}</td>
                            <td>{userInfo.mobileno}</td>
                            <td><button onClick={() => { edituser(userInfo) }}>Edit User </button></td>
                            <td><button onClick={() => { deleteuser(userInfo) }}>Delete User</button></td>
                        </tr>
                    })}

                </tbody>
            </table>
        </div>
    )
}

export default Forms17