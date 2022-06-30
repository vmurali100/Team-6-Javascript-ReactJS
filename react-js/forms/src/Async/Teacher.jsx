import React from 'react'
const Teacher=()=>{
 const getalldata=async()=>{
    var datainfo=await fetch("http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&pretty=true");
    var data=await datainfo.json()
    console.log(data)
 }
    return(
        <div>
            <button onClick={getalldata}>get data</button>
        </div>
    )
}
export default Teacher