import React, { Component } from 'react'

export default class Counter1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 1
        }
    }
    increaseCount = () => {
        this.setState({ count: this.state.count + 1 })
    }
    decreasecount = () => {
        this.setState({ count: this.state.count - 1 })
    }
    render() {
        return (
            <div>
                {this.props.render(this.state.count, this.increaseCount, this.decreasecount)}
            </div>
        )
    }
}
