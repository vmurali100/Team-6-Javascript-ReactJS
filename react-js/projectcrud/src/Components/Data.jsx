import React,{useState} from 'react';
import axios from 'axios';
import { useEffect } from 'react';


const Data = () => {
    const [info, setInfo] = useState({
        name:"",username:"",email:"",password:"",confirmpassword:"",message:"",id:""
    })
    const [allinfo, setAllinfo] = useState([])
    const [isedit, setIsedit] = useState(false)
    const handledata=(event)=>{
         var dataname=event.target.name;
         var newdatas={...info}
         newdatas[dataname]=event.target.value;
         setInfo(newdatas)
    }
    const getallinfo=()=>{
        axios.get("http://localhost:3000/info").then((response)=>{
            setAllinfo(response.data)
            
        })
    }
    const clearinfo=()=>{
        setInfo({ name:"",username:"",email:"",password:"",confirmpassword:"",message:"" })
    }
    const adddata=()=>{
        console.log(info)
        axios.post("http://localhost:3000/info",info).then((response)=>{
            console.log("data added successfully")
            clearinfo()
            getallinfo()
        })
    }
    useEffect(()=>{
        getallinfo()
    },[])
    const deleteuser=(info)=>{
       axios.delete("http://localhost:3000/info/"+info.id).then((response)=>{
        getallinfo();
        clearinfo()
       })
    }
    const edituser=(infos)=>{
        setIsedit(true)
        setInfo(infos)
    }
    const updatedata=()=>{
        axios.put("http://localhost:3000/info/"+info.id,info).then(()=>{
            getallinfo();
            clearinfo();
            setIsedit(false)
        })
    }
    return <div>
        <form >
                <label htmlFor="">Name</label><br /><br />
                <input type="text" name="name" value={info.name} onChange={(event)=>{handledata(event)}}/><br /><br />
                <label htmlFor="">Username</label><br /><br />
                <input type="text" name="username" value={info.username} onChange={(event)=>{handledata(event)}}/><br /><br />
                <label htmlFor="">Email</label><br /><br />
                <input type="text" name="email"value={info.email} onChange={(event)=>{handledata(event)}}/><br /><br />
                <label htmlFor="">password</label><br /><br />
                <input type="text" name="password" value={info.password} onChange={(event)=>{handledata(event)}}/><br /><br />
                <label htmlFor="">Confirm password</label><br /><br />
                <input type="text" name="confirmpassword" value={info.confirmpassword} onChange={(event)=>{handledata(event)}}/><br /><br />
                <label htmlFor="">message</label><br /><br />
                <input type="text" name="message" value={info.message} onChange={(event)=>{handledata(event)}}/><br /><br />
                <input type="text" name="id" hidden />
                {isedit ? <button type="button" onClick={updatedata}>update</button>:<button type="button" onClick={adddata}>OK</button>}
                
               
                
                <hr />
                <table border="1">
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>username</th>
                            <th>email</th>
                            <th>password</th>
                            <th>confirmpassword</th>
                            <th>message</th>
                            <th>Edit data</th>
                            <th>Delete data</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allinfo.map((infos,i)=>{
                            return <tr key={i}>
                                <td>{infos.name}</td>
                                <td>{infos.username}</td>
                                <td>{infos.email}</td>
                                <td>{infos.password}</td>
                                <td>{infos.confirmpassword}</td>
                                <td>{infos.message}</td>
                                <td><button type="button" onClick={()=>{edituser(infos)}}>Edit data</button></td>
                                <td><button type="button" onClick={()=>{deleteuser(infos)}}>Delete user</button></td>
                                
                            </tr>
                        })}
                    </tbody>
                </table>
            </form>
    </div>;
}


export default Data;



    
       
           
       