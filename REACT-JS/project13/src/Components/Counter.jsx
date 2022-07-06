import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    incrementCount = () => {
        this.setState({ count: this.state.count + 1 })
    }
    decrementcount = () => {
        this.setState({ count: this.state.count - 1 })
    }
    render() {
        return (
            <div>
                {this.props.render(this.props.count, this.incrementCount, this.decrementcount)}
            </div>
        )
    }
}
