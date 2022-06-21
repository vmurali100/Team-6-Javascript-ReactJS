import React from "react";
import Posts from "./Posts";
const Postdiv=({Posts})=>{
    return(
        <div>
            {Posts.map((pos)=>{
                return (
                    <div className="postinfo">
                        <p>{pos.userid}</p>
                        <p>{pos.id}</p>
                        <p>{pos.title}</p>
                        <p>{pos.body}</p>
                    </div>
                )
            })}
        </div>
    )
}
export default Postdiv