import React from 'react'
import { Child } from './Child'

export const Parent = ({msg}) => {
  return (
    <div>
          <hr/>
        <p>Parent</p>
        <Child mymsg={msg}/>
    </div>
  )
}
