import React,{useState} from 'react'
import axios from 'axios'
import { useEffect } from 'react'

const CrudAssignment3 = () => {
    const [Address, setAddress] = useState({Street:"",CityState:"",ZipCode:"",Country:""})
    const [Alladress, setAlladress] = useState([]) 
    const [Isedit, setIsedit] = useState(false)     
            
       
       const handelchange=(event)=>{
        var variableName = event.target.name;
        var newAddress={...Address}
        newAddress[variableName] = event.target.value
        setAddress(newAddress)
       }

        const  getalladress =()=>{
            axios.get(" http://localhost:3000/Users4").then((response)=>{
                setAlladress(response.data)
            })
        }
     
        const clearaddress = ()=>{
            setAddress({Street:"",CityState:"",ZipCode:"",Country:""})
        }

       const AddAddress =()=>{
        console.log(Address)
        axios.post("http://localhost:3000/Users4",Address).then((response)=>{
             console.log("user Add Succefully")
             clearaddress()
             getalladress()
        })
       }

       useEffect(()=>{
        getalladress()
       },[])
//Deleteuser
       const deleteuser = (addressdetails)=>{
        axios.delete("http://localhost:3000/Users4/"+addressdetails.id).then((response)=>{
            getalladress()

        })
       }
       //EditUser

       const edituser =(adressinfo)=>{
        setAddress(adressinfo)
        setIsedit(true)
       }

       //updateuser
       const UpdateUser = ()=>{
           axios.put("http://localhost:3000/Users4/" +Address.id,Address).then(()=>{
            getalladress()
            clearaddress()
            setIsedit(false)

           })
       }
  return (
    <div>
        <form >
        <label htmlFor="">Street</label>
        <input type="text" name="Street"  value={Address.Street} onChange={(event)=>{handelchange(event)}}/> <br />

        <label htmlFor="">City,State :</label>
        <input type="text " name="CityState" value={Address.CityState} onChange={(event)=>{handelchange(event)}}/> <br />

        <label htmlFor="">ZipCode</label>
        <input type="text" name="ZipCode"  value={Address.ZipCode} onChange={(event)=>{handelchange(event)}}/> <br />

        <label htmlFor="">Country</label>
        <input type="text" name='Country' value={Address.Country} onChange={(event)=>{handelchange(event)}} />
        <br />
         {Isedit ? <button onClick={UpdateUser} type="button">UpdateUser</button> :<button onClick={AddAddress} type="button">AddUsers</button>}
         <input type="text" name="id"  hidden />
        
        

        </form>

        <hr />
        <table border="1">
            <thead>
                <tr>
                    <th>Street</th>
                    <th>City,State</th>
                    <th>ZipCode</th>
                    <th>Country</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {Alladress.map((adressinfo,i)=>{
                    return <tr key={i}>
                        <td>{adressinfo.Street}</td>
                        <td>{adressinfo.CityState}</td>
                        <td>{adressinfo.ZipCode}</td>
                        <td>{adressinfo.Country}</td>
                        <td><button onClick={()=>{edituser(adressinfo)}}>EditUsers</button></td>
                        <td><button onClick={()=>{deleteuser(adressinfo)}}>DeleteUser</button></td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
  )
}

export default CrudAssignment3