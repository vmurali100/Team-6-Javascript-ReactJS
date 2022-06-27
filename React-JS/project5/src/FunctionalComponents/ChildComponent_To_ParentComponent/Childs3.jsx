import axios from 'axios'
import React,{useState,useEffect} from 'react'

function Childs3({getUsers}) {
    const [Filltexts1, setFilltexts1] = useState([])
    useEffect(() => {
        const url = "http://www.filltext.com/?rows=10&id=%7Bindex%7D&email=%7Bemail%7D&username=%7Busername%7D&password=%7BrandomString%7C5%7D&pretty=true"
        axios.get(url).then((response)=>{
            setFilltexts1(response.data)
        })
      
    }, [])

    const SendDataToParents = () =>{
        getUsers(Filltexts1)
        
    }
    
  return (
    <div>
        <p>Childs3</p>
        <button onClick={SendDataToParents}>Send Data Childs To Parents Components</button>
    </div>
  )
}

export default Childs3