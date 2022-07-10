import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Testcomp3 } from './Testcomp3';

const App3 = () => {
    let count = useSelector((state) => state.count);
    let dispatch = useDispatch();
    const incrementCount = () => {
        dispatch({ type: 'INCREMENT' })
    }
    const decrementCount = () => {
        dispatch({ type: 'DECREMENT' })
    }
    return (
        <div>
            <h2>Count : {count}</h2>
            <button onClick={incrementCount}>Increment</button>
            <button onClick={decrementCount}>Decrement</button>
            <hr/>
            <Testcomp3/>
        </div>
    )
}

export default App3