import React, { Component } from 'react'

export const HOC = (OriginalComp) => {

    class HOC extends Component {
        constructor(props) {
            super(props)

            this.state = {
                count: 0
            }
        }
        IncrementCount = () => {
            this.setState({ count: this.state.count + 1 })
        }
        render() {
            return (
                <OriginalComp count={this.state.count} IncrementCount={this.IncrementCount}/>
            )
        }
    }

    return HOC
}




