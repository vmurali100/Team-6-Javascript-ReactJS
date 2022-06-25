import axios from 'axios'
import React, { Component } from 'react'

export default class Practice3 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Users: []
        }
    }
    componentDidMount() {
        const url = "http://localhost:3000/Filltext1 "
        axios.get(url).then((response) => {
            this.setState({ Users: response.data })

        })
    }
    render() {
        return (
            <div>
                <p>Practice3</p>

                <table border={2}>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Email</th>
                            <th>Username</th>
                            <th>Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.Users.map(function (user,i) {
                            return <tr key={i}>
                                <td>{user.id}</td>
                                <td>{user.email}</td>
                                <td>{user.username}</td>
                                <td>{user.password}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
                {/* <ul>
            {this.state.Users.map(function (user){
                return 
            })}
        </ul> */}
            </div>
        )
    }
}
