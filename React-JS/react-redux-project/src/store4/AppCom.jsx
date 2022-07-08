import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TestCOmponent from './TestCOmponent'

function AppCom() {
    let count = useSelector((state)=>state.count)
    let dispatch = useDispatch()
    console.log(count)
    
  const Incrementcount=()=>{
    dispatch({type:"INCREMENT"})
  }
  const Decrementcount=()=>{
    dispatch({type:"DECREMENT"})

  }


  return (
    <div>
        <h2>Count:{count}</h2>
        <button onClick={Incrementcount}>Increase</button>
        <button onClick={Decrementcount}>Decrease</button>
        <TestCOmponent/>

    </div>
  )
}

export default AppCom