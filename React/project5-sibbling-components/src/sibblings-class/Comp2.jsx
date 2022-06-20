import { Component } from "react";

export class Comp2 extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
       
        return (
            <div>
                <p>component2</p>
                <p>{this.props.message}</p>
                <p>{this.props.person.fname}-{this.props.person.lname}</p>
                <ul>{this.props.posts.map((user,i)=>{
                    return <li key={i}>{user.userId} {user.id} {user.title}</li>
                })}</ul>
            </div>
        )
    }
}