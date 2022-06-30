import axios from 'axios';
import React,{useState} from 'react';
import { useEffect } from 'react';
import Information from './Information';

const Cart = () => {
    const [cars, setcart] = useState({
        username:"",password:"",email:"",dateofbirth:""
    })
    const [cartinfo, setcartinfo] = useState([])
    const [isedit, setisedit] = useState(false)
    const handlecart=(event)=>{
      var cartname=event.target.name;
      var newcart={...cars}
      newcart[cartname]=event.target.value
      setcart(newcart)
    }
    const getallcars=()=>{
        axios.get("http://localhost:3000/cars").then((response)=>{
          
            setcartinfo(response.data)
        })

    }
    const clearcars=()=>{
        setcart({ username:"",password:"",email:"",dateofbirth:""})
    }
    const addcart=()=>{
        console.log(cars)
        axios.post("http://localhost:3000/cars",cars).then((response)=>{
            console.log("added successful")
            clearcars()
            getallcars()
        })
    }
   
    useEffect(()=>{
        getallcars()
    },[])
    const deletecars=(cars)=>{
          axios.delete("http://localhost:3000/cars"+cars.id).then((response)=>{
            getallcars()
            clearcars()
          })
    }
    const ediitcars=(inf)=>{
        setisedit(true)
        setcart(inf)
    }
    const updatecars=()=>{
        axios.put("http://localhost:3000/cars/"+cars.id,cars).then(()=>{
            getallcars()
            clearcars()
            setisedit(false)
        })
    }
    return <div>
        <form >
            <label htmlFor="">UserName</label>
            <input type="text" name="username" value={cars.username} onChange={(event)=>{handlecart(event)}}/>
            <label htmlFor="">Password</label>
            <input type="text" name="password" value={cars.password}  onChange={(event)=>{handlecart(event)}}/>
            <label htmlFor="">Email Address</label>
            <input type="text" name="email" value={cars.email}  onChange={(event)=>{handlecart(event)}}/>
            <label htmlFor="">Date Of Birth</label>
            <input type="text" name="dateofbirth" value={cars.dateofbirth}  onChange={(event)=>{handlecart(event)}}/>
            {isedit ? <button type="button" onClick={updatecars}>submit</button>:<button type="button" onClick={addcart}>submit</button> }
            
        </form>
        <hr />
        <table border="1">
            <thead>
                <tr>
                    <th>username</th>
                    <th>password</th>
                    <th>email</th>
                    <th>dateofbirth</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {cartinfo.map((inf)=>{
                    return <tr>
                        <td>{inf.username}</td>
                        <td>{inf.password}</td>
                        <td>{inf.email}</td>
                        <td>{inf.dateofbirth}</td>
                        <td><button onClick={()=>{ediitcars(inf)}}>Edit cars</button></td>
                        <td><button onClick={()=>{deletecars(inf)}}>Delete cars</button></td>
                    </tr>
                })

                }
            </tbody>
        </table>
    </div>;
}



export default Cart;