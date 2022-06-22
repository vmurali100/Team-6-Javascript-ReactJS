import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class Childs2 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showUsers: false
        }
    }
    userDetails = (() => {
        this.setState({ showUsers: true })
    })
    render() {
        return (
            <div>
                <button onClick={this.userDetails}>Send Data Parents To Childs</button>
                {this.state.showUsers && <ul>
                    {this.props.Details.map((user, i) => {
                        return <div className="userinfo" key={i}>
                            <p>{user.id}</p>
                            <p>{user.email}</p>
                            <p>{user.username}</p>
                            <p>{user.password}</p>
                        </div>
                    })}
                </ul>}
            </div>
        )
    }
}
