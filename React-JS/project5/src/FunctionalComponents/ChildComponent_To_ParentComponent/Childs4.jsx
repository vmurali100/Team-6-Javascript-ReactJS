import axios from 'axios'
import React,{useState,useEffect} from 'react'

function Childs4({getUsers}) {
    const [Filltexts2, setFilltexts2] = useState([])
    useEffect(() => {
        const url = "http://www.filltext.com/?rows=10&fname=%7BfirstName%7D&lname=%7BlastName%7D&tel=%7Bphone%7Cformat%7D&address=%7BstreetAddress%7D&city=%7Bcity%7D&state=%7BusState%7Cabbr%7D&zip=%7Bzip%7D&pretty=true"
        axios.get(url).then((response)=>{
            setFilltexts2(response.data)
        })
      
    }, [])

    const SendDataToParents = () =>{
        getUsers(Filltexts2)
        
    }
    
  return (
    <div>
        <p>Childs4</p>
        <button onClick={SendDataToParents}>Send Data Childs To Parents Components</button>
    </div>
  )
}

export default Childs4