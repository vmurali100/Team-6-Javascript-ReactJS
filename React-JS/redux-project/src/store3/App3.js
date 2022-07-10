import { useDispatch, useSelector } from "react-redux"

function App3 (){
    let count=useSelector((state)=>state.count)
    let dispatch=useDispatch()
    const incremeantcount=()=>{
        dispatch({type:"INCREMEANT"})
    }
    const decrementcount=()=>{
        dispatch({type:"DECREMEANT"})
    }
    return(
        <div>
            <h2>Count3:{count}</h2>
            <button onClick={incremeantcount}>Increment</button>
            <button onClick={decrementcount}>Decrement</button>
        </div>
    )
}
export default App3