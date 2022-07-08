import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const APP4 = () => {
    let  count=useSelector((state)=>state.count)
    let dispatch=useDispatch()
    console.log(count)
    const increase=()=>{
        dispatch({type:"INCREASE"})
    }
    const decrease=()=>{
      dispatch({type:"DECREASE"})
    }
  return (
    <div>
        <h3>count:{count}</h3>
        <button onClick={increase}>increase</button>
        <button onClick={decrease}>decrease</button>
    </div>
  )
}

export default APP4