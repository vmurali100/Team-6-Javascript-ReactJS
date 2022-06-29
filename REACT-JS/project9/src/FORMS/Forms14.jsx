import React, { useState, useEffect } from 'react'
import axios from "axios"

const Forms14 = () => {
    const [user, setuser] = useState({
        street:"",
        city:"",
        state:"",
        zipcode:"",
        country:""
    })
    const [AllUsers, setAllUsers] = useState([])
    const [isEdit, setisEdit] = useState(false)
    const handleChange = (event) => {
        var inputName = event.target.name
        const newUser = { ...user }
        newUser[inputName] = event.target.value
        setuser(newUser)
    }
    const getAllUsers = () => {
        axios.get("http://localhost:3000/Forms14").then((response) => {
            console.log(response.data)
            setAllUsers(response.data)

        })
    }
    const addUser = () => {
        console.log(user)
        axios.post("http://localhost:3000/Forms14", user).then((response) => {
            console.log("User Added Successfully")
            clearUser()
            getAllUsers()
        })
    }
    const clearUser = () => {
        setuser({ street: "", city: "", state: "", zipcode: "", country: "" })
    }
    useEffect(() => {
        getAllUsers()
    }, [])
    const deleteuser = (userDetails) => {
        axios.delete("http://localhost:3000/Forms14/" + userDetails.id).then((response) => {
            getAllUsers()

        })
    }
    const edituser = (userInfo) => {
        setisEdit(true)
        setuser(userInfo)


    }
    const updateuser = () => {
        axios.put("http://localhost:3000/Forms14/" + user.id, user).then(() => {
            getAllUsers();
            clearUser();
            setisEdit(false)
        })
    }
    return (
        <div id="userInfo">
            <p>Forms14</p>
            <form>
                <label htmlFor="">street:</label>
                <input type="text" name="street" value={user.street} onChange={(event) => { handleChange(event) }} /> <br />
                <label htmlFor="">city:</label>
                <input type="text" name="city" value={user.city} onChange={(event) => { handleChange(event) }} /> <br />
                <label htmlFor="">state</label>
                <input type="text" name="state" value={user.dateofbirth} onChange={(event) => { handleChange(event) }} /> <br />
                <label htmlFor="">zipcode</label>
                <input type="text" name="zipcode" value={user.zipcode} onChange={(event) => { handleChange(event) }} /> <br />
                <label htmlFor="">country</label>
                <input type="text" name="country" value={user.country} onChange={(event) => { handleChange(event) }} />
                <input type="text" name="id" hidden />
                {isEdit ? <button onClick={updateuser} type="button">UpdateUser</button> : <button onClick={addUser} type="button">AddUser</button>}


            </form>
            <hr />
            <table border="2">
                <thead>
                    <tr>
                        <th>street</th>
                        <th>city</th>
                        <th>state</th>
                        <th>zipcode</th>
                        <th>country</th>

                        <th>EditUser</th>
                        <th>DeleteUser</th>
                    </tr>
                </thead>
                <tbody>
                    {AllUsers.map((userInfo, i) => {
                        return <tr key={i}>
                            <td>{userInfo.street}</td>
                            <td>{userInfo.city}</td>
                            <td>{userInfo.state}</td>
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

export default Forms14