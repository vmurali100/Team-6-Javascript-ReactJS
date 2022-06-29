import axios from 'axios'
import React,{useState} from 'react'
import { useEffect } from 'react'

const Form3 = () => {
    const [person, setperson] = useState({username:"",password:"",email:"",date:""})
    const [allperson, setallperson] = useState([])
    const [isedit, setisedit] = useState(false)
    const handlechange=(event)=>{
        var inputname=event.target.name
        const newperson={...person}
        newperson[inputname]=event.target.value
        setperson(newperson)
    }
    const getallpersons=()=>{
    axios.get(" http://localhost:3000/person").then((response)=>{
        setallperson(response.data)
    })
    }

    const clearperson=()=>{
        setperson({username:"",password:"",email:"",date:"",id:""})
    }

    const adduser=()=>{
        console.log(person)
        axios.post(" http://localhost:3000/person",person).then((response)=>{
            console.log("user added successfully")
            clearperson()
            getallpersons()
        })
    }

     useEffect(()=>{
        getallpersons()
    },[])

   
    const deleteuser=(persondetails)=>{
        axios.delete(" http://localhost:3000/person/"+persondetails.id).then((response)=>{
        getallpersons()
        })
    }

    const edituser=(personinfo)=>{
        setisedit(true)
        setperson(personinfo)
        }

    const update=()=>{
        axios.put(" http://localhost:3000/person/"+person.id,person).then(()=>{
        getallpersons()
        clearperson()
        setisedit(false)
        })
    }
  return (
    <div>
        <form>
            <label htmlFor="">Username</label>
            <input type="text" name="username" id="" value={person.username} onChange={(event)=>{handlechange(event)}}/><br/>
            <label htmlFor="">Password</label>
            <input type="text" name="password" id="" value={person.password} onChange={(event)=>{handlechange(event)}}/><br/>
            <label htmlFor="">Email address</label>
            <input type="text" name="email" id="" value={person.email} onChange={(event)=>{handlechange(event)}}/><br/>
            <label htmlFor="">Date of birth</label>
            <input type="text" name="date" id="" value={person.date} onChange={(event)=>{handlechange(event)}}/><br/>
            <input type="text" name="id" hidden/>
            {isedit? <button onClick={update} type="button">Update </button>: <button onClick={adduser} type="button">Submit</button>}
        </form>
        <hr />
        <table border={1}>
            <thead>
                <tr>
                    <th>Username</th>
                    <th>Password</th>
                    <th>Email address</th>
                    <th>Date d birth</th>
                    <th>edit</th>
                    <th>delete</th>
                </tr>
            </thead>
            <tbody>
                {allperson.map((personinfo,i)=>{
                    return <tr key={i}>
                        <td>{personinfo.username}</td>
                        <td>{personinfo.password}</td>
                        <td>{personinfo.email}</td>
                        <td>{personinfo.date}</td>
                        <td><button onClick={()=>{edituser(personinfo)}}>edit</button></td>
                        <td><button onClick={()=>{deleteuser(personinfo)}}>delete</button></td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
  )
}

export default Form3