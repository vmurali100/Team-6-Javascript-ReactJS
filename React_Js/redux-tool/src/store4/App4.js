import { useDispatch, useSelector } from "react-redux"
import { actions } from "./index4";
const App4=()=>{
    const count=useSelector((state)=>state.counter)
    console.log(count)
    const dispatch=useDispatch();
    const {incrementcount,decrementcount,addby}=actions
    const handleIncrement=()=>{
        dispatch(incrementcount())
    }
    const handleDecrement=()=>{
        dispatch(decrementcount())
    }
    const handleAddby=()=>{
        dispatch(addby(4))
    }
    return(
        <div>
            <h3>{count}</h3>
            <button onClick={handleIncrement}>Increase</button>
            <button onClick={handleDecrement}>Decrease</button>
            <button onClick={handleAddby}>Add</button>
        </div>
    )
}
export default App4