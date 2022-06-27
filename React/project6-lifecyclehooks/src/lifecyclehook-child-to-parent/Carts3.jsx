import React, { Component } from 'react'
import Cartschild3 from './Cartschild3'

export default class Carts3 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            carts: []
        }
    }
    receivecarts = (carts) => {
        this.setState({ carts })
    }
    render() {
        const { receivecarts } = this
        const { carts } = this.state
        return (
            <div>
                <Cartschild3 receivecarts={receivecarts} />
                <table border={1}>
                    <thead>
                        <tr>

                            <th>id</th>
                            <th>userId</th>
                            <th>date</th>
                            <th>__v</th>
                            <th>email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {carts.map((user, i) => {
                            return <tr key={i}>
                                <td>{user.id}</td>
                                <td>{user.userId}</td>
                                <td>{user.date}</td>
                                <td>{user.__v}</td>
                                <td>{user.email}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
