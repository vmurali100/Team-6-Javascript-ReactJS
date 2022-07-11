import { useDispatch, useSelector } from "react-redux"
import { actions } from './index3';
function App3() {
    const count = useSelector((state) => state.counter);
    console.log(count)
    const { incrementcount, decrementcount, addBy } = actions
    const dispatch = useDispatch()

    const handleincrement = () => {
        dispatch(incrementcount())
    }
    const handledecrement = () => {
        dispatch(decrementcount())
    }
    const handleaddby = () => {
        dispatch(addBy(5))
    }

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={handleincrement}>Increment</button>
            <button onClick={handledecrement}>Decrement</button>
            <button onClick={handleaddby}>addBy</button>
        </div>
    )
}
export default App3