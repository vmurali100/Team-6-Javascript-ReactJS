import { Component } from "react";

export default class Albums2 extends Component {
    render() {
        return (
            <div>
                <p>{this.props.message}</p>
                <p>{this.props.person.fname}{this.props.person.lname}</p>

                <ul>

                    <table border="1">
                        <thead>
                            <tr>
                                <th>userId</th>
                                <th>id</th>
                                <th>title</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.props.allalbum.map((user, i) => {
                        return <tr key={i}>
                            <td>{user.userId}</td>
                            <td>{user.id}</td>
                            <td>{user.title}</td>
                        </tr>
                    })}
                        </tbody>
                    </table>
                   
                </ul>
            </div>
        )
    }
}