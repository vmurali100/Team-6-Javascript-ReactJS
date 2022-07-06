import React, { Component } from 'react'

export const HOCComponents = (OriginalComponents) => {
    class HOCComponents extends Component {
        constructor(props) {
            super(props)

            this.state = {
                count: 0
            }
            //   console.log(this.props)
        }

        HandleIncremennt = () => {
            this.setState({ count: this.state.count + 1 })
        }
        render() {
            return (
                <OriginalComponents count={this.state.count} HandleIncremennt={this.HandleIncremennt} />
            )
        }
    }

    return HOCComponents;


}

export default HOCComponents