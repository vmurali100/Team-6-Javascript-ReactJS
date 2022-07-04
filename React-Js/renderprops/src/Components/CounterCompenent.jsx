import React from 'react'
import Counter1 from './Counter1'
import NewClickcounter1 from './NewClickcounter1'
import NewHoverCounter1 from './NewHoverCounter1'

export const CounterCompenent = () => {
  return (
    <div>
        {/* <NewClickcounter1/>
        <hr/>
        <NewHoverCounter1/> */}
        <Counter1 render={(count,incrementCount,decrementCount)=> <NewClickcounter1 count={count} 
        incrementCount={incrementCount} decrementCount={decrementCount} />} />
        <Counter1 render={(count,incrementCount,decrementCount)=> <NewHoverCounter1 count={count} 
        incrementCount={incrementCount} decrementCount={decrementCount} />} />
    </div>
  )
}
