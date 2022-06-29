import React,{useState} from 'react'

const Assignment5 = () => {
    const [Users, setUsers] = useState({
        Username:"",Password:"",EmailAddress:"",DateOfBirth:""
    }       
    )
    const handlechange =(event)=>{
        var variableName=event.target.name;
        var newUsers={...Users}
        newUsers[variableName]=event.target.value
        setUsers(newUsers)
    }

    const AddUsers=()=>{
        console.log(Users)
    }
  return (
    <div>
        
        <label htmlFor="">Username</label>
        <input type="text" name="Username" placeholder='Username' value={Users.Username} onChange={(event)=>{handlechange(event)}}/> 

       <br />
       
      
       <label htmlFor="">Password</label>
        <input type="text" name="Password" placeholder='Password' value={Users.Password} onChange={(event)=>{handlechange(event)}}/>
       <br />

        
        <label htmlFor="">EmailAddress</label>
        <input type="text" name="EmailAddress" placeholder='EmailAddress' value={Users.EmailAddress} onChange={(event)=>{handlechange(event)}}/> <br />
        <input type="text"  name="EmailAddress" placeholder='I am a Man' value={Users.EmailAddress} onChange={(event)=>{handlechange(event)}} /> <br />
        <input type="text"  name="EmailAddress" placeholder='I want to find Women' value={Users.EmailAddress} onChange={(event)=>{handlechange(event)}} />
        <br />        

       
       <label htmlFor="">DateOfBirth</label>
        <input type="text" name="DateOfBirth" placeholder='DateOfBirth' value={Users.DateOfBirth} onChange={(event)=>{handlechange(event)}}/> <br />
       

        <button onClick={AddUsers}>Add Users</button>
 
    </div>
  )
}

export default Assignment5