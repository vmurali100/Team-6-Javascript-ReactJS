import { useState } from "react"

export const Puserschild = ({ users, message, person }) => {
    const [] = useState()
    return (
        <div>
            {Object.values(person).length > 0 && <p>person details from parent:{person.name} - {person.fathername} - {person.mothername}</p>}
            {message && <p>message from parent:{message}</p>}
            {users.length > 0 &&
                <table border={1}>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>username</th>
                            <th>email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, id) => {
                            return <tr>
                                <th>{user.id}</th>
                                <th>{user.name}</th>
                                <th>{user.username}</th>
                                <th>{user.email}</th>
                            </tr>
                        })}
                    </tbody>
                </table>
            }
        </div>
    )
}