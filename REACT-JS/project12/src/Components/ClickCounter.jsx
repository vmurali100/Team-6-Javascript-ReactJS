import React, { Component } from 'react'
import HOCComponents from './HOCComponents'

class ClickCounter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    // HandleIncremennt = () => {
    //     this.setState({ count: this.state.count + 1 })

    // }
    render() {
        // console.log(this.props)

        return (
            <div>
                <p>ClickCounter</p>
                <button onClick={this.props.HandleIncremennt}>Click To HandleIncremennt Count</button>

         <h2>The Count is:{this.props.count}</h2>  
        </div> 
        )
    }
}

export default HOCComponents(ClickCounter)
