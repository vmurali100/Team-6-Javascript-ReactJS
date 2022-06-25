import axios from 'axios'
import React, { Component } from 'react'

export default class Practice5 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Users: []
        }
    }
    componentDidMount() {
        const url = "http://localhost:3000/Products "
        axios.get(url).then((response) => {
            this.setState({ Users: response.data })

        })
    }
    render() {
        return (
            <div>
                <p>Practice5</p>
                <table border={2}>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Category</th>
                            <th>Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.Users.map(function (user,i) {
                            return <tr key={i}>
                                <td>{user.id}</td>
                                <td>{user.title}</td>
                                <td>{user.price}</td>
                                <td>{user.description}</td>
                                <td>{user.category}</td>
                                <td>{user.image}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
