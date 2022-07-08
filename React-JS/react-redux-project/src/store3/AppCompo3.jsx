import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { TesstComp } from './TesstComp'


function AppCompo3() {
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
        <TesstComp/>
    </div>
  )
}

export default AppCompo3