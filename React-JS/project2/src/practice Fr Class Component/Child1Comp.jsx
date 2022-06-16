import { Component } from "react";

export class Child1Comp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Showusers:false,
        }
    }
    HandleAShowusers = () => {
        this.setState({Showusers:true})
    }
    render() {
        return (
            <div>
                <button onClick={this.HandleAShowusers}>Show Users</button>
                {this.state.Showusers && <ul>
                    {this.props.AllUsers.map((user, i) => {
                        return <li key={i}>{user}</li>
                    })}
                </ul>}
            </div>
        )
    }
}