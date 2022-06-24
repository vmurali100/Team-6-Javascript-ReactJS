import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Childs4 from './Childs4'

export default class Parents4 extends Component {
    constructor() {
        super()

        this.state = {
            Users: []
        }
    }
    ReceivedUsers = (Users) => {
        this.setState({ Users })
    }
    render() {
        const { ReceivedUsers } = this
        const { Users } = this.state
        return (
            <div>
                <Childs4 ReceivedUsers={ReceivedUsers} />
                <ul>
                    {Users.map((user, i) => {
                        return <div className="userinfo" key={i}>
                            <p>{user.id}</p>
                            <p>{user.email}</p>
                            <p>{user.username}</p>
                            <p>{user.password}</p>
                        </div>
                    })}
                </ul>
            </div>
        )
    }
}