import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

const CrudAssignment4 = () => {
    const [person, setperson] = useState({ FirstName: "", LastName: "", DateOfBirth: "", EmailId: "", MobileNumber: "", id: "" })
    const [Allpersons, setAllpersons] = useState([])
    const [EditAll, setEditAll] = useState(false)


    const handelchange = (event) => {
        var variableName = event.target.name;
        var newperson = { ...person }
        newperson[variableName] = event.target.value
        setperson(newperson)
    }

    const getAllpersons = () => {
        axios.get("http://localhost:3000/Users4").then((response) => {
            setAllpersons(response.data)
        })
    }
    const clearpersons = () => {
        setperson({ FirstName: "", LastName: "", DateOfBirth: "", EmailId: "", MobileNumber: "" })
    }
    const Addperson = () => {
        console.log(person)
        axios.post(" http://localhost:3000/Users4", person).then((response) => {
            console.log("User added successfully ")
            getAllpersons()
            clearpersons()

        })
    }

    useEffect(() => {
        getAllpersons()
    }, [])

    const deleteuser =(persondetails)=>{
        axios.delete(" http://localhost:3000/Users4/"+persondetails.id).then((response)=>{
            getAllpersons()
        })
    }

    //edituser
    const edituser = (personinfo)=>{
        setperson(personinfo)
        setEditAll(true)
    }

    //updatepersons

    const updateUser = ()=>{
        axios.put("http://localhost:3000/Users4/" +person.id,person).then(()=>{
            getAllpersons()
            clearpersons()
            setEditAll(false)
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
                <input type="text" name="EmailId" value={person.EmailId} onChange={(event) => { handelchange(event) }} /> <br />

                <label htmlFor="">MobileNumber</label>
                <input type="text" name='MobileNumber' value={person.MobileNumber} onChange={(event) => { handelchange(event) }} /> <br />

                <input type="text" name="id" hidden />
                {EditAll ? <button onClick={updateUser} type="button">updateUser</button> : <button onClick={Addperson} type="button">AddUsers</button>}
                
                

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
                    {Allpersons.map((personinfo, i) => {
                        return <tr key={i}>
                            <td>{personinfo.FirstName}</td>
                            <td>{personinfo.LastName}</td>
                            <td>{personinfo.DateOfBirth}</td>
                            <td>{personinfo.EmailId}</td>
                            <td>{personinfo.MobileNumber}</td>
                            <td><button  onClick={() => { edituser(personinfo) }}>EditPerson</button></td>
                            <td><button onClick={() => { deleteuser(personinfo) }}>DeletePerson</button></td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default CrudAssignment4