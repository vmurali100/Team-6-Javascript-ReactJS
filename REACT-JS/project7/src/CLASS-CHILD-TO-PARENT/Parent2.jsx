import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Child2 from "./Child2"

export default class Parent2 extends Component {
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
                <Child2 receivedusers={receivedusers} />
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
