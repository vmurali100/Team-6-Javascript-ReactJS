import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Child3 from "./Child3"

export default class Parent3 extends Component {
    constructor() {
        super()

        this.state = {
            users: []
        }
    }
    receivedusers = (users) => {
        this.setState({ users })
    }
    render() {
        const { receivedusers } = this
        const { users } = this.state
        return (
            <div>
                <Child3 receivedusers={receivedusers} />
                <ul>
                    {users.map((users, i) => {
                        return <div className='userInfo' key={i}>
                            <p>{users.userId}</p>
                            <p>{users.id}</p>
                            <p>{users.title}</p>
                            <p>{users.body}</p>

                        </div>
                    })}
                </ul>
            </div>
        )
    }
}
