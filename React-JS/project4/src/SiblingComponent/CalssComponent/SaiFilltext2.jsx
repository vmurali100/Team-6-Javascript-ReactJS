import { Component } from "react";

export default class SaiFilltext2 extends Component {
    render() {
        return (
            <div>
                <p>{this.props.message}</p>
                <p>{this.props.person.fname}{this.props.person.lname}</p>
                <ul>
                    <table border="1">
                        <thead>
                            <tr>
                                <th>postId</th>
                                <th>id</th>
                                <th>name</th>
                                <th>email</th>
                                <th>body</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.AllComments.map((user, i) => {
                                return <tr key={i}>
                                    <td>{user.postId}</td>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.body}</td>
                                </tr>
                            })}
                        </tbody>
                    </table>                    
                </ul>
            </div>
        )
    }
}
