import React from 'react'

const Child = (props) => {
  return (
    <div>
      <button onClick={() => props.onChange("your value here") }/>
    </div>
  )
}

export default Child();
