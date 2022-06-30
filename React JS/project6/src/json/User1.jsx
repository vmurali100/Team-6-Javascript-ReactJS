import {useEffect,useState } from "react";
import axios from 'axios'
export function User1 (){
    const [user,setuser]=useState({fname:"",lname:"",email:"",password:""})
    const [alluser,setalluser]=useState([])
    const [edit, setedit] = useState(false)

    function handle (eve){
        var inputname=eve.target.name
        const newuser={...user}
        newuser[inputname]=eve.target.value
        setuser(newuser)
    }
    const getallusers = () => {
      axios.get("http://localhost:3000/user").then((response) => {
         setalluser(response.data);
        console.log(response.data)
      });
    };
    function adduser(){
        console.log(user)
        axios.post("http://localhost:3000/user",user).then((response)=>{

    clear()
    getallusers()
        })
        
    }
    useEffect(() => {
      getallusers();
    }, []);
   
    function clear (){
      setuser ( {fname:"",lname:"",email:"",password:""})
    }
    const deleteuser = (userid) => {
      axios.delete("http://localhost:3000/user" + userid.id)
        .then((response) => {
          getallusers();
        });
    };
    const edituser = (userid) => {
      setedit(true);
      setuser(userid);
    };
  
    const updateuser = () => {
      axios.put("http://localhost:3000/user" + user.id, user).then(() => {
        getallusers();
        clear();
        setedit()
      });
    };
    return <div>
    <label htmlFor="">fname</label>
    <input type="text"name="fname" value={user.fname} onChange={(eve)=>{handle (eve)}}/>
    <label htmlFor="">lname</label>
    <input type="text"name="lname" value={user.lname} onChange={(eve)=>{handle (eve)}}/>
    <label htmlFor="">email</label>
    <input type="text"name="email" value={user.email} onChange={(eve)=>{handle (eve)}}/>
    <label htmlFor="">password</label>
    <input type="text"name="password" value={user.password} onChange={(eve)=>{handle (eve)}}/>
    <button onClick={adduser} type="button">add</button>
    <button onClick={updateuser} type="button">update</button>

    <br />
    <table border="1">
        <thead>
          <tr>
            <th>Fname</th>
            <th>Lname</th>
            <th>email</th>
            <th>password</th>
            <th>edit</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {alluser.map((userid,i) => {
            return (
              <tr key={i}>
                <td>{userid.fname}</td>
                <td>{userid.lname}</td>
                <td>{userid.email}</td>
                <td>{userid.password}</td>
                <td>
                  <button
                    onClick={() => {
                      edituser(userid);
                    }}
                  >
                    edit
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      deleteuser(userid);
                    }}
                  >
                    delete 
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
</div>
}