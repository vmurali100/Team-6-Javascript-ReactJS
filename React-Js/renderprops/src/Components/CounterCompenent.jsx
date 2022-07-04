import React from 'react'
import Counter2 from './Counter2'
import Counter1 from './Counter1'
import Counter3 from './Counter3'
import Counter4 from './Counter4'
import Counter5 from './Counter5'
import NewClickcounter1 from './NewClickcounter1'
import NewClickcounter2 from './NewClickcounter2'
import NewClickcounter3 from './NewClickcounter3'
import NewHoverCounter1 from './NewHoverCounter1'
import NewHovercounter2 from './NewHovercounter2'
import NewHovercounter3 from './NewHovercounter3'
import NewClickcounter4 from './NewClickcounter4'
import NewHovercounter4 from './NewHovercounter4'
import NewClickcounter5 from './NewClickcounter5'
import NewHovercounter5 from './NewHovercounter5'

export const CounterCompenent = () => {
  return (
    <div>
        {/* <NewClickcounter1/>
        <hr/>
        <NewHoverCounter1/> */}
        {/* <NewClickcounter2/>
        <hr/>
        <NewHovercounter2/> */}

        {/* <NewClickcounter3/>
        <hr/>
        <NewHovercounter3/> */}

        {/* <NewClickcounter4/>
        <hr/>
        <NewHovercounter4/> */}

        {/* <NewClickcounter5/>
        <hr/>
        <NewHovercounter5/> */}

        {/* <Counter1 render={(count,incrementCount,decrementCount)=> <NewClickcounter1 count={count} 
        incrementCount={incrementCount} decrementCount={decrementCount} />} />
        <Counter1 render={(count,incrementCount,decrementCount)=> <NewHoverCounter1 count={count} 
        incrementCount={incrementCount} decrementCount={decrementCount} />} /> */}
        
        {/* <Counter2 render={(count,incrementCount,decrementCount)=> <NewClickcounter2 count={count} 
        incrementCount={incrementCount} decrementCount={decrementCount} />}/>
        <Counter2 render={(count,incrementCount,decrementCount)=> <NewHovercounter2 count={count} 
        incrementCount={incrementCount} decrementCount={decrementCount} />}/> */}

        {/* <Counter3 render={(count,incrementCount,decrementCount)=> <NewClickcounter3 count={count}
        incrementCount={incrementCount} decrementCount={decrementCount}/> } />
        <Counter3 render={(count,incrementCount,decrementCount)=> <NewHovercounter3 count={count}
        incrementCount={incrementCount} decrementCount={decrementCount}/> } /> */}

        {/* <Counter4 render={(count,incrementCount,decrementCount)=> <NewClickcounter4 count={count}
        incrementCount={incrementCount} decrementCount={decrementCount}/> }/>
        <Counter4 render={(count,incrementCount,decrementCount)=> <NewHovercounter4 count={count}
        incrementCount={incrementCount} decrementCount={decrementCount}/> }/> */}

        <Counter5 render={(count,incrementCount,decrementCount)=> <NewClickcounter5 count={count}
        incrementCount={incrementCount} decrementCount={decrementCount}/> } />
        <Counter5 render={(count,incrementCount,decrementCount)=> <NewHovercounter5 count={count}
        incrementCount={incrementCount} decrementCount={decrementCount}/> } />
    </div>
  )
}
