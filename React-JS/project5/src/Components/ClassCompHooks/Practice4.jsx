import axios from 'axios'
import React, { Component } from 'react'

export default class Practice4 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Users: []
        }
    }
    componentDidMount() {
        const url = "http://localhost:3000/Photos "
        axios.get(url).then((response) => {
            this.setState({ Users: response.data })

        })
    }
    render() {
        return (
            <div>
                <p>Practice4</p>

                <table border={2}>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Url</th>
                            <th>ThumbnailUrl</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.Users.map(function (user,i) {
                            return <tr key={i}>
                                <td>{user.id}</td>
                                <td>{user.title}</td>
                                <td>{user.url}</td>
                                <td>{user.thumbnailUrl}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
