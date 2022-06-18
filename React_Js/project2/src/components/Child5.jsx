import { Component } from "react";

export default class Child5 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showbiscuit: false
        }
    }
    handleshowbiscuit = () => {
        this.setState({ showbiscuit: true })
    }
    render() {
        return (
            <div>
                <button onClick={this.handleshowbiscuit}>show biscuits</button>
                {this.state.showbiscuit && (
                    <ul>
                        {this.props.allbiscuits.map((user, i) => {
                            return <li key={i}>{user}</li>
                        })}
                    </ul>
                )}
            </div>
        )
    }
}