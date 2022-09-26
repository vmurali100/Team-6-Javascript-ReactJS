import React from 'react'

const Child = (props) => {
    return (
        <div>
            <button onClick={() => { props.sendToParent() }}>update</button>
            <p>the state of parendData is {props.tochild}</p>
        </div>
    )
}

export default Child
