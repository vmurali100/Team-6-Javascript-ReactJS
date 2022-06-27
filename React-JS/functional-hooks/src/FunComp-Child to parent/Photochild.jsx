import axios from 'axios'
import React from 'react'
import { useEffect ,useState} from 'react'

export const Photochild = ({getdata}) => {
    const [photos, setphotos] = useState([])
    const senddatachildtoparent=()=>{
        getdata(photos)
    }
    useEffect(()=>{
        const photos="https://jsonplaceholder.typicode.com/photos"
        axios.get(photos).then((Response)=>{setphotos(Response.data)})
    },[])
  return (
    <div>
        <button onClick={senddatachildtoparent}>click here</button>
    </div>
  )
}
export default Photochild