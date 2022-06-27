import axios from 'axios'
import React,{useState,useEffect} from 'react'

function Childs2({getUsers}) {
    const [Filltexts, setFilltexts] = useState([])
    useEffect(() => {
        const url = "http://www.filltext.com/?rows=10&fname=%7BfirstName%7D&lname=%7BlastName%7D&pretty=true"
        axios.get(url).then((response)=>{
            setFilltexts(response.data)
        })
      
    }, [])

    const SendDataToParents = () =>{
        getUsers(Filltexts)
        
    }
    
  return (
    <div>
        <p>Childs2</p>
        <button onClick={SendDataToParents}>Send Data Childs To Parents Components</button>
    </div>
  )
}

export default Childs2