import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Parent1 from './Parent1'

export default class Child1 extends Component {
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
                            <p>{user.body}</p>

                        </div>
                    })}
                </ul>
                }
            </div>
        )
    }
}

