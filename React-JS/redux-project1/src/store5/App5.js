import { useDispatch, useSelector } from "react-redux"
import {} from "./index5"

function App5(){
    const count=useSelector((state)=>state.counter)
    console.log(count)
    const{incrementCount,decrememtCount,addby}=actions
    const dispatch=useDispatch()
    const handleincrement=()=>{
        dispatch(incrementCount())
    }
    const handledecrement=()=>{
        dispatch(decrememtCount())
    }
    const handleaddby=()=>{
        dispatch(addby(5))
    }
    return(
        <div>
        <h1>{counter}</h1>
        <button onClick={handleincrement}>Increment</button>
        <button onClick={handledecrement}>Decrement</button>
        <button onClick={handleaddby}>addBy</button>
        </div>
    )
}
export default App5