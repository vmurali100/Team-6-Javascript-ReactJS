
import { useDispatch, useSelector } from 'react-redux'
import { actions } from './index2'
const App2=()=>{
    const count=useSelector((state)=>state.counter)
    console.log(count)
    const dispatch=useDispatch()
    const {incrementcount,decrementcount,addby}=actions
    const handleIncrement=()=>{
        dispatch(incrementcount())
    }
    const handleDecrement=()=>{
        dispatch(decrementcount())
    }
    const handleAddby=()=>{
        dispatch(addby(2))
    }
    return(
        <div>
            <h2>{count}</h2>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleAddby}>addby</button>
        </div>
    )
}
export default App2