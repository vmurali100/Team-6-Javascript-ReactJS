import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Child4 from "./Child4"

export default class Parent4 extends Component {
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
                <Child4 receivedusers={receivedusers} />
                <ul>
                    {users.map((users, i) => {
                        return <div className='userInfo' key={i}>

                            <p>{users.postId}</p>

                            <p>{users.id}</p>
                            <p>{users.name}</p>
                            <p>{users.email}</p>
                            <p>{users.body}</p>

                        </div>
                    })}
                </ul>
            </div>
        )
    }
}
