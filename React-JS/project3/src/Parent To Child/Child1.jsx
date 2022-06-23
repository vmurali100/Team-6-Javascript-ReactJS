import React from "react"
const Child1 = ({ Messege, Person, Users }) => {
    return (
        <div>
            {Messege && <p>Messege from parent component : {Messege}</p>}

            {Object.keys(Person).length > 0 && <p>Person Detail From parent : {Person.fname}-{Person.lname} </p>}

            {Users.length > 0 && <ul>
                {Users.map((user,i) => {
                    return <li key={i}>{user}</li>
                })}
            </ul>}



        </div>
    )
}
export default Child1