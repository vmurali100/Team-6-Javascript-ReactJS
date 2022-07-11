import { useDispatch, useSelector } from "react-redux"
import { actions } from "./index";

function App1() {
    const count = useSelector((state)=>state.counter);
    console.log(count)
    const{incrementcount,decrementcount,addBy}=actions
    const dispatch=useDispatch()

    const handleincremeant=()=>{
        dispatch(incrementcount())
    }
    
    const handledecremeant=()=>{
        dispatch(decrementcount())
    }

    const handleaddby=()=>{
        dispatch(addBy(5))
    }
    return(
        <div>
            <h2>{count}</h2>
            <button onClick={handleincremeant}>increment</button>
            <button onClick={handledecremeant}>decrement</button>
            <button onClick={handleaddby}>addBy</button>
        </div>
    )
}
export default App1