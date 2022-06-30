import React from 'react'
import Chils from './Chils'

const Parenc=({msg})=>{
    return(
        <div>
            <p>parent</p>
            <hr />
            <Chils mymsg={msg}/>
        </div>
    )
}
export default Parenc