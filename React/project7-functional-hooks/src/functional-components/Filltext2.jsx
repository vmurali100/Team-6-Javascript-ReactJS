import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
import { Filltext2table } from './Filltext2table'

export const Filltext2 = () => {
  const [filltext2, setFilltext2] = useState([])
    useEffect(()=>{
        const url=" http://www.filltext.com/?rows=10&id={index}&email={email}&username={username}&password={randomString|5}&pretty=true"
        axios.get(url).then((response)=>{setFilltext2(response.data)})
    },[])
  return (
    <div>
        <Filltext2table Filltext2Users={filltext2}/>
    </div>
  )
}
