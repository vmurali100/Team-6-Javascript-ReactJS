import React from 'react'
import { useState } from 'react'


const Assignment6 = () => {
    const [Users, setUsers] = useState({
        University:"",Institute:"",Branch:"",Degree:"",Avarage:"",Experience:"",YourWebsiteorBlog:""
    })

    const eventhandle = (event)=>{
       var variableName = event.target.name;
       var newUsers={...Users}
       newUsers[variableName]=event.target.value;
       setUsers(newUsers)
    }

    const AddUsers = ()=>{
        console.log(Users)
        

    }
  return (
    <div>
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

        <button onClick={AddUsers}>AddUsers</button>
       </fieldset>
    </div>
  )
}

export default Assignment6