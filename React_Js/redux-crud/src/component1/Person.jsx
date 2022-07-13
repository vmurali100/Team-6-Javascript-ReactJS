import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPerson, updatePerson } from './personSlice'

const Person = () => {
    const [person, setperson] = useState({
        fname: "",
        lname: "",
        dob: "",
        email: "",
        mobile: ""
    })
    const personObj=useSelector((state)=>state.usersInfo)
    useEffect(()=>{
        if(personObj.isEdit){
            setperson(personObj.users[personObj.editIndex])
        }
    },[personObj])
    console.log(personObj)
    const dispatch = useDispatch();
    const handleChange = (e) => {
        let newperson = { ...person };
        let fieldName = e.target.name
        newperson[fieldName] = e.target.value
        setperson(newperson)
    }
    const handleSubmit = () => {
        console.log(person)
        dispatch(addPerson(person))
        handleClear();
    }
    const handleClear = () => {
        setperson({
            fname: "",
            lname: "",
            dob: "",
            email: "",
            mobile: ""
        })
    }
    const handleUpdateperson=()=>{
        let updateObj={
            data:person,
            index:personObj.editIndex,
            isEdit:false
        }
        dispatch(updatePerson(updateObj))
    }
    return (
        <div>
            <form>
                <label htmlFor="fname">First Name :</label>
                <input type="text" name="fname" onChange={(e) => { handleChange(e) }} /><br />
                <label htmlFor="lname">Last Name :</label>
                <input type="text" name="lname" onChange={(e) => { handleChange(e) }} /><br />
                <label htmlFor="dob">Date of Birth :</label>
                <input type="text" name="dob" onChange={(e) => { handleChange(e) }} /><br />
                <label htmlFor="email">Email :</label>
                <input type="text" name="email" onChange={(e) => { handleChange(e) }} /><br />
                <label htmlFor="mobile">Mobile :</label>
                <input type="text" name="mobile" onChange={(e) => { handleChange(e) }} /><br />
                <button type='button' onClick={personObj. isEdit  ? handleUpdateperson : handleSubmit}>{personObj.isEdit ? 'Update person':'Edit person'}</button>

            </form>
        </div>
    )
}

export default Person
