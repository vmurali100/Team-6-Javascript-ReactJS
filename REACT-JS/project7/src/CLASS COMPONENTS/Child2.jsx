import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Parent2 from './Parent2'

export default class Child2 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showusers: false
        }
    }
    userDetails = (() => {
        this.setState({ showusers: true })
    })
    render() {
        return (
            <div>
                <button onClick={this.userDetails}>Send Data Parent To Child</button>
                {this.state.showusers && <ul>
                    {this.props.Details.map((user, i) => {
                        return <div className="userInfo" key={i}>
                            <p>{user.id}</p>
                            <p>{user.email}</p>
                            <p>{user.username}</p>
                            <p>{user.password}</p>

                        </div>
                    })}
                </ul>
                }
            </div>
        )
    }
}

