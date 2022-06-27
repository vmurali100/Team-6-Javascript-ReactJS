import axios from 'axios'
import React from 'react'
import { useEffect ,useState} from 'react'

export const Cartschild = ({getdata}) => {
    const [cartdetails, setcart] = useState([])
    const senddatatoparent=()=>{
        getdata(cartdetails)
    }
    useEffect(()=>{
        const cartdetails="https://fakestoreapi.com/carts"
        axios.get(cartdetails).then((response)=>{setcart(response.data)})
    },[])
  return (
    <div>
        <button onClick={senddatatoparent}>click me i will display table</button>
    </div>
  )
}
export default Cartschild