import React,{useState} from 'react'
import axios from 'axios'
import { useEffect } from 'react'


const CurdAssigment6 = () => {
    const [Users, setUsers] = useState({ University:"",Institute:"",Branch:"",Degree:"",Avarage:"",Experience:"",YourWebsiteorBlog:"",id:""})
    const [Allusers, setAllusers] = useState([])
    const [EditAllUsers, setEditAllUsers] = useState(false)

       
    const eventhandle = (event)=>{
       var variableName = event.target.name;
       var newUsers={...Users}
       newUsers[variableName]=event.target.value;
       setUsers(newUsers)
    }

    const getallusers =()=>{
        axios.get("http://localhost:3000/Users6").then((response)=>{
            setAllusers(response.data)
        })
    }

    const clearusers = () => {
        setUsers({ University:"",Institute:"",Branch:"",Degree:"",Avarage:"",Experience:"",YourWebsiteorBlog:""})
    }

    const AddUsers = ()=>{
        console.log(Users)
        axios.post("http://localhost:3000/Users6" ,Users).then((response)=>{
            console.log("Users Added Successfully")
            getallusers()
            clearusers()
        })
    }
    useEffect(()=>{
        getallusers()
    },[])

    const deleteuser = (usersdetails)=>{
        axios.delete("http://localhost:3000/Users6/"+usersdetails.id).then((response)=>{
            getallusers()
        })
    }

    const edituser =(usersinfo)=>{
          setUsers(usersinfo)
          setEditAllUsers(true)
    }

    const UpdateUsers =()=>{
        axios.put("http://localhost:3000/Users6/"+Users.id,Users).then(()=>{
            getallusers()
            clearusers()
            setEditAllUsers(false)            
        })
    }
  return (
    <div>
        <form >
        <fieldset>
        <legend>Registration Details</legend>
       <label htmlFor="">University</label>
        <input type="text" name='University' value={Users.University} onChange={(event)=>{eventhandle(event)}}/> <br />

        <label htmlFor="">Institute</label>
        <input type="text" name='Institute' value={Users.Institute} onChange={(event)=>{eventhandle(event)}} /> <br />

        <label htmlFor="">Branch</label>
        <input type="text" name='Branch' value={Users.Branch} onChange={(event)=>{eventhandle(event)}}/> <br />

        <label htmlFor="">Degree</label>
        <input type="text" name='Degree'  value={Users.Degree} onChange={(event)=>{eventhandle(event)}}/>
        <input type="radio" name="Degree"   value={Users.Degree} onChange={(event)=>{eventhandle(event)}}/>
        <input type="radio" name="Degree"   value={Users.Degree} onChange={(event)=>{eventhandle(event)}}/> <br />

        <label htmlFor="">Avarage</label>
        <input type="text" name='Avarage' value={Users.Avarage} onChange={(event)=>{eventhandle(event)}}/> <br />

        <label htmlFor="">Experience</label>
        <input type="text" name='Experience' value={Users.Experience} onChange={(event)=>{eventhandle(event)}}/> <br />

        <label htmlFor="">Your Website or Blog</label>
        <input type="text" name='YourWebsiteorBlog' value={Users.YourWebsiteorBlog} onChange={(event)=>{eventhandle(event)}}/> <br />

        <input type="text" name="id" hidden />
        {EditAllUsers ? <button onClick={UpdateUsers} type="button" >UpdateUsers</button> :<button onClick={AddUsers} type="button" >AddUsers</button>}
        
        
       </fieldset>
        </form>

        <table border="1">
            <thead>
                <tr>
                    <th>University</th>
                    <th>Institute</th>
                    <th>Branch</th>
                    <th>Degree</th>
                    <th>Avarage</th>
                    <th>Experience</th>
                    <th>Your Website or Blog</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
     {Allusers.map((usersinfo,i)=>{
        return <tr key={i}>
            <td>{usersinfo.University}</td>
            <td>{usersinfo.Institute}</td>
            <td>{usersinfo.Branch}</td>
            <td>{usersinfo.Degree}</td>
            <td>{usersinfo.Avarage}</td>
            <td>{usersinfo.Experience}</td>
            <td>{usersinfo.YourWebsiteorBlog}</td>
            <td><button onClick={()=>{edituser(usersinfo)}}>Edit</button></td>
            <td><button onClick={()=>{deleteuser(usersinfo)}}>Delete</button></td>
        </tr>
     })}
            </tbody>
        </table>
    </div>
  )
}

export default CurdAssigment6