import React from "react"

const Cards = ({Rajubhai}) => {
    return (
        <div>
            {Rajubhai.map((hello) => {
                return <div className="HelloReact">
                    <p>{hello.userId}</p>
                    <p>{hello.userId}</p>
                    <p>{hello.title}</p>
                    <p>{hello.body}</p>
                </div>
            })}
            
        </div>
    )
}
export default Cards