import React,{useState} from 'react';
import axios from 'axios'
import { useEffect } from 'react';

const Information = () => {
    const [information, setInformation] = useState({fname:"",lname:"",id:""})
    const [info, setInfo] = useState([])
    const [isedit, setIsedit] = useState(false)
    const handleinformation=(event)=>{
        var infoname=event.target.name
        var newinformation={...information}
        newinformation[infoname]=event.target.value
        setInformation(newinformation)
    }
    const getallinformation=()=>{
        axios.get("http://localhost:3000/information").then((response)=>{
            setInfo(response.data)
        })
    }
    const clearinfo=()=>{
        setInformation({fname:"",lname:""})
    }
    const adduser=()=>{
        console.log(information)
        axios.post("http://localhost:3000/information",information).then((response)=>{
              console.log("information added successfully")
              clearinfo()
              getallinformation() 
        })
    }
    useEffect(()=>{
        getallinformation()
    },[])
    const deleteuser=(information)=>{
        axios.delete("http://localhost:3000/information/"+information.id).then((response)=>{
            getallinformation() ;
            clearinfo();

        })
    }
    const edituser=(informa)=>{
        setIsedit(true)
        setInformation(informa)
       
    }
    const updateuser=()=>{
        axios.put("http://localhost:3000/information/"+information.id,information).then(()=>{
            getallinformation() ;
            clearinfo();
            setIsedit(false)

        })
    }
    return <div>
         <form >
            <label htmlFor="">First Name</label>
            <input type="text" name="fname" value={information.fname} onChange={(event)=>{handleinformation(event)}}/>
            <label htmlFor="">Last Name</label>
            <input type="text" name="lname" value={information.lname} onChange={(event)=>{handleinformation(event)}}/>
            <input type="text" name="id" hidden />
            {isedit ? <button onClick={updateuser} type="button">Update user</button>: <button onClick={adduser} type="button">Add User</button>}
            
           
         </form>
         <hr />
         <table border="1">
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Edit User</th>
                    <th>Delete User</th>
                </tr>
            </thead>
            <tbody>
                {info.map((informa,i)=>{
                    return <tr key={i}>
                        <td>{informa.fname}</td>
                        <td>{informa.lname}</td>
                        <td><button onClick={()=>{edituser(informa)}}>Edit User</button></td>
                        <td><button onClick={()=>{deleteuser(informa)}}>Delete User</button></td>
                    </tr>
                })}
            </tbody>
         </table>
    </div>;
}


export default Information