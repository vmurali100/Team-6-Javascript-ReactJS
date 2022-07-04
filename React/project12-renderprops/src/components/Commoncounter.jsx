import React from 'react'
import Clickcounter1 from './Clickcount1'
import Counter1 from './Counter1'
import Hovercounter1 from './Hovercounter1'

const Commoncounter = () => {
  return (
    <div>
        <Counter1 render={(count,increaseCount,decreasecount)=> <Clickcounter1 count={count} increaseCount={increaseCount} decreasecount={decreasecount}/>}/>
        <Counter1 render={(count,increaseCount,decreasecount) => <Hovercounter1 count={count} increaseCount={increaseCount} decreasecount={decreasecount}/>}/>
        <hr/>
    </div>
  )
}

export default Commoncounter