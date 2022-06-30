import axios from 'axios';
import React,{useState} from 'react';
import { useEffect } from 'react';

const Comment = () => {
    const [comment, setcomment] = useState({
        university:"",institute:"",branch:"",averagecpi:"",upto:"",experience:"",yourblog:"",id:""
    })
    const [cominfo, setcominfo] = useState([])
    const [isedit, setisedit] = useState(false)
    const handlecomment=(event)=>{
        var comname=event.target.name
        var newcomment={...comment}
        newcomment[comname]=event.target.value;
        setcomment(newcomment)
    }
    const clearcomment=()=>{
        setcomment({ university:"",institute:"",branch:"",averagecpi:"",upto:"",experience:"",yourblog:""}) 
    }
    const getcomments=()=>{
        axios.get("http://localhost:3000/comes").then((response)=>{
            setcominfo(response.data)
        })
    }
    const addcomment=()=>{
        console.log(comment)
        axios.post("http://localhost:3000/comes",comment).then((response)=>{
            console.log("added successful")
            getcomments()
            clearcomment()
        })
    }
    useEffect(()=>{
        getcomments()
    })
   const deletecomment=(comment)=>{
    axios.delete("http://localhost:3000/comes/"+comment.id).then((response)=>{
        getcomments()
        clearcomment()
    })

    }
    const editcomment=(inf)=>{
       setcomment(inf)
       setisedit(true)
    }
    const updatecomment=()=>{
        axios.put("http://localhost:3000/comes/"+comment.id,comment).then(()=>{
            getcomments()
        clearcomment()
        setisedit(false)
        })
    }
    return <div>
        <form >
            <label htmlFor="">University : </label>
            <input type="text" name="university" value={comment.university} onChange={(event)=>{handlecomment(event)}}/>
            <label htmlFor="">Institute : </label>
            <input type="text" name="institute" value={comment.institute} onChange={(event)=>{handlecomment(event)}} />
            <label htmlFor="">Branch : </label>
            <input type="text" name="branch" value={comment.branch} onChange={(event)=>{handlecomment(event)}}/>
            <label htmlFor="">Average CPI</label>
            <input type="text" name="averagecpi" value={comment.averagecpi} onChange={(event)=>{handlecomment(event)}}/>
            <label htmlFor="">Upto</label>
            <input type="text" name="upto" value={comment.upto} onChange={(event)=>{handlecomment(event)}}/>
            <label htmlFor="">Experience :</label>
            <input type="text" name="experience" value={comment.experience} onChange={(event)=>{handlecomment(event)}} />
            <label htmlFor="">your Blog :</label>
            <input type="text" name="yourblog" value={comment.yourblog} onChange={(event)=>{handlecomment(event)}}/>
            <input type="text" name="id" hidden />
            {isedit ? <button type="button" onClick={updatecomment} >updatecomment</button>:<button type="button" onClick={addcomment} >addcomment</button>}
            
        </form>
        <hr />
        <table border="1">
            <thead>
                <tr>
                    <th>University</th>
                    <th>Institute</th>
                    <th>Branch</th>
                    <th>Average cpi</th>
                    <th>upto</th>
                    <th>experience</th>
                    <th>your blog</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>

                {cominfo.map((inf,i)=>{
                    return <tr key={i}>
                        <td>{inf.university}</td>
                        <td>{inf.institute}</td>
                        <td>{inf.branch}</td>
                        <td>{inf.averagecpi}</td>
                        <td>{inf.upto}</td>
                        <td>{inf.experience}</td>
                        <td>{inf.yourblog}</td>
                        <td><button type="button" onClick={()=>{editcomment(inf)}} >edit</button></td>
                        <td><button type="button" onClick={()=>{deletecomment(inf)}}>delete</button></td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>;
}



export default Comment;