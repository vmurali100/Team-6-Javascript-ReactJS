import axios from 'axios'
import React from 'react'
import { useEffect ,useState} from 'react'
import { Cartstable5 } from './Cartstable5'

export const Carts5 = () => {
    const [carts, setCarts] = useState([])
    useEffect(() => {
        const url = "https://fakestoreapi.com/carts "
        axios.get(url).then((response) => { console.log(response.data) })
    })
    return (
        <div>
            <Cartstable5 cartDetails={carts} />
        </div>
    )
}
