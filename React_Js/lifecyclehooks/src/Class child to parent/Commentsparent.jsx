import React, { Component } from 'react'
import Commentschild from './Commentschild'

export default class Commentsparent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            comments: []
        }
    }
    receivecomments = (comments) => {
        this.setState({ comments })
    }
    render() {
        const { receivecomments } = this
        const { comments } = this.state
        return (
            <div>
                <Commentschild receivecomments={receivecomments} />
                <table border={1}>
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
                        {comments.map((user, i) => {
                            return (
                                <tr key={i}>
                                    <td>{user.postId}</td>
                                    <td>{user.postId}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.body}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
