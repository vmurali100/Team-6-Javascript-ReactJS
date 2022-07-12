import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const App7 = () => {
    let count=useSelector((state)=>state.count)
    console.log(count)
    let dispatch=useDispatch()
    const increase=()=>{
        dispatch({type:'Increase'})
    }
    const decrease=()=>{
        dispatch({type:'Decrease'})
    }
  return (
    <div>
      <h2>count7:{count}</h2>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  )
}

export default App7
