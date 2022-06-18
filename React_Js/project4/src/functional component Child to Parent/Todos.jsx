import { useState } from "react"
import { Todoschild } from "./Todoschild"

export const Todos = () => {
    const [todoinfo, settodoinfo] = useState([])
    const receivetodofromchild = (tododetails) => {
        settodoinfo(tododetails)
    }
    return (
        <div>
            <Todoschild getdata={receivetodofromchild} />
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
                    {todoinfo.map((user,i) => {
                        return <tr>
                            <td>{user.userId}</td>
                            <td>{user.id}</td>
                            <td>{user.title}</td>
                            <td>{user.completed}</td>
                        </tr>
                    })}
                </tbody>
            </table>

        </div>
    )
}