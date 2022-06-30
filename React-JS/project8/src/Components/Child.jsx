import React from 'react'
import User from './User'

const Child = ({MyMsg}) => {
  return (
    <> 
        <p>Child</p>
        <hr/>
        <User Mymessage={MyMsg}/>
    </>
  )
}

export default Child