import { Component } from "react";

export default class Cpost2 extends Component {
    render() {
        return (
            <div>
                <p>{this.props.message}</p>
                <p>{this.props.person.city} {this.props.person.pincode}</p>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>userId</th>
                            <th>id</th>
                            <th>title</th>
                            <th>body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.posts.map((user, i) => {
                            return <tr>
                                <th>{user.userId}</th>
                                <th>{user.id}</th>
                                <th>{user.title}</th>
                                <th>{user.body}</th>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}