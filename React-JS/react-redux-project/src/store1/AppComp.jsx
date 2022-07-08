import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TestCompo } from './TestCompo'

function AppComp() {
    let count = useSelector((state) => state.count)
    let dispatch = useDispatch()
    console.log(count)

    const incrementcount = () => {
        dispatch({ type: "INCREMENT" })
    }
    const decrementcount = () => {
        dispatch({ type: "DECREMENT" })
    }
    return (
        <div>
            <h2> count :{count}</h2>
            <button onClick={incrementcount}>increment</button>
            <button onClick={decrementcount}>decrement</button>
            <TestCompo/>
        </div>
    )
}

export default AppComp