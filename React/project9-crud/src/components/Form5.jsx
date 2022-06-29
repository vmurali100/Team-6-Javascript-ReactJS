import axios from 'axios'
import React,{useState} from 'react'
import { useEffect } from 'react'

export const Form5 = () => {
    const [user, setuser] = useState({
        university:"",institute:"",branch:"",degree:"",average:"",experience:"",website:""
    })
    const [allusers, setallusers] = useState([])
    const [isEdit, setisEdit] = useState(false)
    const handleChange=(event)=>{
        var inputName=event.target.name
        var newUser={...user}
        newUser[inputName]=event.target.value
        setuser(newUser)
    }
    const addUser=()=>{
        console.log(user)
        axios.post("http://localhost:3000/form5",user).then((response)=>{
            console.log("user added successfully")
            getallusers()
            clearform()
        })
    }
    const getallusers=()=>{
        axios.get("http://localhost:3000/form5").then((response)=>{
            setallusers(response.data)
        })
    }
    const clearform=()=>{
        setuser({ username:"",password:"",email:"",dateofBirth:""})
    }
    useEffect(()=>{
        getallusers()
    },[])
    const deleteuser=(data)=>{
        axios.delete("http://localhost:3000/form5/"+data.id).then((response)=>{
            getallusers()
        })
    }
    const edituser=(data)=>{
        setuser(data)
        setisEdit(true)
    }
    const updateuser=()=>{
        axios.put("http://localhost:3000/form5/"+user.id,user).then(()=>{
            getallusers() 
            setisEdit(false)
            clearform()
        })
    }
    return (
        <div>
            <form >
                <label htmlFor="university">University</label>
                <input type="text" name="university" value={user.university} onChange={(event) => { handleChange(event) }} /><br />

                <label htmlFor="institute">Institute</label>
                <input type="institute" name="institute" value={user.institute} onChange={(event) => { handleChange(event) }} /><br />

                <label htmlFor="branch">Branch</label>
                <input type="text" name="branch" value={user.branch} onChange={(event) => { handleChange(event) }} /><br />

                <label htmlFor="degree">Degree</label>
                <input type="text" name="degree" value={user.degree} onChange={(event) => { handleChange(event) }}/><br/>

                <label htmlFor="average">Average</label>
                <input type="text" name="average" value={user.average} onChange={(event) => { handleChange(event) }}/><br/>
                <label htmlFor="experience">Experience</label>
                <input type="text" name="experience" value={user.experience} onChange={(event) => { handleChange(event) }}/><br/>
                <label htmlFor="website">Website</label>
                <input type="text" name="website" value={user.website} onChange={(event) => { handleChange(event) }}/><br/>
              
              {isEdit ? <button onClick={updateuser}>update user</button> :   <button onClick={addUser} type="button">add user</button>}
             
             
            </form>
            <hr />
        <table border={1}>
            <thead>
                <tr>
                    <th>university</th>
                    <th>Institute</th>
                    <th>Branch</th>
                    <th>Degree</th>
                    <th>Average</th>
                    <th>Experience</th>
                    <th>Website</th>
                    <th>edit user</th>
                    <th>delete user</th>
                    
                </tr>
            </thead>
            <tbody>
                {allusers.map((data,i)=>{
                    return <tr key={i}>
                        <td>{data.university}</td>
                        <td>{data.institute}</td>
                        <td>{data.branch}</td>
                        <td>{data.degree}</td>
                        <td>{data.average}</td>
                        <td>{data.experience}</td>
                        <td>{data.website}</td>
                        <td><button onClick={()=>{edituser(data)}}>edit user</button></td>
                        <td onClick={()=>{deleteuser(data)}}><button>delete  user</button></td>
                    </tr>
                })}
            </tbody>
        </table>
        </div>
    )
}
