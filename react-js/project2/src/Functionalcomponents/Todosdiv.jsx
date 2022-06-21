import React from "react";
const Todosdiv=({todos})=>{
    // const senddatatoparent=()=>{
    //     todos(todos)
    // }
   return(
    <div>
        {/* <button onClick={senddatatoparent}>send data to parent</button> */}
        {todos.map((tod)=>{
            return (<div className="todoinfo">
                <p>{tod.userId}</p>
                <p>{tod.id}</p>
                <p>{tod.title}</p>
                <p>{tod.completed}</p>
            </div>
            )
        })}
    </div>
   )
}
export default Todosdiv