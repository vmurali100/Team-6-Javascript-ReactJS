import { Component } from "react";

export class Child1 extends Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            showUsers: false
        }
        this.state = {
            showPerson: false
        }
        this.state = {
            UsersName: false
        }
    }
    displayshowUsers = (() => {
        this.setState({ showUsers: true })
    })
    dispalyperson = (() => {
        this.setState({ showPerson: true })
    })
    displayUsersname = (() => {
        this.setState({ UsersName: true })
    })

    render() {
        return (
            <div>

                <button onClick={this.displayshowUsers}>showUsers</button>
                {this.state.showUsers && <ul>
                    {this.props.allusers.map((user, i) => {
                        return <li key={i}>{user}</li>
                    })}
                </ul>}
                <button onClick={this.dispalyperson}>showPerson</button>
                {this.state.showPerson && <p>{this.props.allpersons.fname}-{this.props.allpersons.lname}</p>}
                {/* <p>{this.props.allpersons.fname}-{this.props.allpersons.lname}</p> */}

                <button onClick={this.displayUsersname}>UsersName</button>
                {this.state.UsersName && <p>{this.props.allusername.myName}</p>}
                {/* <p>{this.props.allusername.myName}</p> */}
               
            </div>
        )
    }
}