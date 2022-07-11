import { useDispatch, useSelector } from "react-redux"
import { actions } from "./index4"

function App4() {
    const count = useSelector((state) => state.counter)
    console.log(count)
    const { incrementCount, decrementCount, addBy } = actions
    const dispatch = useDispatch()

    const handleincrement = () => {
        dispatch(incrementCount())
    }

    const handledecrement = () => {
        dispatch(decrementCount())
    }

    const handleaddby = () => {
        dispatch(addBy(5))
    }
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={handleincrement}>Increment</button>
            <button onClick={handledecrement}>Decrement</button>
            <button onClick={handleaddby}>AddBy</button>
        </div>
    )
}
export default App4