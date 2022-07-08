import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
const App5=()=>{
    let count=useSelector((state)=>state.count)
    let dispatch=useDispatch();
    console.log(count)
   const increasecount=()=>{
        dispatch({type:'increase'})
   } 
   const decreasecount=()=>{
        dispatch({type:'decrease'})
   }
    return (
        <div>
            <h2>count: {count}</h2>
            <button onClick={increasecount}>Increase</button>
            <button onClick={decreasecount}>Decrease</button>
        </div>
    )
}
export default App5