import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
const Form = () => {
    const [person, setperson] = useState({
        name: "", username: "", email: "", password: "", confirm: "", message: ""
    })
    const [allpersons, setallpersons] = useState([])
    const [isedit, setisedit] = useState(false)
    const handleuser = (event) => {
        var inputname = event.target.name
        const newperson = { ...person }
        newperson[inputname] = event.target.value;
        setperson(newperson)
    }
    const getallpersons = () => {
        axios.get("http://localhost:3000/user").then((response) => {
            setallpersons(response.data)
        })
    }
    const clearperson = () => {
        setperson({ name: "", username: "", email: "", password: "", confirm: "", message: "", id: "" })
    }
    const adduser = () => {
        console.log(person)
        axios.post(" http://localhost:3000/user", person).then((response) => {
            console.log("user added")
            clearperson()
            getallpersons()
        })
    }
    useEffect(() => {
        getallpersons()
    }, [])
    const deleteuser = (persondetails) => {
        axios.delete(" http://localhost:3000/user/" + persondetails.id).then((response) => {
            getallpersons()
        })
    }
    const edituser = (personinfo) => {
        setisedit(true)
        setperson(personinfo)
    }
    const update = () => {
        axios.put("http://localhost:3000/user/" + person.id, person).then(() => {
            getallpersons()
            clearperson()
            setisedit(false)
        })
    }
    return (
        <div>
            <form>
                <label htmlFor="">Name</label>
                <input type="text" name="name" value={person.name} onChange={(event) => { handleuser(event) }} /><br />
                <label htmlFor="">Username</label>
                <input type="text" name="username" value={person.username} onChange={(event) => { handleuser(event) }} /><br />
                <label htmlFor="">Email</label>
                <input type="text" name="email" value={person.email} onChange={(event) => { handleuser(event) }} /><br />
                <label htmlFor="">Password</label>
                <input type="text" name="password" value={person.password} onChange={(event) => { handleuser(event) }} /><br />
                <label htmlFor="">Confirm Password</label>
                <input type="text" name="confirm" value={person.confirm} onChange={(event) => { handleuser(event) }} /><br />
                <label htmlFor="">Message</label>
                <input type="text" name="message" value={person.message} onChange={(event) => { handleuser(event) }} /><br />
                <input type="text" name="id" hidden />
                {isedit ? <button onClick={update} type="button">update</button> : <button onClick={adduser} type="button">send</button>}
            </form>
            <hr />
            <table border={1}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>User name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Confirm Password</th>
                        <th>Message</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allpersons.map((personinfo, i) => {
                            return <tr key={i}>
                                <td>{personinfo.name}</td>
                                <td>{personinfo.username}</td>
                                <td>{personinfo.email}</td>
                                <td>{personinfo.password}</td>
                                <td>{personinfo.confirm}</td>
                                <td>{personinfo.message}</td>
                                <td><button onClick={() => { edituser(personinfo) }}>edit</button></td>
                                <td><button onClick={() => { deleteuser(personinfo) }}>delete</button></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>

    )
}

export default Form