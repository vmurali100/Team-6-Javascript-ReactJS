import { Component } from "react";
import Ctodoschild from "./Ctodoschild";

export default class Ctodos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: "",
            person: {},
            todos: []
        }
    }
    receivemessage = (message) => {
        this.setState({ message })
    };
    receiveperson = (person) => {
        this.setState({ person })
    };
    receivetodos = (todos) => {
        this.setState({ todos })
    };
    render() {
        const { message, person, todos } = this.state
        return (
            <div>

                <Ctodoschild receivemessage={this.receivemessage} receiveperson={this.receiveperson} receivetodos={this.receivetodos} />
                {message && <p>message from child Component:{message}</p>}
                {Object.keys(person).length > 0 && <p>person from child Component:{person.title} -{person.completed}</p>}

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
            </div>
        )
    }
}