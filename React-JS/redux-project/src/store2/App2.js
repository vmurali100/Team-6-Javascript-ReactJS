import { useDispatch, useSelector } from "react-redux"

function App2(){
    let count=useSelector((state)=>state.count)
    let dispatch=useDispatch()
    console.log(count)
    const incrementcount=()=>{
        dispatch({type:'INCREMENT'})
    }
    const decrementcount=()=>{
        dispatch({type:'DECREMENT'})
    }
return(
    <div>
        <h2>Count2:{count}</h2>
        <button onClick={incrementcount}>Increment</button>
        <button onClick={decrementcount}>decrement</button>
    </div>
)
}
export default App2