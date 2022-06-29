import axios from 'axios';
import React, { useEffect, useState } from 'react'

const CrudAssignment2 = () => {
    const [person, setperson] = useState({ FirstName: "", LastName: "", DateOfBirth: "", EmailId: "", MobileNumber: "", id: "" })
    const [AllUsers, setAllUsers] = useState([])
    const [Isedit, setIsedit] = useState(false)


    const handelchange = (event) => {
        var variableName = event.target.name;
        var newperson = { ...person };
        newperson[variableName] = event.target.value;
        setperson(newperson)
    }

    const getAllUsers = () => {
        axios.get("http://localhost:3000/Users3").then((response) => {
            setAllUsers(response.data)
        })
    }

    const clearuser = () => {
        setperson({ FirstName: "", LastName: "", DateOfBirth: "", EmailId: "", MobileNumber: "" })
    }

    const AddPerson = () => {
        console.log(person)
        axios.post(" http://localhost:3000/Users3", person).then((response) => {
            console.log("user Added Successfully")
            getAllUsers()
            clearuser()
        })
    }

    useEffect(() => {
        getAllUsers()
    }, [])

    //deletsuser

    const deleteuser = (persondetails) => {
        axios.delete(" http://localhost:3000/Users3/" + persondetails.id).then((response) => {
            getAllUsers()
        })
    }
    //Edituser

    const edituser = (userinfo) => {
        setIsedit(true)
       setperson(userinfo)
    }

    //Updateuser

    const UpdateUser =()=>{
        axios.put(" http://localhost:3000/Users3/"+person.id,person).then(()=>{
            getAllUsers()
            clearuser()
            setIsedit(false)
        })
    }
    return (
        <div>
            <form >
                <label htmlFor="">FirstName</label>
                <input type="text" name="FirstName" value={person.FirstName} onChange={(event) => { handelchange(event) }} /> <br />

                <label htmlFor="">LastName</label>
                <input type="text" name="LastName" value={person.LastName} onChange={(event) => { handelchange(event) }} /> <br />

                <label htmlFor="">DateOfBirth</label>
                <input type="text" name="DateOfBirth" value={person.DateOfBirth} onChange={(event) => { handelchange(event) }} /> <br />

                <label htmlFor="">EmailId</label>
                <input type="text" name='EmailId' value={person.EmailId} onChange={(event) => { handelchange(event) }} /> <br />

                <label htmlFor=""> MobileNumber</label>
                <input type="text " name='MobileNumber' value={person.MobileNumber} onChange={(event) => { handelchange(event) }} /> <br />

                <input type="text" name="id" hidden />
                {Isedit ? <button onClick={UpdateUser} type="button">UpdateUser</button> : <button onClick={AddPerson} type="button">Add Users</button>}
            </form>

            <table border="1">
                <thead>
                    <tr>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>DateOfBirth</th>
                        <th>EmailId</th>
                        <th>MobileNumber</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {AllUsers.map((userinfo, i) => {
                        return <tr key={i}>
                            <td>{userinfo.FirstName}</td>
                            <td>{userinfo.LastName}</td>
                            <td>{userinfo.DateOfBirth}</td>
                            <td>{userinfo.EmailId}</td>
                            <td>{userinfo.MobileNumber}</td>
                            <td><button onClick={() => { edituser(userinfo) }}>Edituser</button></td>
                            <td><button onClick={() => { deleteuser(userinfo) }}>DeleteUser</button></td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default CrudAssignment2