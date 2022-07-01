import {useEffect,useState } from "react";
import axios from 'axios'
export function User3 (){
    const [user,setuser]=useState({username:"",mobile:"",email:"",date:""})
    const [alluser,setalluser]=useState([])
    const [edit, setedit] = useState(false)

    function handle (eve){
        var inputname=eve.target.name
        const newuser={...user}
        newuser[inputname]=eve.target.value
        setuser(newuser)
    }
    const getallusers = () => {
      axios.get("http://localhost:3000/all").then((response) => {
         setalluser(response.data);
        console.log(response.data)
      });
    };
    function adduser(){
        console.log(user)
        axios.post("http://localhost:3000/all",user).then((response)=>{

    clear()
    getallusers()
        })
        
    }
    useEffect(() => {
      getallusers();
    }, []);
   
    function clear (){
      setuser ( {username:"",mobile:"",email:"",date:""})
    }
    const deleteuser = (userid) => {
      axios.delete("http://localhost:3000/all" + userid.id)
        .then((response) => {
          getallusers();
        });
    };
    const edituser = (userid) => {
      setedit(true);
      setuser(userid);
    };
  
    const updateuser = () => {
      axios.put("http://localhost:3000/all" + user.id, user).then(() => {
        getallusers();
        clear();
        setedit()
      });
    };
    return <div>
    <label htmlFor="">username</label>
    <input type="text"name="username" value={user.fname} onChange={(eve)=>{handle (eve)}}/> <br />
    <label htmlFor="">mobile</label>
    <input type="text"name="mobile" value={user.lname} onChange={(eve)=>{handle (eve)}}/> <br />
    <label htmlFor="">email</label>
    <input type="text"name="email" value={user.email} onChange={(eve)=>{handle (eve)}}/> <br />
    <label htmlFor="">date</label>
    <input type="date"name="date" value={user.date} onChange={(eve)=>{handle (eve)}}/> <br />
    <button onClick={adduser} type="button">add</button>
    <button onClick={updateuser} type="button">update</button>

    <br />
    <table border="1">
        <thead>
          <tr>
            <th>username</th>
            <th>mobile</th>
            <th>email</th>
            <th>date</th>
            <th>edit</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {alluser.map((userid,i) => {
            return (
              <tr key={i}>
                <td>{userid.username}</td>
                <td>{userid.mobile}</td>
                <td>{userid.email}</td>
                <td>{userid.date}</td>
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