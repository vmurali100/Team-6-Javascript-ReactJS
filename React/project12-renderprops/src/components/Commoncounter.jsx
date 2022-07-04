import React from 'react'
import Clickcounter1 from './Clickcount1'
import Clickcount2 from './Clickcount2'
import Clickcount3 from './Clickcount3'
import Counter1 from './Counter1'
import Counter2 from './Counter2'
import Counter3 from './Counter3'
import Hovercounter1 from './Hovercounter1'
import Hovercounter2 from './Hovercounter2'
import Hovercounter3 from './Hovercounter3'

const Commoncounter = () => {
  return (
    <div>

        {/* <Counter1 render={(count,increaseCount,decreasecount)=> <Clickcounter1 count={count} increaseCount={increaseCount} decreasecount={decreasecount}/>}/>
        <hr/>
        <Counter1 render={(count,increaseCount,decreasecount) => <Hovercounter1 count={count} increaseCount={increaseCount} decreasecount={decreasecount}/>}/> */}
        
        {/* <Counter2 render={(count,increase,decrease)=><Clickcount2 count={count} increase={increase} decrease={decrease}/> }/>
        <hr/>
        <Counter2 render={(count,increase)=> <Hovercounter2 count={count} increase={increase}/>}/> */}

        <Counter3 render={(count,increment,decrement)=> <Clickcount3 count={count} increment={increment} decrement={decrement}/>}/>
        <hr/>
        <Counter3 render={( count,increment)=> <Hovercounter3 count={count} increment={increment}/> }/>

    </div>
  )
}

export default Commoncounter