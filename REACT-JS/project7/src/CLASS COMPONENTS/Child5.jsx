import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Parent5 from './Parent5'

export default class Child5 extends Component {
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
                            <p>{user.userId}</p>
                            <p>{user.id}</p>
                            <p>{user.title}</p>
                            <p>{user.completed}</p>
                        </div>
                    })}
                </ul>
                }
            </div>
        )
    }
}

