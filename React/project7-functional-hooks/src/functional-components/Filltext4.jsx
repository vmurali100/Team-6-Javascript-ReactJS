import axios from 'axios'
import React, { useEffect, useState} from 'react'
import { Filltext4table } from './Filltext4table'

export const Filltext4 = () => {
    const [filltext4, setFilltext4] = useState([])
    useEffect(()=>{
      const url="http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&pretty=true"
      axios.get(url).then((response)=>{setFilltext4(response.data)})
    },[])
  return (
    <div>
      <Filltext4table filltext4users={filltext4}/>
    </div>
  )
}
