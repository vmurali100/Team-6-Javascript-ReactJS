import { useState, useSyncExternalStore } from "react"

export const Ptodoschild = ({ todos, person, message }) => {
    const [] = useState()
    return (
        <div>
            {Object.values(person).length > 0 && <p>person details from parent:{person.phone} - {person.city} - {person.state}</p>}
            {message && <p>message from parent:{message}</p>}
            {todos.length > 0 &&
                <table border={1}>
                    <thead>
                        <tr>
                            <th>userId</th>
                            <th>id</th>
                            <th>title</th>
                            <th>completed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.map((user, i) => {
                            return <tr>
                                <th>{user.userId}</th>
                                <th>{user.id}</th>
                                <th>{user.title}</th>
                                <th>{user.completed}</th>
                            </tr>
                        })}
                    </tbody>
                </table>
            }
        </div>
    )
}