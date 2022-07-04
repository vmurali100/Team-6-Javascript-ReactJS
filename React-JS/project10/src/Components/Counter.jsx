import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    Incrementcount = () => {
        this.setState({ count: this.state.count + 1 })
    }
    DecrementsCount = () => {
        this.setState({ count: this.state.count - 1 })
    }
    render() {
        return (
            <div>
                {this.props.render(this.state.count, this.Incrementcount, this.DecrementsCount)}
            </div>
        )
    }
}
