import { Component } from "react";

export default class Child8 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showstates: false
        }
    }
    handleshowstates = () => {
        this.setState({ showstates: true })
    }
    render() {
        return (
            <div>
                <button onClick={this.handleshowstates}>show states</button>
                {this.state.showstates && (
                    <ul>
                        {this.props.allstates.map((user, i) => {
                            return <li key={i}>{user}</li>
                        })}
                    </ul>
                )}
            </div>
        )
    }
}