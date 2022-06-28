import React from 'react'

const Pretty = () => {
    const getallpretty=async()=>{
        var prettyinfo=await fetch("http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&pretty=true")
        var pretty=await prettyinfo.json()
        console.log(pretty)
    }
  return (
    <div>
        <button onClick={getallpretty}>click</button>
    </div>
  )
}

export default Pretty