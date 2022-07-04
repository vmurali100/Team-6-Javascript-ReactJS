import React, { Component } from 'react'

export default class NewClickCounter extends Component {

    render() {
        return (
            <div>
                <p>NewClickCounter</p>
                <button onClick={this.props.Incrementcount}>Increments</button>
                <button onClick={this.props.DecrementCount}>Decrements</button>
                <h1>Clicked {this.props.count} Many times</h1>
            </div>
        )
    }
}
