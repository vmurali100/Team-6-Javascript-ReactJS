import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '.';

const App4 = () => {
    const count = useSelector((state) => state.counter);
    const { increment, decrement, addBy } = actions
    const dispatch = useDispatch();
    const handleIncrement=()=>{
        dispatch(increment())
    }
    const handleDecrement = ()=>{
        dispatch(decrement())
    }
    const handleAddby = ()=>{
        dispatch(addBy(4))
    }
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleAddby}>Add By</button>
        </div>
    )
}

export default App4