import axios from 'axios'
import React,{useState,useEffect} from 'react'

function Childs5({getUsers}) {
    const [posts, setposts] = useState([])
    useEffect(() => {
        const url = "https://jsonplaceholder.typicode.com/posts"
        axios.get(url).then((response)=>{
            setposts(response.data)
        })
      
    }, [])

    const SendDataToParents = () =>{
        getUsers(posts)
        
    }
    
  return (
    <div>
        <p>Childs5</p>
        <button onClick={SendDataToParents}>Send Data Childs To Parents Components</button>
    </div>
  )
}

export default Childs5