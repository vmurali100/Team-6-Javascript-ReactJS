import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function FidhaParveen() {
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
            <button onMouseOver={IncrementCount}>IncrementCount</button>
            <button onMouseOver={decrementcount }>decrementcount</button>
        </div>
    )
}

export default FidhaParveen