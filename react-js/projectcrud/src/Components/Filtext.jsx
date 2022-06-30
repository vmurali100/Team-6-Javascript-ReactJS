
import React,{useState} from 'react';
import axios from 'axios';
import { useEffect } from 'react';

const Filtext = () => {
    const [filtext, setFiltext] = useState({
        fname:"",lname:"",dateofbirth:"",email:"",mobile:"",id:""
    })
    const [filtinfo, setfiltinfo] = useState([])
    const [isedit, setIsedit] = useState(false)
    const handlefiltext=(event)=>{
       var filtname=event.target.name;
       var newfiltext={...filtext}
       newfiltext[filtname]=event.target.value
       setFiltext(newfiltext)
    }

    const getfiltinfo=()=>{
        axios.get("http://localhost:3000/filtext").then((response)=>{
            setfiltinfo(response.data)
            
        })
    }
    const clearfiltext=()=>{
        setFiltext({fname:"",lname:"",dateofbirth:"",email:"",mobile:""})
    }
    const addfiltext=()=>{
        console.log(filtext)
        axios.post("http://localhost:3000/filtext",filtext).then((response)=>{
            console.log("information added successfully")
            clearfiltext()
            getfiltinfo()
        })
    }
    useEffect(()=>{
        getfiltinfo()
        
    },[])
    const deleteuser=(filtext)=>{
       axios.delete("http://localhost:3000/filtext/"+filtext.id).then((response)=>{
        getfiltinfo()
        clearfiltext()
       })
    }
    const edituser=(filt)=>{
        setIsedit(true)
        setFiltext(filt)
        
    }
    const updatefiltext=()=>{
        axios.put("http://localhost:3000/filtext/"+filtext.id,filtext).then(()=>{
            getfiltinfo()
        clearfiltext()
        setIsedit(false) 
        })
    }
    return <div>
        <form >
            <label htmlFor="">FirstName :</label>
            <input type="text" name="fname" value={filtext.fname} onChange={(event)=>{handlefiltext(event)}}/>
            <label htmlFor="">Last Name :</label>
            <input type="text" name="lname" value={filtext.lname} onChange={(event)=>{handlefiltext(event)}}/>
            <label htmlFor="">Date Of Birth :</label>
            <input type="text" name="dateofbirth" value={filtext.dateofbirth}  onChange={(event)=>{handlefiltext(event)}}/>
            <label htmlFor="">Email Id :</label>
            <input type="text" name="email" value={filtext.email}  onChange={(event)=>{handlefiltext(event)}}/>
            <label htmlFor="">Mobile Number:</label>
            <input type="text" name="mobile" value={filtext.mobile}  onChange={(event)=>{handlefiltext(event)}}/>
            <input type="text" name="id" hidden />
            {isedit ? <button onClick={updatefiltext}>update</button>:<button onClick={addfiltext}>submit</button>}
            
        </form>
        <hr />
        <table border="1">
            <thead>
                <tr>
                    <th>fname</th>
                    <th>lname</th>
                    <th>dateofbirth</th>
                    <th>email</th>
                    <th>mobile</th>
                    <th>Edit</th>
                    <th>delete</th>
                </tr>
            </thead>
            <tbody>
                {filtinfo.map((filt,i)=>{
                    return <tr key={i}>
                        <td>{filt.fname}</td>
                        <td>{filt.lname}</td>
                        <td>{filt.dateofbirth}</td>
                        <td>{filt.email}</td>
                        <td>{filt.mobile}</td>
                        <td><button onClick={()=>{edituser(filt)}}>Edit user</button></td>
                        <td><button onClick={()=>{deleteuser(filt)}}>Delete user</button></td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>;
}



export default Filtext;