import { Component } from "react";

export class ChildComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ShowUsers: false,
        }
    }
    handleAShowUsers = ()=>{
        this.setState({ShowUsers:true})
    }
    render() {
        return (
            <div>
                <button onClick={this.handleAShowUsers}>Show users</button>
                {this.state.ShowUsers && (
                    <ul>
                        {this.props.Allusers.map((user, i) => {
                            return <li key={i}>{user}</li>
                        })}
                    </ul>
                    )}
            </div>
        )
    }
}