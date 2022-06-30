import React from 'react'
import { Users } from './Users'

export const Child = ({mymsg}) => {
  return (
    <div>
         <hr/>
        <p>Child</p>
        <Users thatmsg={mymsg}/>
    </div>
  )
}
