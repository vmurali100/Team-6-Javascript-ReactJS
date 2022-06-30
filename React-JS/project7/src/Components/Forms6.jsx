import React, { useState, useEffect } from 'react'
import axios from "axios"

const Forms6 = () => {
    const [person, setperson] = useState({
        university: "",
        institute: "",
        branch: "",
        degree: "",
        averagecpi: "",
        experience: "",
        websiteblog: "",
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
            university: "",
            institute: "",
            branch: "",
            degree: "",
            averagecpi: "",
            experience: "",
            websiteblog: ""
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
        <div className="userInfo6">
            <form>
                <fieldset>
                    <legend>Registration Details</legend>
                    <label htmlFor="">University :</label>
                    <input type="text" name="university" className='a1' value={person.university} onChange={(event) => { HandleChange(event) }} /> <br />
                    <label htmlFor="">Institute :</label>
                    <input type="text" name="institute" className='a2' value={person.institute} onChange={(event) => { HandleChange(event) }} /> <br />
                    <label htmlFor="">Branch :</label>
                    <select name="branch" className='a3' value={person.branch} onChange={(event) => { HandleChange(event) }}>
                        <option value="">---Select---</option>
                        <option value="B.A">B.A</option>
                        <option value="B.Com">B.Com</option>
                        <option value="B.Com(Computers)">B.Com(Computers)</option>
                        <option value="B.Sc(MPC)">B.Sc(MPC)</option>
                        <option value="B.Sc(MPCS)">B.Sc(MPCS)</option>
                    </select> <br />
                    <label htmlFor="">Degree :</label>
                    <select name="degree" className='a4' value={person.degree} onChange={(event) => { HandleChange(event) }}>
                        <option value="">---Select---</option>
                        <option value="1st Year">1st Year</option>
                        <option value="2nd Year">2nd Year</option>
                        <option value="3rd Year">3rd Year</option>
                        <option value="4th Year">4th Year</option>
                    </select>
                    <input type="radio" name="degree" className='a5' value={person.degree} onChange={(event) => { HandleChange(event) }} />Pursuing
                    <input type="radio" name="degree" className='a6' value={person.degree} onChange={(event) => { HandleChange(event) }} />Completed <br />
                    <label htmlFor="">Average CPI :</label>
                    <input type="number" name='averagecpi' className='a7' value={person.averagecpi} onChange={(event) => { HandleChange(event) }}  ></input>
                    <label htmlFor="">Upto</label>
                    <input type="number" name='averagecpi' className='a8' value={person.averagecpi} onChange={(event) => { HandleChange(event) }}  ></input>
                    <label htmlFor="">Th Semester</label> <br />
                    <label htmlFor="">Experience:</label>
                    <input type="number" name='experience' className='a9' value={person.experience} onChange={(event) => { HandleChange(event) }}></input>
                    <label htmlFor="">Years</label> <br />
                    <label htmlFor="">Your Website Or Blog:</label>
                    <input type="text" name='websiteblog' className='a10' placeholder="http://" value={person.websiteblog} onChange={(event) => { HandleChange(event) }}></input> <br />
                </fieldset>
                <input type="text" name="id" hidden />
                {isEdit ? <button className='s1' onClick={updateuser} type="button">UpdateUser</button> : <button className='s1' onClick={addUser} type="button">AddUser</button>}
            </form>
            <hr />
            <table border="2">
                <thead>
                    <tr>
                        <th>University</th>
                        <th>Institute</th>
                        <th>Branch</th>
                        <th>Degree</th>
                        <th>Average CPI</th>
                        <th>Experience</th>
                        <th>Your Website Or Blog</th>
                        <th>EditUser</th>
                        <th>DeleteUser</th>
                    </tr>
                </thead>
                <tbody>
                    {AllUsers.map((userInfo, i) => {
                        return <tr key={i}>
                            <td>{userInfo.university}</td>
                            {/* <td>{userInfo.city},{userInfo.state}</td> */}
                            <td>{userInfo.institute}</td>
                            <td>{userInfo.branch}</td>
                            <td>{userInfo.degree}</td>
                            <td>{userInfo.averagecpi}</td>
                            <td>{userInfo.experience}</td>
                            <td>{userInfo.websiteblog}</td>
                            <td><button onClick={() => { edituser(userInfo) }}>Edit User </button></td>
                            <td><button onClick={() => { deleteuser(userInfo) }}>Delete User</button></td>
                        </tr>
                    })}

                </tbody>
            </table>
        </div>
    )
}

export default Forms6