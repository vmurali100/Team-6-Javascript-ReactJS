import axios from 'axios';

import React,{useState} from 'react';
import { useEffect } from 'react';

const Post = () => {
    const [post, setpost] = useState({
        street:"",street1:"",city:"",state:"",zipcode:"",country:""
    })
    const [postinfo, setpostinfo] = useState([])
    const [isedit, setIsedit] = useState(false)
   const handlepost=(event)=>{
      var postname=event.target.name;
      var newpost={...post}
      newpost[postname]=event.target.value
      setpost(newpost)
    }
    const getallpost=()=>{
        axios.get("http://localhost:3000/post").then((response)=>{
            setpostinfo(response.data)
        })
    }
    const clearinfo=()=>{
        setpost({street:"",street1:"",city:"",state:"",zipcode:"",country:""})
    }
    const adduser=()=>{
        console.log(post)
        axios.post("http://localhost:3000/post",post).then((response)=>{
            console.log("user added successfully")
            clearinfo()
            getallpost()
        })
    }
   useEffect(()=>{
    getallpost()
   },[])
   const deleteuser=(post)=>{
     axios.delete("http://localhost:3000/post/"+post.id).then((response)=>{
        getallpost()
        clearinfo()
     })
   }
   const edituser=(info)=>{
    setIsedit(true)
    setpost(info)
   }
   const updatepost=()=>{
    axios.put("http://localhost:3000/post/"+post.id,post).then(()=>{
        getallpost()
        clearinfo()
        setIsedit(false)
    })
   }
    return <div>
        <form >
        <label htmlFor="">street</label>
        <input type="text" name="street" value={post.street} onChange={(event)=>{handlepost(event)}}/><br /><br />
        <input type="text" name="street1" value={post.street1} onChange={(event)=>{handlepost(event)}}/><br /><br />
        <label htmlFor="">city,state</label>
        <input type="text" name="city" value={post.city} onChange={(event)=>{handlepost(event)}}/>
        <input type="text" name="state" value={post.state} onChange={(event)=>{handlepost(event)}} /><br /><br />
        <label htmlFor="">Zip code</label>
        <input type="text" name="zipcode" value={post.zipcode} onChange={(event)=>{handlepost(event)}} /><br /><br />
        <label htmlFor="">country</label>
        <input type="text" name="country" value={post.country} onChange={(event)=>{handlepost(event)}} />
        {isedit ? <button onClick={updatepost}>update</button>:<button onClick={adduser}>ok</button> }
        

        </form>
       <hr />
       <table border="1">
        <thead>
            <tr>
                <th>street</th>
                <th>street1</th>
                <th>city</th>
                <th>state</th>
                <th>Zipcode</th>
                <th>country</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            {postinfo.map((info,i)=>{
                return <tr key={i}>
                    <td>{info.street}</td>
                    <td>{info.street1}</td>
                    <td>{info.city}</td>
                    <td>{info.state}</td>
                    <td>{info.zipcode}</td>
                    <td>{info.country}</td>
                    <td><button onClick={()=>{edituser(info)}}>Edit Post</button></td>
                    <td><button onClick={()=>{deleteuser(info)}}>Delete Post</button></td>
                </tr>
            })}
        </tbody>
       </table>
    </div>;
}



export default Post;