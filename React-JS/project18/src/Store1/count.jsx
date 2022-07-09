import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

function count() {
    let count = useSelector((state) => state.count);
    let Name = useSelector((state) => state.Name);
    let dispatch = useDispatch();
    console.log(count);

    const incrementcount = () => {
        dispatch({ type: "INCREMENT" })
    }
    const decrementcount = () => {
        dispatch({ type: "DECREMENT" })
    }
    return (
        <div>
            <h1>Count :{count}</h1>
            <h1>My Name is :{Name}</h1>
            <button onClick={incrementcount}>Increment</button>
            <button onClick={decrementcount}>Decrement</button>
            <button onMouseOver={incrementcount}>Increment</button>
            <button onMouseOver={decrementcount}>Decrement</button>

        </div>
    )
}

export default count