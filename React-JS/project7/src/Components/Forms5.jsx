import React, { useState, useEffect } from 'react'
import axios from "axios"

const Forms5 = () => {
    const [person, setperson] = useState({
        street: "",
        city: "",
        state: "",
        zipcode: "",
        country: "",
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
        axios.get("http://localhost:3000/Form5").then((response) => {
            console.log(response.data)
            setAllUsers(response.data)

        })
    }
    const addUser = () => {
        console.log(person)
        axios.post("http://localhost:3000/Form5/", person).then((response) => {
            console.log("User Added Successfully")
            clearUser()
            getAllUsers()
        })
    }
    const clearUser = () => {
        setperson({
            street: "",
            city: "",
            state: "",
            zipcode: "",
            country: ""
        })
    }
    useEffect(() => {
        getAllUsers()
    }, [])
    const deleteuser = (userDetails) => {
        axios.delete("http://localhost:3000/Form5/" + userDetails.id).then((response) => {
            getAllUsers()

        })
    }
    const edituser = (userInfo) => {
        setisEdit(true)
        setperson(userInfo)


    }
    const updateuser = () => {
        axios.put("http://localhost:3000/Form5/" + person.id, person).then(() => {
            getAllUsers();
            clearUser();
            setisEdit(false)
        })
    }
    return (
        <div class="userInfo5">
            <h1>Address</h1>
            <hr />
            <form className='Amv1'>
                <label htmlFor="">Street :</label>
                <input type="text" name="street" className='F1' value={person.street} onChange={(event) => { HandleChange(event) }} /> <br />
                <input type="text" name="street" className='F2' value={person.street} onChange={(event) => { HandleChange(event) }} /> <br />
                <label htmlFor="">City, State :</label>
                <input type="text" name="city" className='F3' value={person.city} onChange={(event) => { HandleChange(event) }} />
                <input type="text" name="state" className='F4' value={person.state} onChange={(event) => { HandleChange(event) }} /> <br />
                <label htmlFor="">Zip Code :</label>
                <input type="text" name="zipcode" className='F5' value={person.zipcode} onChange={(event) => { HandleChange(event) }} /> <br />
                <label htmlFor="">Country :</label>
                <input type="text" name="country" className='F6' value={person.country} onChange={(event) => { HandleChange(event) }} /> <br />
                <input type="text" name="id" hidden />
                {isEdit ? <button className='F7' onClick={updateuser} type="button">UpdateUser</button> : <button className='F7' onClick={addUser} type="button">AddUser</button>}
                <button className='F8' type='button' onClick={clearUser}>Cancel</button>
            </form>
            <hr />
            <table border="2" className='C123'>
                <thead>
                    <tr>
                        <th>Street</th>
                        <th>City, State</th>
                        <th>Zip Code</th>
                        <th>Country</th>
                        <th>EditUser</th>
                        <th>DeleteUser</th>
                    </tr>
                </thead>
                <tbody>
                    {AllUsers.map((userInfo, i) => {
                        return <tr key={i}>
                            <td>{userInfo.street}</td>
                            <td>{userInfo.city},{userInfo.state}</td>
                            {/* <td>{userInfo.state}</td> */}
                            <td>{userInfo.zipcode}</td>
                            <td>{userInfo.country}</td>
                            <td><button onClick={() => { edituser(userInfo) }}>Edit User </button></td>
                            <td><button onClick={() => { deleteuser(userInfo) }}>Delete User</button></td>
                        </tr>
                    })}

                </tbody>
            </table>
        </div>
    )
}

export default Forms5