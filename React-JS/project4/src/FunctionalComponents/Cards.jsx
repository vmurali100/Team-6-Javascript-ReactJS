 import React from 'react'
 
 const Cards = ({ChildData1}) => {
   return (
     <div>
        {ChildData1.map((user)=>{
                return <div className="userinfo">
                    <p>{user.fname}</p> 
                    <p>{user.lname}</p> 
                    <p>{user.tel}</p>
                    <p>{user.address}</p>
                    <p>{user.city}</p>
                    <p>{user.state}</p>
                    <p>{user.zip}</p>
                </div>
            })}
     </div>
   )
 }
 
 export default Cards