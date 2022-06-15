import { Component } from "react";

export class ChildComponent extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            ShowData: false
        };
    }
    HandleAShowdata = () => {
        this.setState({ ShowData: true })
    };
    render() {
        return (
            <div>
                <button onClick={this.HandleAShowdata}>Show Data</button>
                {this.state.ShowData && (
                    <ul>
                        {this.props.allUsers.map((user, i) => {
                            return <li key={i}>{user}</li>

                        })}
                    </ul>
                )}
            </div>
        )
    }
}