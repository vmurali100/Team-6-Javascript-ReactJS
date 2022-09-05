import {useEffect,useState } from "react";
import axios from 'axios'
export function File (){
    const [user,setuser]=useState({name:"",email:"",id:""})
    const [alluser,setalluser]=useState([])
    const [edit, setedit] = useState(false)

    function handle (eve){
        var inputname=eve.target.name
        const newuser={...user}
        newuser[inputname]=eve.target.value
        setuser(newuser)
    }
    const getallusers = () => {
      axios.get("http://localhost:3000/all",user).then((response) => {
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
      setuser ( {name:"",email:""})
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
    <label htmlFor="">name</label>
    <input type="text"name="name" value={user.name} onChange={(eve)=>{handle (eve)}}/> <br />
    <label htmlFor="">email</label>
    <input type="text"name="email" value={user.email} onChange={(eve)=>{handle (eve)}}/> <br />
    <input type="text"name="id" value={user.id}  hidden/> <br />
    <button onClick={adduser} type="button">add</button>
    <button onClick={updateuser} type="button">update</button>

    <br />
    <table border="1">
        <thead>
          <tr>
            <th>name</th>
            <th>email</th>
            <th>edit</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {alluser.map((userid,i) => {
            return (
              <tr key={i}>
                <td>{userid.name}</td>
                <td>{userid.email}</td>
                <td>
                  <button onClick={() => {edituser(userid); }}>
                    edit
                  </button>
                </td>
                <td>
                  <button onClick={() => { deleteuser(userid);}} >
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