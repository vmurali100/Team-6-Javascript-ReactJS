import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Child5 from "./Child5"

export default class Parent5 extends Component {
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
                <Child5 receivedusers={receivedusers} />
                <ul>
                    {users.map((users, i) => {
                        return <div className='userInfo' key={i}>

                            <p>{users.postId}</p>

                            <p>{users.userId}</p>
                            <p>{users.id}</p>
                            <p>{users.title}</p>
                        </div>
                    })}
                </ul>
            </div>
        )
    }
}
