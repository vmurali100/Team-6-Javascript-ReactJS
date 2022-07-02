import React, { Component } from 'react'

export const HOCcomponent = (Originalcomponent) => {
    class HOCcomponent extends Component {
        constructor(props) {
            super(props)

            this.state = {
                count: 0
            }
       
        }
        handleIncrement = () => {
            this.setState({ count: this.state.count + 1 })
        }
        render() {
            return (
                <Originalcomponent count={this.state.count} handleIncrement={this.handleIncrement} />
            )
        }
    }

    return (
        HOCcomponent
    )
}
