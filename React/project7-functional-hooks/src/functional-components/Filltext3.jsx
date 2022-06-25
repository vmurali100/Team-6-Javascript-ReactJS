import React from 'react'
import { useEffect ,useState} from 'react'
import axios from 'axios'
import { Filltext3table } from './Filltext3table'

export const Filltext3 = () => {

  const [filltext3users, setFilltext3users] =  useState([])

  useEffect(() => {
    const url = "http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&pretty=true"
    axios.get(url).then((response) => { setFilltext3users(response.data) })
  }, [])
  return (
    <div>
      <Filltext3table filltext3users={filltext3users} />
    </div>
  )
}
