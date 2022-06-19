import React from "react"
const PreTrueDiv=({truee})=>{
    return(
        <div>
            {truee.map((user,i)=>{
                return(
                    <div className="trueinfo">
                        <p>{user.fname}</p>
                        <p>{user.lname}</p>
                    </div>
                )
            })}
        </div>
    )
        }
        export default PreTrueDiv