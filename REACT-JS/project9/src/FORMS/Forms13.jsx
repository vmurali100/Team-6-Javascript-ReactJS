import React, { useState, useEffect } from 'react'
import axios from "axios"

const Forms13 = () => {
    const [user, setuser] = useState({
        firstname: "",
        lastname: "",
        dateofbirth: "",
        emailId: "",
        mobileno: ""
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
        axios.get("http://localhost:3000/Form13").then((response) => {
            console.log(response.data)
            setAllUsers(response.data)

        })
    }
    const addUser = () => {
        console.log(user)
        axios.post("http://localhost:3000/Form13", user).then((response) => {
            console.log("User Added Successfully")
            clearUser()
            getAllUsers()
        })
    }
    const clearUser = () => {
        setuser({ firstname: "", lastname: "", dateofbirth: "", emailId: "", mobileno: "" })
    }
    useEffect(() => {
        getAllUsers()
    }, [])
    const deleteuser = (userDetails) => {
        axios.delete("http://localhost:3000/Form13/" + userDetails.id).then((response) => {
            getAllUsers()

        })
    }
    const edituser = (userInfo) => {
        setisEdit(true)
        setuser(userInfo)


    }
    const updateuser = () => {
        axios.put("http://localhost:3000/Form13/" + user.id, user).then(() => {
            getAllUsers();
            clearUser();
            setisEdit(false)
        })
    }
    return (
        <div id="userInfo">
            <p>Forms13</p>
            <form>
                <label htmlFor="">firstname:</label>
                <input type="text" name="firstname" value={user.firstname} onChange={(event) => { handleChange(event) }} /> <br />
                <label htmlFor="">lastname:</label>
                <input type="text" name="lastname" value={user.lastname} onChange={(event) => { handleChange(event) }} /> <br />
                <label htmlFor="">dateofbirth</label>
                <input type="text" name="dateofbirth" value={user.dateofbirth} onChange={(event) => { handleChange(event) }} /> <br />
                <label htmlFor="">emailId</label>
                <input type="text" name="emailId" value={user.emailId} onChange={(event) => { handleChange(event) }} /> <br />
                <label htmlFor="">mobileno</label>
                <input type="text" name="mobileno" value={user.mobileno} onChange={(event) => { handleChange(event) }} />
                <input type="text" name="id" hidden />
                {isEdit ? <button onClick={updateuser} type="button">UpdateUser</button> : <button onClick={addUser} type="button">AddUser</button>}


            </form>
            <hr />
            <table border="2">
                <thead>
                    <tr>
                        <th>firstname</th>
                        <th>lastname</th>
                        <th>dateofbirth</th>
                        <th>emailId</th>
                        <th>mobileno</th>

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

export default Forms13