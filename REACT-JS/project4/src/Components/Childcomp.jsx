import React, { component } from "react";
import { Component } from "react";

export default class ChildComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showUsers: false

        };
    }

    handleshowusers = () => {
        this.setState({showUsers:true})

    };
    render() {
        return (
            <div>
                <button onClick={this.handleshowusers}>showUsers</button>
                {this.state.showUsers && (
                    <ul>
                        {this.props.allUsers.map((user, i) => {
                            return <li key={i}>{user}</li>
                        }
                        )}
                    </ul>
                )}
            </div>
        )
    }
}