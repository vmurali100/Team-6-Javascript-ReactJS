import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Naveen() {
    let count = useSelector((state) => state.count)
    let dispatch = useDispatch()
    const IncrementCount = () => {

        dispatch({ type: "INCREMENT" })
    }

    const decrementcount = () => {

        dispatch({ type: "DECREMENT" })
    }
    return (
        <div>
            <h1>count:{count}</h1>
            <button onClick={IncrementCount}>IncrementCount</button>
            <button onClick={decrementcount }>decrementcount</button>
        </div>
    )
}

export default Naveen