import { Component } from "react";
import { TodosChild4 } from "./TodosChild4";

export class Todos4 extends Component {
    constructor() {
        super()
        this.state = {
            message: "",
            person: {},
            todo: []
        }
    }
    receivemessage = (message) => {
        this.setState({ message })
    }
    receiveperson = (person) => {
        this.setState({ person })
    }
    receivetodo = (todo) => {
        this.setState({ todo })
    }
    render() {
        const { receivemessage, receiveperson, receivetodo } = this
        const { message, person, todo } = this.state
        return (
            <div>
                <TodosChild4 receivemessage={receivemessage} receiveperson={receiveperson} receivetodo={receivetodo} />
                <p>{message}</p>
                <p>{person.userId}-{person.id}</p>
                <div>{<table border={1}>
                    <thead>
                        <tr>
                            <th>userId</th>
                            <th>id</th>
                            <th>title</th>
                            <th>completed</th>
                        </tr>
                    </thead>
                    <tbody>{todo.map((user, i) => {
                        return <tr key={i}>
                            <td>{user.userId}</td>
                            <td>{user.id}</td>
                            <td>{user.title}</td>
                            <td>{user.completed}</td>
                        </tr>
                    })}
                    </tbody>
                </table>
                }
                </div>
            </div>
        )
    }
}