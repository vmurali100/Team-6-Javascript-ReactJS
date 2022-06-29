import React,{useState} from 'react'

const Assignment1 = () => {
    const [Users, setUsers] = useState({
        name:"",Username:"",email:"",Password:"",ConfirmPassWord:"",Message:""

    })

    const handelchange = (event)=>{
        var variableName = event.target.name
        var newUsers={...Users}
        newUsers[variableName]=event.target.value
        setUsers(newUsers)
    }
    const AddUsers =()=>{
        console.log(Users)
    }
  return (
    <div>
        <h2>validationDemo</h2>
        <label htmlFor="">Name :</label>
        <input type="text" name="name" placeholder='name' value={Users.name} onChange={(event)=>{handelchange(event)}}/> <br />

        <label htmlFor="">Username :</label>  
        <input type="text" name="Username" placeholder='Username' value={Users.Username} onChange={(event)=>{handelchange(event)}}/> <br />

        <label htmlFor="">Email :</label>
        <input type="text" name="email" placeholder=''email value={Users.email} onChange={(event)=>{handelchange(event)}} /> <br />

        <label htmlFor="">Password :</label>
        <input type="text" name="Password" placeholder='Password' value={Users.Password} onChange={(event)=>{handelchange(event)}}/> <br />


        <label htmlFor="">ConfirmPassWord :</label>
        <input type="text" name="ConfirmPassWord" placeholder='ConfirmPassword' value={Users.ConfirmPassWord} onChange={(event)=>{handelchange(event)}} /> <br />

        <label htmlFor="">Message :</label>
        <input type="text" name="Message" placeholder='Message' value={Users.Message} onChange={(event)=>{handelchange(event)}}/>

        <button onClick={AddUsers}>Add Users</button> 
    </div>
  )
}

export default Assignment1