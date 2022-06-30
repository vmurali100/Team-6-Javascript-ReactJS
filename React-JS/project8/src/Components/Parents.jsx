import React from 'react'
import Child from './Child'

const Parents = ({msg}) => {
  return (
    <> 
        <p>Parents</p>
        <hr/>
        <Child MyMsg={msg}/>
    </>
  )
}

export default Parents