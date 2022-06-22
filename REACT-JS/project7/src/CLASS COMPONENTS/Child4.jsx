import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Parent4 from './Parent4'

export default class Child4 extends Component {
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
                            <p>{user.fname}</p>
                            <p>{user.lname}</p>
                        </div>
                    })}
                </ul>
                }
            </div>
        )
    }
}

