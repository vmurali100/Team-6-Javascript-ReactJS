import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Parent3 from './Parent3'

export default class Child3 extends Component {
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
                            <p>{user.tel}</p>
                            <p>{user.address}</p>
                            <p>{user.city}</p>
                            <p>{user.state}</p>
                            <p>{user.zip}</p>


                        </div>
                    })}
                </ul>
                }
            </div>
        )
    }
}

