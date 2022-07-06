import React, { Component } from 'react'

export default class NewClickCounter extends Component {
    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         count: 0
    //     }
    // }
    // incrementCount = () => {
    //     this.setState({ count: this.state.count + 1 })
    // }
    render() {
        return (
            <div>
                <p>NewClickCounter</p>
                <button onClick={this.props.incrementCount}>incrementCount</button>
                <button onClick={this.props.decrementcount}>decrementcount</button>
                <h1>Clicked {this.props.count} many times</h1>
            </div>
        )
    }
}
