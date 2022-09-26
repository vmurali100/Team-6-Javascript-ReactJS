import React from 'react'
import { useState } from 'react'

const Child = ({getData}) => {
    const [albums,setalbums]=useState(allalbums)
    const senddatatoparent=()=>{
        getData(albums)
    }
  return (
    <div>
      <button onClick={senddatatoparent}>send data to parent</button>
    </div>
  )
}

export default Child
 var allalbums=[
    {
        "name":"padmaja",
        "age":23
    },
    {
        "name":"sandhya",
        "age":22
    }
 ]
